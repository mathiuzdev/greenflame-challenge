import { useCarStore } from "../../store/carStore";
import { FilterCheckboxGroup } from "../filters/FilterCheckboxGroup";
import { FilterPriceSlider } from "../filters/FilterPriceSlider";

export const Aside = () => {
  const data = useCarStore((state) => state.data?.cars);
  const setSelectedCompanies = useCarStore(
    (state) => state.setSelectedCompanies
  );
  const setSelectedVehicleTypes = useCarStore(
    (state) => state.setSelectedVehicleTypes
  );

  const setSelectedSuitcaseCapacity = useCarStore(
    (state) => state.setSelectedSuitcaseCapacity
  );

  // Ejemplo de filtros extraídos del JSON
  const companies = Object.keys(data ?? {}); // Avis, Budget, Payless
  // Recuperar todos los tipos de vehículo de todos los autos
  const vehicleTypesSet = new Set<string>();
  if (data) {
    Object.values(data).forEach((companyCars: any) => {
      companyCars.forEach((car: any) => {
        if (car.features.category) {
          vehicleTypesSet.add(car.features.category);
        }
      });
    });
  }
  let vehicleTypes = Array.from(vehicleTypesSet);
  // Agregar opción "Todas las categorías" al principio
  vehicleTypes = ["Todas las categorías", ...vehicleTypes];

  // Capacidad de maletas dinámica
  const suitcaseSet = new Set<string>();
  const passengersSet = new Set<string>();
  if (data) {
    Object.values(data).forEach((companyCars: any) => {
      companyCars.forEach((car: any) => {
        // Capacidad de maletas
        const large = Number(car.features?.large_suitcase) || 0;
        const small = Number(car.features?.small_suitcase) || 0;
        const total = large + small;
        if (total > 0) suitcaseSet.add(total.toString());
        // Pasajeros
        const seats = car.features?.seats;
        if (seats && seats !== "") passengersSet.add(seats.toString());
      });
    });
  }
  const capacitySuitcase = Array.from(suitcaseSet).sort(
    (a, b) => Number(a) - Number(b)
  );
  const passengersQuantity = Array.from(passengersSet).sort(
    (a, b) => Number(a) - Number(b)
  );

  const setSelectedPassengers = useCarStore(
    (state) => state.setSelectedPassengers
  );

  return (
    <aside className="max-w-[296px] min-w-[296px] bg-white h-fit pt-[1.875rem] rounded-2xl pb-6 gap-6 text-sm shadow-aside">
      <div className="flex flex-col gap-6">
        <section className="flex items-center gap-5 px-[30px]">
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
        />
        <FilterCheckboxGroup
          title="Categoría del auto"
          items={vehicleTypes}
          namePrefix="vehicleType"
          onChange={setSelectedVehicleTypes}
        />
        <FilterCheckboxGroup
          title="Capacidad de maletas"
          items={capacitySuitcase}
          namePrefix="capacitySuitcase"
          onChange={setSelectedSuitcaseCapacity}
        />
        <FilterCheckboxGroup
          title="Cantidad de pasajeros"
          items={passengersQuantity}
          namePrefix="passengersQuantity"
          onChange={setSelectedPassengers}
        />
        <FilterPriceSlider />
      </div>
    </aside>
  );
};
