interface CarCardProps {
  company: string;
  companyLogo: string;
  solidStars: number[];
  outlinedStars: number[];
  image: string;
  isHighlighted?: boolean;
  group: string;
  nameDetail?: string;
  category: string;
  model: string;
  features: FeatureItem[];
  price: string | number;
  priceUSD: string | number;
  carObj: any;
  onQuoteSelect: () => void;
  onFooterSelect: () => void;
  isDisplayedInFooter: boolean;
  isQuoted: boolean;
  selectionOrder: number;
}

interface FeatureItem {
  key: string;
  label: string;
  value: string | number | boolean;
  icon: string;
}

import { CardCarCenter } from "./CardCarCenter";
import { CardCarLeft } from "./CardCarLeft";
import { CardCarPriceCard } from "./CardCarPriceCard";
import { useCarStore } from "../../store/carStore";

function getInclusionsFromCar(car: any): {
  inclusions: { name: string; description?: string }[];
  rateName: string;
} {
  let inclusions: { name: string; description?: string }[] = [];
  let rateName = "Inclusive Light";
  if (car && car.rates && typeof car.rates === "object") {
    const rateKey = Object.keys(car.rates)[0];
    const rateObj = car.rates[rateKey];
    if (rateObj && rateObj.inclusions_meta) {
      const meta = rateObj.inclusions_meta;
      inclusions = Object.values(meta)
        .filter((inc: any) => inc && inc.name)
        .map((inc: any) => ({ name: inc.name, description: inc.description }));
    }
    if (rateObj && rateObj.rate_data && rateObj.rate_data.name) {
      rateName = rateName + (rateKey ? ` (${rateKey})` : "");
    } else if (rateKey) {
      rateName = `Tarifa (${rateKey})`;
    }
  }
  return { inclusions, rateName };
}

export const CarCard = (props: CarCardProps) => {
  const {
    company,
    companyLogo,
    nameDetail,
    solidStars,
    outlinedStars,
    image,
    isHighlighted = false,
    group,
    category,
    model,
    features,
    price,
    priceUSD,
    carObj,
    onQuoteSelect,
    onFooterSelect,
    isDisplayedInFooter,
    isQuoted,
    selectionOrder,
  } = props;

  const canSelectMoreForQuote = useCarStore(
    (state) => state.quotedCars.length < 5 || isQuoted
  );

  const inclusionsData = getInclusionsFromCar(carObj || props);
  return (
    <div
      className={`flex w-full rounded-2xl shadow bg-white relative overflow-hidden `}
      style={{ maxWidth: 968, height: 271 }}
    >
      <div className="absolute top-0 left-0 bottom-0 w-2  bg-UDR"></div>
      <CardCarLeft
        company={company}
        companyLogo={companyLogo}
        solidStars={solidStars}
        outlinedStars={outlinedStars}
        image={image}
        model={model}
        isHighlighted={isHighlighted}
      />
      <CardCarCenter
        group={group}
        category={category}
        nameDetail={nameDetail}
        model={model}
        features={features}
        isQuoted={isQuoted}
        selectionOrder={selectionOrder}
        onQuoteSelect={onQuoteSelect}
        canSelectMore={canSelectMoreForQuote}
      />
      <CardCarPriceCard
        price={price}
        priceUSD={priceUSD}
        inclusions={inclusionsData.inclusions}
        rateName={inclusionsData.rateName}
        isDisplayedInFooter={isDisplayedInFooter}
        onFooterSelect={onFooterSelect}
        isQuoted={isQuoted}
        selectionOrder={selectionOrder}
        carId={carObj.id_car}
      />
    </div>
  );
};
