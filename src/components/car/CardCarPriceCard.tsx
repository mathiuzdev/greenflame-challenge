import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import CardCarPriceModal from "./CardCarPriceModal";

interface Inclusion {
  name: string;
  description?: string;
}

interface CardCarPriceCardProps {
  price: string | number;
  priceUSD: string | number;
  inclusions?: Inclusion[];
  rateName?: string;
  isDisplayedInFooter: boolean;
  onFooterSelect: () => void;
  isQuoted: boolean;
  selectionOrder: number;
  carId: string;
}

export const CardCarPriceCard = ({
  price,
  priceUSD,
  inclusions = [],
  rateName = "Inclusive Light (H8)",
  isDisplayedInFooter,
  onFooterSelect,
  isQuoted,
  selectionOrder,
  carId,
}: CardCarPriceCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  let buttonText = "Seleccionar";
  let buttonDisabled = false;
  let buttonClasses =
    "mt-3 mb-6 bg-UDR pt-3 cursor-pointer px-20 pb-3.5 text-white w-[85%] h-12 rounded-lg font-bold text-base shadow-[0_2px_8px_0_rgba(59,92,184,0.10)] border-none flex items-center justify-center transition-colors duration-200 hover:bg-[#2E4A9A]";

  if (isDisplayedInFooter) {
    buttonText = "Plan actual";

    buttonClasses =
      "mt-3 mb-6 bg-gray-200 pt-3 px-20 pb-3.5 text-white w-[85%] h-12 rounded-lg font-bold text-base shadow-[0_2px_8px_0_rgba(59,92,184,0.10)] border-none flex items-center justify-center cursor-pointer";
  } else if (isQuoted) {
  }

  return (
    <div className="w-[293px] h-[229px] my-[21px] flex items-center justify-center mr-6 ml-8">
      <div
        className={`w-[293px] h-[229px] rounded-2xl border-[1.5px] relative flex flex-col justify-between items-center ${
          isDisplayedInFooter ? "border-UDR" : "border-white"
        }`}
        style={{ boxShadow: "0px 0px 6px 0px #0000001A" }}
      >
        <div className="w-full text-center pt-6 px-6">
          <div className="flex items-center justify-center gap-[18px] mb-1">
            <span className="font-bold text-gray-800 text-base">
              {rateName.split(" (")[0]}{" "}
            </span>
            <button
              onClick={() => setOpenModal(true)}
              aria-label="Ver detalles de tarifa"
            >
              <img
                src="/imgs/icons_logos/info-icon.svg"
                alt="info"
                className=""
              />
            </button>
          </div>
          <p className="text-xs font-normal text-gray-500 mb-1">
            Precio por 3 días de renta
          </p>
          <hr
            className="border-t border-gray-200 my-3"
            style={{ borderWidth: 1.5 }}
          />
          <p className="text-2xl font-bold text-UDR mb-1">
            <span className="text-base">COP</span> {formatPrice(price)}
          </p>
          <p className="font-medium text-gray-500">
            (USD {formatPrice(priceUSD)})
          </p>
        </div>

        <button
          className={buttonClasses}
          onClick={onFooterSelect}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>

        <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-[0_2px_8px_0_rgba(59,92,184,0.10)] flex items-center justify-center border border-[#E3E8EF] border-[1.5px] text-UDR">
          <img
            src="/imgs/icons_logos/arrow-icon.svg"
            alt="prev"
            className="w-[18px] h-[18px] rotate-180 text-UDR"
            style={{
              filter:
                "invert(38%) sepia(92%) saturate(749%) hue-rotate(185deg) brightness(95%) contrast(92%)",
            }}
          />
        </div>
        <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-[0_2px_8px_0_rgba(59,92,184,0.10)] flex items-center justify-center border border-[#E3E8EF] border-[1.5px]">
          <img
            src="/imgs/icons_logos/arrow-icon.svg"
            alt="next"
            className="w-[18px] h-[18px]"
          />
        </div>
        <CardCarPriceModal
          key={`modal-${carId}`}
          open={openModal}
          onClose={() => setOpenModal(false)}
          inclusions={inclusions}
          rateName={rateName}
        />
      </div>
    </div>
  );
};
