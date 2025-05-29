export function getCarEstimatedPrice(
  car: any,
  currency: "COP" | "USD" = "COP"
): string | null {
  const rates = car.rates ? Object.values(car.rates) : [];
  const rateWithCurrency = rates.find(
    (rate: any) =>
      rate &&
      typeof rate === "object" &&
      rate !== null &&
      "pricing" in rate &&
      (rate as any).pricing &&
      (rate as any).pricing[currency] &&
      (rate as any).pricing[currency].total_charge &&
      (rate as any).pricing[currency].total_charge.base &&
      (rate as any).pricing[currency].total_charge.base.estimated_total_amount
  );
  return (
    (rateWithCurrency &&
      (rateWithCurrency as any).pricing?.[currency]?.total_charge?.base
        ?.estimated_total_amount) ||
    null
  );
}
