import { CarCard } from "../car/CardCar";
import type { Car } from "../../types/cars";
import { useCarStore } from "../../store/carStore"; // Import store

interface CarListProps {
  sortedCars: Car[];
  data: any; // Consider defining a more specific type for data
  getOrderedFeatures: (features: any) => any[]; // Define specific types if possible
  getCarEstimatedPrice: (car: Car, currency?: "COP" | "USD") => string | null;
  onAddToQuote: (car: Car) => void; // Added to accept from MainContainer
  onShowInFooter: (car: Car) => void; // Added to accept from MainContainer
  carCurrentlyInFooter: Car | null; // Added to accept from MainContainer
}

export const CarList = ({
  sortedCars,
  data,
  getOrderedFeatures,
  getCarEstimatedPrice,
  onAddToQuote, // Destructure from props
  onShowInFooter, // Destructure from props
  carCurrentlyInFooter, // Destructure from props
}: CarListProps) => {
  const { isCarQuoted, getQuotedCarOrder } = useCarStore(); // Get isCarQuoted and getQuotedCarOrder from store

  return (
    <section className="flex flex-col gap-6">
      {sortedCars.map((car: Car, index: number) => {
        // Buscar la compañía a la que pertenece este auto
        let company = "";
        if (data && typeof data === "object") {
          const carsObj = (data as any).cars || data;
          for (const key of Object.keys(carsObj)) {
            // Use object reference for comparison
            if (
              Array.isArray(carsObj[key]) &&
              carsObj[key].some((c: Car) => c === car)
            ) {
              company = key;
              break;
            }
          }
        }
        // Logo de la compañía
        const companyLogo = `/imgs/icons_logos/${company.toLowerCase()}-logo.svg`;
        // Estrellas
        const stars = Number(car.stars) || 0;
        const solidStars = Array(stars).fill(0);
        const outlinedStars = Array(5 - stars).fill(0);

        // Asegurarse de que price y priceUSD manejen null
        const priceCOP = getCarEstimatedPrice(car, "COP") || "N/A";
        const priceUSDValue = getCarEstimatedPrice(car, "USD") || "N/A";

        const isQuoted = isCarQuoted(car); // Determine if car is quoted
        const isDisplayedInFooter = carCurrentlyInFooter === car;
        const selectionOrder = getQuotedCarOrder(car);

        return (
          // Use a more robust key
          <div key={`${car.name_details}-${index}`}>
            <CarCard
              company={company}
              companyLogo={companyLogo}
              solidStars={solidStars}
              outlinedStars={outlinedStars}
              image={car.picture_url?.normal || car.picture_url?.featured || ""}
              isHighlighted={car.highlighted} // This might need to be dynamic
              group={car.vehicle_group}
              nameDetail={car.name_details}
              category={car.code}
              model={car.features?.category}
              features={getOrderedFeatures(car.features)}
              price={priceCOP}
              priceUSD={priceUSDValue}
              carObj={car}
              onQuoteSelect={() => onAddToQuote(car)} // Pass to CardCar
              onFooterSelect={() => onShowInFooter(car)} // Pass to CardCar
              isDisplayedInFooter={isDisplayedInFooter} // Pass to CardCar
              isQuoted={isQuoted} // Pass to CardCar
              selectionOrder={selectionOrder} // Pass to CardCar
            />
          </div>
        );
      })}
    </section>
  );
};
