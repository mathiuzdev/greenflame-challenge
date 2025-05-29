import { useState } from "react";

interface MainHeaderProps {
  sortedCarsLength: number;
  sortOrder: "desc" | "asc";
  setSortOrder: (order: "desc" | "asc") => void;
}

export const MainHeader = ({
  sortedCarsLength,
  sortOrder,
  setSortOrder,
}: MainHeaderProps) => {
  const [open, setOpen] = useState(false);
  const options = [
    { value: "desc", label: "Mayor precio" },
    { value: "asc", label: "Menor precio" },
  ];
  const selected = options.find((o) => o.value === sortOrder) || options[0];

  return (
    <section className="mb-6 flex flex-col">
      <div className="w-full justify-between flex items-center">
        <div className="flex gap-x-12 ">
          <h3 className="font-bold text-UDR text-sm ">
            Encontramos {sortedCarsLength} vehiculos para tu búsqueda.
          </h3>
          <div className="flex items-center gap-[15px]">
            <input
              type="checkbox"
              name="destacados"
              id="destacados"
              className="accent-UDR w-4 h-4"
            />
            <label
              htmlFor="destacados"
              className="text-gray-800 font-medium text-sm select-none"
            >
              Mostrar destacados primero
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 relative">
          <button className="bg-UDR text-white px-5 pt-3 pb-3.5 rounded-lg font-bold shadow hover:bg-[#294a99] transition-colors text-sm">
            Enviar cotización
          </button>

          <div className="relative">
            <button
              type="button"
              className="rounded-lg px-5 pt-3 pb-3.5 gap-5 text-gray-800 font-bold text-sm bg-white flex items-center"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              tabIndex={0}
            >
              <span>{selected.label}</span>

              <img
                src="/imgs/icons_logos/chevron-icon.svg"
                className={`transition-transform duration-200 ${
                  open ? "rotate-[-90deg]" : "rotate-90"
                }`}
                alt="Chevron"
              />
            </button>
            {open && (
              <ul
                className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 text-sm"
                role="listbox"
                tabIndex={-1}
              >
                {options.map((option) => (
                  <li
                    key={option.value}
                    className={`px-5 py-2 cursor-pointer hover:bg-blue-50 ${
                      option.value === sortOrder
                        ? "text-UDR font-bold"
                        : "text-gray-800"
                    }`}
                    role="option"
                    aria-selected={option.value === sortOrder}
                    onClick={() => {
                      setSortOrder(option.value as "desc" | "asc");
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
