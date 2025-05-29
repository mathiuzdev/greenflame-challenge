type FeatureItem = {
  key: string;
  label: string;
  value: string | number | boolean;
  icon: string;
};

const defaultIcons: Record<string, string> = {
  seats: "/imgs/icons_logos/passengers-icon.svg",
  doors: "/imgs/icons_logos/doors-icon.svg",
  transmition: "/imgs/icons_logos/transmission-icon.svg",
  large_suitcase: "imgs/icons_logos/luggage-icon.svg",
  small_suitcase: "imgs/icons_logos/carry-icon.svg",
  air_conditioner: "imgs/icons_logos/air-conditioning-icon.svg",
};

const labels: Record<string, string> = {
  seats: "Seats",
  doors: "Doors",
  transmition: "Transmission",
  large_suitcase: "Large Suitcase",
  small_suitcase: "Small Suitcase",
  air_conditioner: "A/C",
};

const orderedKeys = [
  "seats",
  "doors",
  "transmition",
  "large_suitcase",
  "small_suitcase",
  "air_conditioner",
];

export const getOrderedFeatures = (
  features: Record<string, any>
): FeatureItem[] => {
  return orderedKeys.map((key) => ({
    key,
    label: labels[key] || key,
    value: features[key],
    icon: defaultIcons[key] || "/icons/default.png",
  }));
};
