'use client'

import { cn } from '../../lib/utils'

export default function PillButton({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const sizeClasses = size === 'large' ? 'text-[16px] px-9 py-4' : ''

  const allClasses = cn(baseClasses, sizeClasses, className)

  if (href) {
    return (
      <a href={href} className={allClasses} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={allClasses} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
