import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export function StaggerReveal({
  items,
  className,
}: {
  items: ReactNode[]
  className?: string
}) {
  const ref = useRef<HTMLUListElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <ul ref={ref} className={className}>
      {items.map((item, i) => (
        <li
          key={i}
          className="stagger-item"
          style={{
            transitionDelay: `${i * 120}ms`,
            opacity: visible ? 1 : undefined,
            transform: visible ? 'translateY(0)' : undefined,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
