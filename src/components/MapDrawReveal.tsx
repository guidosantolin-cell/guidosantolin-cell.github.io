export function MapDrawReveal({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-900 p-2">
      <img src={src} alt={alt} className="animate-draw-reveal w-full" />
    </div>
  )
}
