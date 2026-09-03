export function HandCardCover() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-900">
      <img
        src="/case-studies/tarjeta-prepago-mla/hand-card.png"
        alt="Mano acercando la Tarjeta Prepaga Mercado Pago a un lector contactless"
        className="absolute inset-0 h-full w-full animate-hand-enter-exit object-cover"
      />
    </div>
  )
}
