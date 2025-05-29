interface FeatureItem {
  key: string;
  label: string;
  value: string | number | boolean;
  icon: string;
}

interface CardCarCenterProps {
  group: string;
  category: string;
  nameDetail?: string;
  model: string;
  features: FeatureItem[];
  isQuoted: boolean;
  selectionOrder: number;
  onQuoteSelect: () => void;
  canSelectMore: boolean;
}

export const CardCarCenter = ({
  group,
  category,
  model,
  features,
  nameDetail,
  isQuoted,
  selectionOrder,
  onQuoteSelect,
  canSelectMore,
}: CardCarCenterProps) => (
  <div className="flex flex-col h-full px-6 py-6 justify-center bg-white border-r-1 border-dashed gap-8 border-r-gray-300">
    <div className=" flex flex-col gap-1.5 ">
      <p className="text-[11px] text-blue-300 font-bold tracking-widest uppercase ">
        GRUPO {group} - {category}
      </p>
      <p className="font-bold text-lg text-UDR ">{model}</p>
      <p className="text-sm text-gray-800">{nameDetail}</p>
    </div>
    <div className="flex  gap-3 mt-2 ">
      {features.map((feat, i) => (
        <span
          key={i}
          className="flex items-center text-xs bg-gray-100 gap-[7px] text-blue-900 px-2  rounded-[6px] font-bold text-[13px]"
        >
          <img
            src={feat.icon || "/placeholder.svg"}
            alt={feat.key}
            className=""
          />
          {feat.key === "transmition"
            ? String(feat.value).charAt(0)
            : feat.value === true
            ? "SI"
            : feat.value === false
            ? "NO"
            : feat.value}
        </span>
      ))}
    </div>
    <span className="border-b border-gray-200"></span>
    <div className="text-sm flex items-center h-fit border border-transparent">
      {isQuoted ? (
        <>
          <img src="/imgs/icons_logos/check-logo.svg" alt="Seleccionado" />
          <span
            className="text-[#26B489] font-medium text-[13px] ml-2 cursor-pointer"
            onClick={onQuoteSelect}
          >
            Vehículo agregado a su cotización ({selectionOrder} de 5)
          </span>
        </>
      ) : canSelectMore ? (
        <>
          <img src="/imgs/icons_logos/message_select.svg" alt="Seleccionar" />
          <button
            onClick={onQuoteSelect}
            className="text-UDR font-medium ml-2 cursor-pointer bg-transparent border-none p-0"
            style={{ outline: "none" }}
          >
            Seleccionar este vehículo para cotizar
          </button>
        </>
      ) : (
        <>
          <img src="/imgs/icons_logos/message_select.svg" alt="Seleccionar" />
          <span className="text-gray-500 font-medium ml-2">
            Máximo 5 vehículos seleccionados
          </span>
        </>
      )}
    </div>
  </div>
);
