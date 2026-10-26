'use client'

import { useEffect } from 'react'

export function CtaRippleListener() {
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Find nearest interactive element (CTA button, anchor link, button)
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        '.cta-btn, .cta-outline, button, a[href^="#"]'
      )

      if (!target) return

      const rect = target.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 1.8
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      // Check if button background is light or dark
      const isLightBg =
        target.classList.contains('bg-white') ||
        target.classList.contains('bg-cream') ||
        target.classList.contains('bg-slate-50') ||
        target.classList.contains('bg-slate-100')

      const ripple = document.createElement('span')
      ripple.className = isLightBg ? 'cta-ripple-dark' : 'cta-ripple'
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`

      target.appendChild(ripple)

      // Light haptic feedback on supported mobile devices
      if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
        try {
          navigator.vibrate(12)
        } catch {}
      }

      const timer = setTimeout(() => {
        ripple.remove()
      }, 500)

      ripple.addEventListener('animationend', () => {
        clearTimeout(timer)
        ripple.remove()
      })
    }

    document.addEventListener('pointerdown', handlePointerDown, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return null
}

