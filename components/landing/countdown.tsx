'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 11,
    minutes: 0,
    seconds: 16,
  })

  useEffect(() => {
    setMounted(true)

    // Set target deadline to end of day or 11h from now
    const now = new Date()
    const target = new Date(now.getTime() + (11 * 3600 + 16) * 1000)

    const timer = setInterval(() => {
      const diff = Math.max(0, target.getTime() - new Date().getTime())
      const totalSeconds = Math.floor(diff / 1000)

      const d = Math.floor(totalSeconds / 86400)
      const h = Math.floor((totalSeconds % 86400) / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s })

      if (diff <= 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNum = (n: number) => {
    if (!mounted) return n < 10 ? `0${n}` : `${n}`
    return n < 10 ? `0${n}` : `${n}`
  }

  const units = [
    { label: 'Ngày', value: formatNum(timeLeft.days) },
    { label: 'Giờ', value: formatNum(timeLeft.hours) },
    { label: 'Phút', value: formatNum(timeLeft.minutes) },
    { label: 'Giây', value: formatNum(timeLeft.seconds) },
  ]

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-18 items-center justify-center rounded-2xl border border-slate-200 bg-white ring-1 ring-slate-100 sm:h-24 sm:w-22">
              <span className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {unit.value}
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="mb-6 text-xl font-bold text-slate-400 sm:text-2xl" aria-hidden="true">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

