import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export function StaggerReveal({
  items,
  className,
  as = 'ul',
  loop = false,
}: {
  items: ReactNode[]
  className?: string
  as?: 'ul' | 'div'
  loop?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
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

  const Container = as
  const Item = as === 'ul' ? 'li' : 'div'

  return (
    <Container ref={ref as never} className={className}>
      {items.map((item, i) => (
        <Item
          key={i}
          className={`stagger-item ${visible ? (loop ? 'stagger-loop' : 'stagger-in') : ''}`}
          style={{ animationDelay: `${i * 180}ms` }}
        >
          {item}
        </Item>
      ))}
    </Container>
  )
}
