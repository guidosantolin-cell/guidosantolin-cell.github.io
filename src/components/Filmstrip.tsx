type Props = {
  src: string
  alt: string
  orientation?: 'horizontal' | 'vertical'
  size?: number
  durationSec?: number
}

export function Filmstrip({
  src,
  alt,
  orientation = 'horizontal',
  size = 280,
  durationSec = 28,
}: Props) {
  const isVertical = orientation === 'vertical'

  return (
    <div
      className="overflow-hidden rounded-xl border border-neutral-100 bg-white"
      style={{ height: size }}
    >
      <div
        className={`flex ${isVertical ? 'w-full flex-col animate-marquee-y' : 'h-full animate-marquee-x'}`}
        style={{ '--marquee-duration': `${durationSec}s` } as React.CSSProperties}
      >
        <img
          src={src}
          alt={alt}
          className={isVertical ? 'w-full shrink-0' : 'h-full shrink-0 object-contain'}
          style={isVertical ? undefined : { height: size, width: 'auto' }}
        />
        <img
          src={src}
          alt=""
          aria-hidden
          className={isVertical ? 'w-full shrink-0' : 'h-full shrink-0 object-contain'}
          style={isVertical ? undefined : { height: size, width: 'auto' }}
        />
      </div>
    </div>
  )
}
