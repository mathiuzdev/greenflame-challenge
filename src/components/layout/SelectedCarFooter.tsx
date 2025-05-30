import type { CarWithProvider } from "../../hooks/useFilteredCars";
import { formatPrice } from "../../utils/formatPrice";
import { getCarEstimatedPrice } from "../../utils/getCarEstimatedPrice";

interface SelectedCarFooterProps {
  selectedCar: CarWithProvider;
  onClose: () => void;
  onContinue: () => void;
}

export const SelectedCarFooter = ({
  selectedCar,
  onClose,
  onContinue,
}: SelectedCarFooterProps) => {
  if (!selectedCar) return null;

  const companyName = selectedCar.provider_name || "";
  const rateKey = selectedCar.rates ? Object.keys(selectedCar.rates)[0] : "N/A";

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 bg-white shadow-lg  flex items-center justify-between  py-5"
      style={{ minHeight: 90 }}
    >
      <div className="max-w-[1273px] min-w-[1273px]  mx-auto flex justify-between">
        <div className="flex items-center gap-14">
          <img
            src={
              companyName
                ? `/imgs/icons_logos/${companyName.toLowerCase()}-logo.svg`
                : "/placeholder.svg"
            }
            alt={`${companyName} logo`}
          />
          <div className="flex flex-col items-start">
            <span className="font-bold text-gray-800 text-[20px]">
              Inclusive Light - {rateKey}
            </span>
            <button className="text-UDR font-medium text-sm">
              Ver detalle de la tarifa
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img
            src="https://www.budget.com.au/content/dam/cars/mystery-car/l/orange_featured.png"
            alt={`${selectedCar.name_details} car`}
            className="h-18"
          />
          <div className="flex flex-col items-end">
            <span className="font-bold text-UDR text-[20px]">
              COP{" "}
              {formatPrice(getCarEstimatedPrice(selectedCar, "COP") || "N/A")}
            </span>
            <span className="text-gray-500 font-medium text-sm">
              USD{" "}
              {formatPrice(getCarEstimatedPrice(selectedCar, "USD") || "N/A")}
            </span>
          </div>
          <button
            className="bg-UDR text-white font-bold rounded-lg px-10 py-3 ml-4"
            onClick={onContinue}
          >
            Continuar
          </button>
          <button
            className="bg-[#E91248] text-white font-bold rounded-lg flex items-center px-10 py-3 ml-2"
            onClick={onClose}
          >
            <img
              src="/imgs/icons_logos/delete-logo.svg"
              alt="eliminar"
              className="inline-block mr-2 w-4 h-4 align-middle"
            />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
