import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}

export function roundTo(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
