import { clsx } from 'clsx'

/**
 * Merge classNames cleanly
 */
export function cn(...inputs) {
  return clsx(inputs)
}
