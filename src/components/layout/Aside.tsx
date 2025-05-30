import { useMemo } from "react";
import { useCarStore } from "../../store/carStore";
import { FilterCheckboxGroup } from "../filters/FilterCheckboxGroup";
import { FilterPriceSlider } from "../filters/FilterPriceSlider";
import { useFilteredCars } from "../../hooks/useFilteredCars";
import type { CarWithProvider } from "../../hooks/useFilteredCars";
import type { Car } from "../../types/cars";

export const Aside = () => {
  const rawCarData = useCarStore((state) => state.data?.cars);
  const setSelectedCompanies = useCarStore(
    (state) => state.setSelectedCompanies
  );
  const setSelectedVehicleTypes = useCarStore(
    (state) => state.setSelectedVehicleTypes
  );
  const setSelectedSuitcaseCapacity = useCarStore(
    (state) => state.setSelectedSuitcaseCapacity
  );
  const setSelectedPassengers = useCarStore(
    (state) => state.setSelectedPassengers
  );

  const companies = useMemo(() => Object.keys(rawCarData ?? {}), [rawCarData]);

  const vehicleTypes = useMemo(() => {
    const typesSet = new Set<string>();
    if (rawCarData) {
      Object.values(rawCarData).forEach((companyCars: Car[]) => {
        companyCars.forEach((car: Car) => {
          if (car.features.category) {
            typesSet.add(car.features.category);
          }
        });
      });
    }
    return ["Todas las categorías", ...Array.from(typesSet)];
  }, [rawCarData]);

  const capacitySuitcase = useMemo(() => {
    const suitcaseSet = new Set<string>();
    if (rawCarData) {
      Object.values(rawCarData).forEach((companyCars: Car[]) => {
        companyCars.forEach((car: Car) => {
          const large = Number(car.features?.large_suitcase) || 0;
          const small = Number(car.features?.small_suitcase) || 0;
          const total = large + small;
          if (total > 0) suitcaseSet.add(total.toString());
        });
      });
    }
    return Array.from(suitcaseSet).sort((a, b) => Number(a) - Number(b));
  }, [rawCarData]);

  const passengersQuantity = useMemo(() => {
    const passengersSet = new Set<string>();
    if (rawCarData) {
      Object.values(rawCarData).forEach((companyCars: Car[]) => {
        companyCars.forEach((car: Car) => {
          const seats = car.features?.seats;
          if (seats && seats !== "") passengersSet.add(seats.toString());
        });
      });
    }
    return Array.from(passengersSet).sort((a, b) => Number(a) - Number(b));
  }, [rawCarData]);

  const { filteredCars } = useFilteredCars();

  const companyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    companies.forEach((company) => (counts[company] = 0));
    if (!filteredCars || filteredCars.length === 0) return counts;

    (filteredCars as CarWithProvider[]).forEach((car) => {
      if (car.provider_name && counts.hasOwnProperty(car.provider_name)) {
        counts[car.provider_name]++;
      }
    });
    return counts;
  }, [filteredCars, companies]);

  const vehicleTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    vehicleTypes.forEach((vt) => (counts[vt] = 0));

    if (!filteredCars || filteredCars.length === 0) return counts;

    if (counts.hasOwnProperty("Todas las categorías")) {
      counts["Todas las categorías"] = filteredCars.length;
    }

    (filteredCars as CarWithProvider[]).forEach((car) => {
      if (
        car.features?.category &&
        counts.hasOwnProperty(car.features.category)
      ) {
        if (car.features.category !== "Todas las categorías") {
          counts[car.features.category]++;
        }
      }
    });
    return counts;
  }, [filteredCars, vehicleTypes]);

  const suitcaseCapacityCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    capacitySuitcase.forEach((sc) => (counts[sc] = 0));
    if (!filteredCars || filteredCars.length === 0) return counts;

    capacitySuitcase.forEach((capStr) => {
      counts[capStr] = (filteredCars as CarWithProvider[]).filter((car) => {
        const large = Number(car.features?.large_suitcase) || 0;
        const small = Number(car.features?.small_suitcase) || 0;
        const total = large + small;
        return total >= Number(capStr);
      }).length;
    });
    return counts;
  }, [filteredCars, capacitySuitcase]);

  const passengerQuantityCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    passengersQuantity.forEach((pq) => (counts[pq] = 0));
    if (!filteredCars || filteredCars.length === 0) return counts;

    (filteredCars as CarWithProvider[]).forEach((car) => {
      const seats = String(car.features?.seats);
      if (seats && counts.hasOwnProperty(seats)) {
        counts[seats]++;
      }
    });
    return counts;
  }, [filteredCars, passengersQuantity]);

  return (
    <aside className="max-w-[296px] min-w-[296px] bg-white h-fit pt-[1.875rem] rounded-2xl gap-6 text-sm shadow-aside">
      <div className="flex flex-col ">
        <section className="flex items-center gap-5 px-[30px] pb-6">
          <img
            src="/imgs/icons_logos/filter-icon.svg"
            alt=""
            className="w-[18px] h-[18px]"
          />
          <h2 className="font-bold text-UDR ">Filtrar resultados</h2>
        </section>
        <FilterCheckboxGroup
          title="Compañía rentadora"
          items={companies}
          namePrefix="company"
          onChange={setSelectedCompanies}
          itemCounts={companyCounts}
        />
        <FilterCheckboxGroup
          title="Categoría del auto"
          items={vehicleTypes}
          namePrefix="vehicleType"
          onChange={setSelectedVehicleTypes}
          itemCounts={vehicleTypeCounts}
        />
        <FilterCheckboxGroup
          title="Capacidad de maletas"
          items={capacitySuitcase}
          namePrefix="capacitySuitcase"
          onChange={setSelectedSuitcaseCapacity}
          itemCounts={suitcaseCapacityCounts}
        />
        <FilterCheckboxGroup
          title="Cantidad de pasajeros"
          items={passengersQuantity}
          namePrefix="passengersQuantity"
          onChange={setSelectedPassengers}
          itemCounts={passengerQuantityCounts}
        />
        <FilterPriceSlider />
      </div>
    </aside>
  );
};
