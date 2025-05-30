import { useEffect, useState, useMemo } from "react";
import { useCarStore } from "../../store/carStore";

import { getOrderedFeatures } from "../../utils/featuresList";
import {
  useFilteredCars,
  type CarWithProvider,
} from "../../hooks/useFilteredCars"; // Import CarWithProvider
import { getCarEstimatedPrice } from "../../utils/getCarEstimatedPrice";
import { Aside } from "./Aside";
import { MainHeader } from "./MainHeader";
import { CarList } from "./CarList";
import { SelectedCarFooter } from "./SelectedCarFooter";
import type { Car } from "../../types/cars"; // Keep Car for store interactions if necessary

export const MainContainer = () => {
  const {
    data, // data from store, might be used for other things not related to CarList/SelectedCarFooter directly
    loading,
    error,
    fetchCars,
    addCarToQuote,
    removeCarFromQuote,
    quotedCars,
  } = useCarStore();
  const { filteredCars } = useFilteredCars();

  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [carForFooterDisplay, setCarForFooterDisplay] =
    useState<CarWithProvider | null>(null); // Changed type to CarWithProvider | null
  const [showHighlightedFirst, setShowHighlightedFirst] =
    useState<boolean>(false); // Added state for highlighted filter

  const sortedCars = useMemo(() => {
    let carsToSort = [...filteredCars];

    if (showHighlightedFirst) {
      carsToSort.sort((a, b) => {
        // Prioritize highlighted cars: true comes before false
        if (a.highlighted && !b.highlighted) return -1;
        if (!a.highlighted && b.highlighted) return 1;

        // If both are equally highlighted or not, then sort by price
        const priceA = Number(getCarEstimatedPrice(a)) || 0;
        const priceB = Number(getCarEstimatedPrice(b)) || 0;
        return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
      });
    } else {
      carsToSort.sort((a, b) => {
        const priceA = Number(getCarEstimatedPrice(a)) || 0;
        const priceB = Number(getCarEstimatedPrice(b)) || 0;
        return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
      });
    }
    return carsToSort;
  }, [filteredCars, sortOrder, showHighlightedFirst]); // Removed getCarEstimatedPrice from dependency array

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleToggleQuote = (car: CarWithProvider) => {
    // Changed type to CarWithProvider
    // Assuming addCarToQuote and removeCarFromQuote can handle CarWithProvider
    // or we might need to adjust them or pass only the Car part.
    // For now, let's assume they are compatible or will be updated.
    const isQuoted = quotedCars.find(
      (qc) =>
        qc.name_details === car.name_details &&
        (qc as any).provider_name === car.provider_name
    ); // Adjust comparison if needed
    if (isQuoted) {
      removeCarFromQuote(car as Car); // Cast if store expects Car
    } else if (quotedCars.length < 5) {
      addCarToQuote(car as Car); // Cast if store expects Car
    }
  };

  const handleShowInFooter = (car: CarWithProvider) => {
    // Changed type to CarWithProvider
    setCarForFooterDisplay(car);
  };

  const handleDeselectFromFooter = () => {
    setCarForFooterDisplay(null);
  };

  const handleContinue = () => {
    console.log("Continue with cars:", quotedCars);
  };

  return (
    <main className=" min-h-[100vh]   py-8 flex gap-8  text-sm bg-[#F1F3F6]">
      <div className="flex max-w-[1273px] min-w-[1273px] gap-8 mx-auto">
        <Aside />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <MainHeader
            sortedCarsLength={sortedCars.length}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            showHighlightedFirst={showHighlightedFirst} // Pass state
            setShowHighlightedFirst={setShowHighlightedFirst} // Pass setter
          />
          {loading && <p>Loading cars...</p>}
          {error && <p>Error loading cars: {error}</p>}
          {!loading && !error && (
            <CarList
              sortedCars={sortedCars}
              data={data} // This data prop is reported as unused in CarList, consider removing if truly not needed
              getOrderedFeatures={getOrderedFeatures}
              getCarEstimatedPrice={getCarEstimatedPrice}
              onAddToQuote={handleToggleQuote}
              onShowInFooter={handleShowInFooter}
              carCurrentlyInFooter={carForFooterDisplay} // Removed 'as any'
            />
          )}
        </div>
        {/* Footer barra inferior */}
        {carForFooterDisplay && (
          <SelectedCarFooter
            selectedCar={carForFooterDisplay}
            // data={data} // Removed data prop
            onClose={handleDeselectFromFooter}
            onContinue={handleContinue}
          />
        )}
      </div>
      {/* Sidebar */}
    </main>
  );
};

export default MainContainer;
