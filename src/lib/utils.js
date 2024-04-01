import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price) {
  let [integerPart, decimalPart] = price.toFixed(2).toString().split('.');
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let formattedPrice = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  return formattedPrice;
}
export function formatDistance(distance) {
  distance = parseInt(distance);
  let [integerPart, decimalPart] = distance.toFixed(0).toString().split('.');
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let formattedDistance = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  return formattedDistance;
}

export function generateQueryParams(obj) {
  const params = [];
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
              value.forEach(item => {
                  params.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
              });
          } else {
              params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          }
      }
  }
  return params.join('&');
}