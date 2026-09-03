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
          className={`stagger-item ${visible ? 'stagger-in' : ''}`}
          style={{ animationDelay: `${i * 180}ms` }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
