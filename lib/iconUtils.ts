/**
 * Icon Utilities
 * Type-safe icon getter for Lucide icons
 */

import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Get a Lucide icon component by name
 * @param iconName - Name of the icon (e.g., 'Activity', 'Heart')
 * @param fallback - Fallback icon if the requested icon is not found
 * @returns LucideIcon component
 */
export function getIcon(iconName: string, fallback: LucideIcon = LucideIcons.Activity): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || fallback;
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
