import { useEffect, useState, useMemo } from "react";
import { useCarStore } from "../../store/carStore";

import { getOrderedFeatures } from "../../utils/featuresList";
import { useFilteredCars } from "../../hooks/useFilteredCars";
import { getCarEstimatedPrice } from "../../utils/getCarEstimatedPrice";
import { Aside } from "./Aside";
import { MainHeader } from "./MainHeader";
import { CarList } from "./CarList";
import { SelectedCarFooter } from "./SelectedCarFooter";
import type { Car } from "../../types/cars";

export const MainContainer = () => {
  const {
    data,
    loading,
    error,
    fetchCars,
    addCarToQuote,
    removeCarFromQuote,
    quotedCars,
  } = useCarStore();
  const { filteredCars } = useFilteredCars();

  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [carForFooterDisplay, setCarForFooterDisplay] = useState<Car | null>(
    null
  );

  const sortedCars = useMemo(() => {
    return [...filteredCars].sort((a, b) => {
      const priceA = Number(getCarEstimatedPrice(a)) || 0;
      const priceB = Number(getCarEstimatedPrice(b)) || 0;
      return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
    });
  }, [filteredCars, sortOrder]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleToggleQuote = (car: Car) => {
    const isQuoted = quotedCars.find((qc) => qc === car); // Use direct object comparison
    if (isQuoted) {
      removeCarFromQuote(car);
    } else if (quotedCars.length < 5) {
      addCarToQuote(car);
    }
  };

  const handleShowInFooter = (car: Car) => {
    setCarForFooterDisplay(car);
  };

  const handleDeselectFromFooter = () => {
    setCarForFooterDisplay(null); // Ocultar pie de página y deseleccionar de la vista de footer
  };

  const handleContinue = () => {
    // Placeholder for "Continuar" action
    console.log("Continue with cars:", quotedCars);
  };

  return (
    <main className="max-w-screen min-h-[100vh] px-4 md:px-20 xl:px-[312px] py-8 flex gap-8 mx-auto text-sm bg-[#F1F3F6]">
      {/* Sidebar */}
      <Aside />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <MainHeader
          sortedCarsLength={sortedCars.length}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        {loading && <p>Loading cars...</p>}
        {error && <p>Error loading cars: {error}</p>}
        {!loading && !error && (
          <CarList
            sortedCars={sortedCars}
            data={data}
            getOrderedFeatures={getOrderedFeatures}
            getCarEstimatedPrice={getCarEstimatedPrice}
            onAddToQuote={handleToggleQuote} // Changed from handleAddToQuote to handleToggleQuote
            onShowInFooter={handleShowInFooter}
            carCurrentlyInFooter={carForFooterDisplay}
          />
        )}
      </div>
      {/* Footer barra inferior */}
      {carForFooterDisplay && (
        <SelectedCarFooter
          selectedCar={carForFooterDisplay} // Display the last quoted car
          data={data}
          onClose={handleDeselectFromFooter} // Deselect the specific car from footer
          onContinue={handleContinue}
        />
      )}
    </main>
  );
};

export default MainContainer;
