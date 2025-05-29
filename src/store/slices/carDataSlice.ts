import type { RootObject, Car } from "../../types/cars";
import type { StateCreator } from "zustand";
import type { AppState } from "../carStore";

export interface CarDataState {
  data: RootObject | null;
  loading: boolean;
  error: string | null;
  priceRange: [number, number] | null;
  fetchCars: () => Promise<void>;
}

export const createCarDataSlice: StateCreator<
  AppState,
  [],
  [],
  CarDataState
> = (set) => ({
  data: null,
  loading: false,
  error: null,
  priceRange: null,
  fetchCars: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/data/carsJSON.json");
      if (!res.ok) throw new Error("Failed to fetch cars data");
      const json: RootObject = await res.json();

      let min = Infinity;
      let max = -Infinity;
      const allCars: Car[] = Object.values(json.cars).flat();

      allCars.forEach((car) => {
        const rates = car.rates ? Object.values(car.rates) : [];
        if (rates.length > 0) {
          const rate = rates[0] as any;
          const priceStr =
            rate?.pricing?.COP?.total_charge?.base?.total_amount ||
            rate?.pricing?.USD?.total_charge?.base?.total_amount;
          const price = priceStr ? parseFloat(priceStr) : null;
          if (typeof price === "number" && !isNaN(price)) {
            if (price < min) min = price;
            if (price > max) max = price;
          }
        }
      });

      if (!isFinite(min) || !isFinite(max)) {
        min = 0;
        max = 0;
      }

      set({
        data: json,
        loading: false,
        priceRange: [min, max],

        selectedPriceRange: [min, max],
      });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
});
