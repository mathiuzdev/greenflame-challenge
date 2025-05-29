import type { Car } from "../../types/cars";
import { formatPrice } from "../../utils/formatPrice";
import { getCarEstimatedPrice } from "../../utils/getCarEstimatedPrice";

interface SelectedCarFooterProps {
  selectedCar: Car;
  data: any;
  onClose: () => void;
  onContinue: () => void;
}

function getCompanyFromCar(car: Car, data: any) {
  if (!car || !data || !data.cars) return "";
  for (const key of Object.keys(data.cars)) {
    if (
      Array.isArray(data.cars[key]) &&
      data.cars[key].some((c: Car) => c === car)
    ) {
      return key;
    }
  }
  return "";
}

export const SelectedCarFooter = ({
  selectedCar,
  data,
  onClose,
  onContinue,
}: SelectedCarFooterProps) => {
  if (!selectedCar) return null;

  const companyName = getCompanyFromCar(selectedCar, data);
  const rateKey = selectedCar.rates ? Object.keys(selectedCar.rates)[0] : "N/A";

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 bg-white shadow-lg  flex items-center justify-between px-[310px] py-5"
      style={{ minHeight: 90 }}
    >
      <div className="flex items-center gap-14">
        <img
          src={`/imgs/icons_logos/${companyName.toLowerCase()}-logo.svg`}
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
          src={
            selectedCar.picture_url?.normal ||
            selectedCar.picture_url?.featured ||
            ""
          }
          alt={`${selectedCar.name_details} car`}
          className="h-12"
        />
        <div className="flex flex-col items-end">
          <span className="font-bold text-UDR text-[20px]">
            COP {formatPrice(getCarEstimatedPrice(selectedCar, "COP") || "N/A")}
          </span>
          <span className="text-gray-500 font-medium text-sm">
            USD {formatPrice(getCarEstimatedPrice(selectedCar, "USD") || "N/A")}
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
  );
};
