/**
 * Utility functions for theme-aware styling
 */

export function getThemeClasses(isLight: boolean) {
  return {
    // Backgrounds
    bg: isLight ? 'bg-white' : 'bg-dark-bg',
    bgSecondary: isLight ? 'bg-gray-100' : 'bg-dark-bg-secondary',
    bgTertiary: isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary',
    bgCard: isLight ? 'bg-white' : 'bg-dark-bg-card',
    
    // Text colors
    text: isLight ? 'text-gray-900' : 'text-white',
    textSecondary: isLight ? 'text-gray-700' : 'text-dark-text-secondary',
    textTertiary: isLight ? 'text-gray-600' : 'text-dark-text-tertiary',
    
    // Borders
    border: isLight ? 'border-gray-300' : 'border-dark-border',
    borderLight: isLight ? 'border-gray-200' : 'border-dark-border-light',
    
    // Transitions
    transition: 'transition-colors duration-300',
  };
}

