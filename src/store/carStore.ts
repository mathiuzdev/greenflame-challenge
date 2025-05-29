import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createCarDataSlice, type CarDataState } from "./slices/carDataSlice";

import {
  createQuotedCarsSlice,
  type QuotedCarsState,
} from "./slices/filterSelectionSlice";

import {
  createFilterSelectionsSlice,
  type FilterSelectionsState,
} from "./slices/quotedCarsSlice";

export type AppState = CarDataState & QuotedCarsState & FilterSelectionsState;

export const useCarStore = create<AppState>()(
  devtools(
    (...a) => ({
      ...createCarDataSlice(...a),
      ...createQuotedCarsSlice(...a),
      ...createFilterSelectionsSlice(...a),
    }),
    { name: "CarStore" }
  )
);
