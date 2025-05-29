import { useState } from "react";

interface CardCarLeftProps {
  company: string;
  companyLogo: string;
  solidStars: number[];
  outlinedStars: number[];
  image: string;
  model: string;
  isHighlighted?: boolean;
}

export const CardCarLeft = ({
  company,
  companyLogo,
  solidStars,
  outlinedStars,
  image,
  model,
  isHighlighted,
}: CardCarLeftProps) => {
  const [carImageError, setCarImageError] = useState(false);

  let normalizedImage = image;
  const match = image && image.match(/(\d{4}-[\w-]+\.png)$/);
  if (match) {
    normalizedImage = `/imgs/cars/${match[1]}`;
  }
  return (
    <div
      className={`flex flex-col ${
        isHighlighted ? "justify-between" : ""
      } min-w-[235px] max-w-[235px] h-full px-6 pt-6 pb-6`}
    >
      <div className="flex flex-col items-start">
        <img
          src={companyLogo || "/placeholder.svg"}
          alt={company}
          className="mb-2"
        />
        <div className="flex gap-2.5 items-center mb-2">
          {solidStars.map((_, i) => (
            <img
              key={i}
              src="/imgs/icons_logos/star-solid-icon.svg"
              alt="star"
            />
          ))}
          {outlinedStars.map((_, i) => (
            <img
              key={i}
              src="/imgs/icons_logos/star-outlined-icon.svg"
              alt="star"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {/* No es necesario normalizedBox && aquí, ya que el src lo manejará */}
        <img
          src={
            carImageError
              ? "https://www.budget.com.au/content/dam/cars/mystery-car/l/orange_featured.png"
              : normalizedImage || "/placeholder.svg"
          }
          alt={model}
          className="w-full object-contain h-32" // Añadida una altura ejemplo, ajústala como necesites
          onError={() => setCarImageError(true)}
        />
      </div>
      {isHighlighted && (
        <span className="text-xs w-fit text-green-600 font-semibold bg-green-100 pr-0.5 pl-3 py-2 rounded-[6px] flex items-center">
          <img src="/imgs/icons_logos/featured-icon.svg" alt="Destacado" />
          <p className="px-2.5 font-medium">Destacado</p>
        </span>
      )}
    </div>
  );
};
