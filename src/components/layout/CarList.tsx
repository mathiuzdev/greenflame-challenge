import { CarCard } from "../car/CardCar";
import type { Car } from "../../types/cars";
import { useCarStore } from "../../store/carStore";
import type { CarWithProvider } from "../../hooks/useFilteredCars"; // Import CarWithProvider

interface CarListProps {
  sortedCars: CarWithProvider[]; // Changed from Car[] to CarWithProvider[]
  data: any;
  getOrderedFeatures: (features: any) => any[];
  getCarEstimatedPrice: (car: Car, currency?: "COP" | "USD") => string | null;
  onAddToQuote: (car: CarWithProvider) => void; // Changed Car to CarWithProvider
  onShowInFooter: (car: CarWithProvider) => void; // Changed Car to CarWithProvider
  carCurrentlyInFooter: CarWithProvider | null; // Changed Car to CarWithProvider
}

export const CarList = ({
  sortedCars,
  getOrderedFeatures,
  getCarEstimatedPrice,
  onAddToQuote,
  onShowInFooter,
  carCurrentlyInFooter,
}: CarListProps) => {
  const { isCarQuoted, getQuotedCarOrder } = useCarStore();

  return (
    <section className="flex flex-col gap-6">
      {sortedCars.map((car: CarWithProvider, index: number) => {
        // Get company directly from car.provider_name
        const company = car.provider_name || "";

        // Logo de la compañía
        const companyLogo = company
          ? `/imgs/icons_logos/${company.toLowerCase()}-logo.svg`
          : "/placeholder.svg";

        // Estrellas
        const stars = Number(car.stars) || 0;
        const solidStars = Array(stars).fill(0);
        const outlinedStars = Array(5 - stars).fill(0);

        const priceCOP = getCarEstimatedPrice(car, "COP") || "N/A";
        const priceUSDValue = getCarEstimatedPrice(car, "USD") || "N/A";

        const isQuoted = isCarQuoted(car);
        const isDisplayedInFooter = carCurrentlyInFooter === car;
        const selectionOrder = getQuotedCarOrder(car);

        return (
          <div key={`${car.name_details}-${index}-${company}`}>
            <CarCard
              company={company}
              companyLogo={companyLogo}
              solidStars={solidStars}
              outlinedStars={outlinedStars}
              image={car.picture_url?.normal || car.picture_url?.featured || ""}
              isHighlighted={car.highlighted}
              group={car.vehicle_group}
              nameDetail={car.name_details}
              category={car.code}
              model={car.features?.category}
              features={getOrderedFeatures(car.features)}
              price={priceCOP}
              priceUSD={priceUSDValue}
              carObj={car} // carObj is now CarWithProvider
              onQuoteSelect={() => onAddToQuote(car)}
              onFooterSelect={() => onShowInFooter(car)}
              isDisplayedInFooter={isDisplayedInFooter}
              isQuoted={isQuoted}
              selectionOrder={selectionOrder}
            />
          </div>
        );
      })}
    </section>
  );
};
