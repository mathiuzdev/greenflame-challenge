import { useEffect, useState } from "react";
import { useCarStore } from "../../store/carStore";
import Slider from "@mui/material/Slider";
import { formatPrice } from "../../utils/formatPrice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FilterPriceSlider = () => {
  const priceRange = useCarStore((state) => state.priceRange);
  const selectedPriceRange = useCarStore((state) => state.selectedPriceRange);
  const setSelectedPriceRange = useCarStore(
    (state) => state.setSelectedPriceRange
  );

  const [, setInputMinStr] = useState("");
  const [, setInputMaxStr] = useState("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (selectedPriceRange) {
      setInputMinStr(selectedPriceRange[0].toString());
      setInputMaxStr(selectedPriceRange[1].toString());
    }
  }, [selectedPriceRange]);

  if (!priceRange || !selectedPriceRange) {
    return null;
  }

  const [min, max] = priceRange;
  const [selectedMin, selectedMax] = selectedPriceRange;

  const handleMuiSliderChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      let [newMin, newMax] = newValue;
      newMin = Math.max(min, Math.min(newMin, max));
      newMax = Math.max(min, Math.min(newMax, max));
      setSelectedPriceRange([newMin, newMax]);
      setInputMinStr(newMin.toString());
      setInputMaxStr(newMax.toString());
    }
  };

  return (
    <section>
      <div
        className={`flex gap-x-2 justify-between items-center ${
          open ? "" : "rounded-b-2xl"
        } w-full py-[13px] pr-5 pl-[30px] bg-[#F4F7FA] hover:bg-[#e9eef5] transition-colors cursor-pointer select-none`}
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        aria-expanded={open}
        tabIndex={0}
      >
        <span className="flex items-center gap-2 text-UDR font-bold text-sm">
          Fijar un rango de precio (COP)
        </span>
        <ExpandMoreIcon
          className={`w-4 h-4 transition-transform`}
          style={{
            fontSize: 16,
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.2s",
          }}
        />
      </div>

      {open && (
        <div className="bg-white pl-[30px] pr-[20px] py-6 rounded-b-lg flex flex-col gap-6">
          <Slider
            value={[selectedMin, selectedMax]}
            min={min}
            max={max}
            step={1}
            onChange={handleMuiSliderChange}
            valueLabelDisplay="auto"
            getAriaLabel={() => "Rango de precio"}
            sx={{
              color: "bg-UDR",
              "& .MuiSlider-thumb": {
                height: 24,
                width: 24,
                backgroundColor: "#fff",
                border: "6px solid ",
              },
              "& .MuiSlider-rail": {
                color: "#E3E8EF",
                opacity: 1,
                height: 8,
                borderRadius: 4,
              },
              "& .MuiSlider-track": {
                color: "bg-UDR",
                height: 8,
                borderRadius: 4,
              },
            }}
          />

          <div className="flex flex-col gap-6">
            <div className="flex items-center rounded-lg overflow-hidden border border-[#E3E8EF]">
              <span className="bg-blue-100 px-[13px] py-3 text-blue-400 font-bold text-xs">
                COP
              </span>
              <span className="px-2 text-blue-400 text-[13px] font-medium">
                desde
              </span>
              <input
                type="text"
                className="bg-transparent outline-none font-bold text-UDR text-sm w-full pr-6 text-right"
                value={formatPrice(selectedMin)}
                readOnly
                tabIndex={-1}
              />
            </div>

            <div className="flex items-center rounded-lg overflow-hidden border border-[#E3E8EF]">
              <span className="bg-blue-100 px-[13px] py-3 text-blue-400 font-bold text-xs">
                COP
              </span>
              <span className="px-2 text-blue-400 text-[13px] font-medium">
                hasta
              </span>
              <input
                type="text"
                className="bg-transparent outline-none font-bold text-UDR text-sm w-full pr-6 text-right"
                value={formatPrice(selectedMax)}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
