import type { StateCreator } from "zustand";
import type { AppState } from "../carStore";

export interface FilterSelectionsState {
  selectedCompanies: string[];
  setSelectedCompanies: (companies: string[]) => void;
  selectedVehicleTypes: string[];
  setSelectedVehicleTypes: (types: string[]) => void;
  selectedPassengers: string[];
  setSelectedPassengers: (passengers: string[]) => void;
  selectedSuitcaseCapacity: string[];
  setSelectedSuitcaseCapacity: (capacities: string[]) => void;
  selectedPriceRange: [number, number] | null;
  setSelectedPriceRange: (range: [number, number]) => void;
}

export const createFilterSelectionsSlice: StateCreator<
  AppState,
  [],
  [],
  FilterSelectionsState
> = (set) => ({
  selectedCompanies: [],
  setSelectedCompanies: (companies: string[]) =>
    set({ selectedCompanies: companies }),
  selectedVehicleTypes: [],
  setSelectedVehicleTypes: (types: string[]) =>
    set({ selectedVehicleTypes: types }),
  selectedPassengers: [],
  setSelectedPassengers: (passengers: string[]) =>
    set({ selectedPassengers: passengers }),
  selectedSuitcaseCapacity: [],
  setSelectedSuitcaseCapacity: (capacities: string[]) =>
    set({ selectedSuitcaseCapacity: capacities }),
  selectedPriceRange: null,
  setSelectedPriceRange: (range: [number, number]) =>
    set({ selectedPriceRange: range }),
});
