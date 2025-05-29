import type { Car } from "../../types/cars";
import type { StateCreator } from "zustand";
import type { AppState } from "../carStore";

export interface QuotedCarsState {
  quotedCars: Car[];
  addCarToQuote: (car: Car) => void;
  removeCarFromQuote: (car: Car) => void;
  getQuotedCarOrder: (car: Car) => number;
  isCarQuoted: (car: Car) => boolean;
}

export const createQuotedCarsSlice: StateCreator<
  AppState,
  [],
  [],
  QuotedCarsState
> = (set, get) => ({
  quotedCars: [],
  addCarToQuote: (car: Car) => {
    const { quotedCars } = get();
    if (quotedCars.length < 5 && !quotedCars.find((qc) => qc === car)) {
      set({ quotedCars: [...quotedCars, car] });
    }
  },
  removeCarFromQuote: (car: Car) => {
    set((state) => ({
      quotedCars: state.quotedCars.filter((qc) => qc !== car),
    }));
  },
  getQuotedCarOrder: (car: Car) => {
    const { quotedCars } = get();
    const index = quotedCars.findIndex((qc) => qc === car);
    return index === -1 ? 0 : index + 1;
  },
  isCarQuoted: (car: Car) => {
    const { quotedCars } = get();
    return quotedCars.some((qc) => qc === car);
  },
});
