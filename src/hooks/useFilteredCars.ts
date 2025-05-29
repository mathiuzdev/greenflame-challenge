import { useMemo } from "react";
import { useCarStore } from "../store/carStore";
import { useShallow } from "zustand/shallow";

export const useFilteredCars = () => {
  const { data, selectedCompanies, selectedPriceRange, priceRange } =
    useCarStore(
      useShallow((state) => ({
        data: state.data,
        selectedCompanies: state.selectedCompanies,
        selectedPriceRange: state.selectedPriceRange,
        priceRange: state.priceRange,
      }))
    );

  const [selectedSuitcaseCapacity, setSelectedSuitcaseCapacity] = useCarStore(
    useShallow((state) => [
      state.selectedSuitcaseCapacity,
      state.setSelectedSuitcaseCapacity,
    ])
  );

  const [selectedVehicleTypes, setSelectedVehicleTypes] = useCarStore(
    useShallow((state) => [
      state.selectedVehicleTypes,
      state.setSelectedVehicleTypes,
    ])
  );
  const [selectedPassengers, setSelectedPassengers] = useCarStore(
    useShallow((state) => [
      state.selectedPassengers,
      state.setSelectedPassengers,
    ])
  );
  const setSelectedPriceRange = useCarStore(
    (state) => state.setSelectedPriceRange
  );

  const filteredCars = useMemo(() => {
    if (!data) return [];
    let cars: any[] = [];
    if (selectedCompanies && selectedCompanies.length > 0) {
      (selectedCompanies as (keyof typeof data.cars)[]).forEach(
        (companyKey) => {
          if (data.cars[companyKey]) {
            cars = cars.concat(data.cars[companyKey]);
          }
        }
      );
    } else {
      cars = Object.values(data.cars).flat();
    }
    if (selectedVehicleTypes && selectedVehicleTypes.length > 0) {
      cars = cars.filter((car: any) =>
        selectedVehicleTypes.includes(car.features?.category)
      );
    }
    if (selectedPassengers && selectedPassengers.length > 0) {
      cars = cars.filter((car: any) =>
        selectedPassengers.includes(String(car.features?.seats))
      );
    }

    if (selectedSuitcaseCapacity && selectedSuitcaseCapacity.length > 0) {
      cars = cars.filter((car: any) => {
        const large = Number(car.features?.large_suitcase) || 0;
        const small = Number(car.features?.small_suitcase) || 0;
        const total = large + small;

        return selectedSuitcaseCapacity.some((cap) => total >= Number(cap));
      });
    }

    if (selectedPriceRange && selectedPriceRange.length === 2) {
      const [min, max] = selectedPriceRange;
      cars = cars.filter((car: any) => {
        const rates = car.rates ? Object.values(car.rates) : [];

        const rateWithPricing = rates.find((rate: any) => {
          return (
            rate &&
            typeof rate === "object" &&
            "pricing" in rate &&
            rate.pricing &&
            ((rate.pricing.COP && // Check for COP first
              rate.pricing.COP.total_charge &&
              rate.pricing.COP.total_charge.base &&
              rate.pricing.COP.total_charge.base.total_amount) ||
              (rate.pricing.USD && // Fallback to USD
                rate.pricing.USD.total_charge &&
                rate.pricing.USD.total_charge.base &&
                rate.pricing.USD.total_charge.base.total_amount))
          );
        });
        if (rateWithPricing) {
          const priceStr =
            (rateWithPricing as any).pricing.COP?.total_charge?.base
              ?.total_amount ||
            (rateWithPricing as any).pricing.USD?.total_charge?.base
              ?.total_amount;
          const price = priceStr ? parseFloat(priceStr) : null;
          if (typeof price === "number" && !isNaN(price)) {
            return price >= min && price <= max;
          }
        }
        return false;
      });
    }
    return cars;
  }, [
    data,
    selectedCompanies,
    selectedVehicleTypes,
    selectedPassengers,
    selectedPriceRange,
    selectedSuitcaseCapacity,
  ]);

  return {
    filteredCars,
    setSelectedVehicleTypes,
    selectedVehicleTypes,
    setSelectedPassengers,
    selectedPassengers,
    selectedSuitcaseCapacity,
    setSelectedSuitcaseCapacity,
    selectedPriceRange,
    setSelectedPriceRange,
    priceRange,
  };
};
