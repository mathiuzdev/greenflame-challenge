import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FilterCheckboxGroupProps {
  title: string;
  items: string[];
  namePrefix?: string;
  onChange?: (selected: string[]) => void;
}

export const FilterCheckboxGroup = ({
  title,
  items,
  namePrefix = "",
  onChange,
  defaultOpen = true,
}: FilterCheckboxGroupProps & { defaultOpen?: boolean }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [open, setOpen] = useState(defaultOpen);

  const handleChange = (item: string) => {
    let updated: string[] = [];
    if (item === "Todas las categorías") {
      updated = [];
    } else {
      updated = selectedItems.includes(item)
        ? selectedItems.filter((i) => i !== item)
        : [...selectedItems.filter((i) => i !== "Todas las categorías"), item];
    }
    setSelectedItems(updated);
    onChange?.(updated);
  };

  return (
    <section className=" border-[#E3E8EF] flex flex-col gap-6 ">
      <button
        type="button"
        className="flex gap-x-2 items-center w-full py-[13px] pr-5 pl-[30px] bg-[#F4F7FA] hover:bg-[#e9eef5] transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <h3 className="text-UDR font-bold text-sm flex-1 text-left ">
          {title}
        </h3>
        <ExpandMoreIcon
          className={`w-4 h-4 transition-transform `}
          style={{
            fontSize: 16,
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>
      {open && (
        <div className="w-full flex flex-col gap-2 ">
          {items.map((item, index) => {
            const checkboxId = `${namePrefix}-${item}`;
            return (
              <div className="flex items-center gap-2.5  px-[30px]" key={index}>
                <input
                  type="checkbox"
                  name={item}
                  id={checkboxId}
                  checked={
                    item === "Todas las categorías"
                      ? selectedItems.length === 0
                      : selectedItems.includes(item)
                  }
                  onChange={() => handleChange(item)}
                  className="accent-UDR mr-2 "
                />
                <label htmlFor={checkboxId} className="text-gray-800 text-sm">
                  {item}{" "}
                  {namePrefix === "capacitySuitcase"
                    ? "ó más maletas"
                    : namePrefix === "passengersQuantity"
                    ? "pasajeros"
                    : ""}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
