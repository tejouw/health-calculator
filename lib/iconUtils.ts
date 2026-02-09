/**
 * Icon Utilities
 * Type-safe icon getter for Lucide icons
 */

import * as LucideIcons from 'lucide-react';
import {
  Calendar,
  Heart,
  Scale,
  Activity,
  Flame,
  Zap,
  Wine,
  Ruler,
  Calculator as CalculatorIcon,
  Apple,
  Beef,
  TrendingDown,
  TrendingUp,
  Droplet,
  Baby,
  Sparkles,
  HeartPulse,
  Moon,
  Stethoscope,
  Syringe,
  TestTube,
  Brain,
  Target,
  Dumbbell,
  Timer,
  Gauge
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Explicit icon mapping for better reliability
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Heart,
  Scale,
  Activity,
  Flame,
  Zap,
  Wine,
  Ruler,
  Calculator: CalculatorIcon,
  Apple,
  Beef,
  TrendingDown,
  TrendingUp,
  Droplet,
  Baby,
  Sparkles,
  HeartPulse,
  Moon,
  Stethoscope,
  Syringe,
  TestTube,
  Brain,
  Target,
  Dumbbell,
  Timer,
  Gauge,
};

/**
 * Get a Lucide icon component by name
 * @param iconName - Name of the icon (e.g., 'Activity', 'Heart')
 * @param fallback - Fallback icon if the requested icon is not found
 * @returns LucideIcon component
 */
export function getIcon(iconName: string, fallback: LucideIcon = Activity): LucideIcon {
  // First try explicit map (more reliable)
  if (iconMap[iconName]) {
    return iconMap[iconName];
  }

  // Fallback to dynamic lookup
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  const icon = icons[iconName];

  // Debug logging
  if (typeof window !== 'undefined' && !icon) {
    console.warn(`[Icon Warning] Icon "${iconName}" not found, using fallback`);
  }

  return icon || fallback;
}

/**
 * Check if an icon exists
 * @param iconName - Name of the icon to check
 * @returns true if icon exists, false otherwise
 */
export function hasIcon(iconName: string): boolean {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return iconName in icons && typeof icons[iconName] === 'function';
}

/**
 * Get multiple icons at once
 * @param iconNames - Array of icon names
 * @param fallback - Fallback icon for any missing icons
 * @returns Array of LucideIcon components
 */
export function getIcons(iconNames: string[], fallback: LucideIcon = LucideIcons.Activity): LucideIcon[] {
  return iconNames.map(name => getIcon(name, fallback));
}
