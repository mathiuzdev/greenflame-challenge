// src/utils/formatPrice.ts

/**
 * Formatea un número a string con separador de miles (coma) y decimales con punto.
 * Ejemplo: 672175.26 => "672,175.26"
 * Siempre usa punto para decimales y coma para miles, sin importar el tipo de moneda.
 */
export function formatPrice(value: string | number): string {
  if (value === null || value === undefined || value === "")
    return "No disponible";
  const num = Number(value);
  if (isNaN(num)) return "No disponible";
  // Separa parte entera y decimal
  const [int, dec] = num.toFixed(2).split(".");
  // Agrega comas a la parte entera
  const intWithCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${intWithCommas}.${dec}` : intWithCommas;
}
