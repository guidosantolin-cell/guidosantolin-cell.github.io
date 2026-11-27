import { useEffect, useRef, useState } from 'react'
import { SignalTrialIcon } from './SignalTrialIcon'
import './signal-prototype.css'

const assets = '/case-studies/signal-personalizado/assets'
const figma = 'https://www.figma.com/design/NPF1L9jgOapXoNuM7OL50U/-All-sites--SIGNALS-Value-prop--HO-'
const variants = [
  { id: 'bau', title: 'BAU', description: 'Beneficio personalizado dentro de la oferta de la tarjeta.', handoff: '24203-160813', prototype: '24775-26493' },
  { id: 'trial', title: 'Free Trial', description: 'Beneficio personalizado y activación opcional de Meli+.', handoff: '25553-113288', prototype: '25562-140265' },
  { id: 'meli', title: 'Meli+', description: 'El beneficio convive con las ventajas de una suscripción vigente.', handoff: '25553-108969', prototype: '25562-149869' },
] as const
type Variant = typeof variants[number]
type Stage = 'entry' | 'onboarding' | 'review' | 'success'
const addresses = [
  'Manzano 99, Florida Delegación, Álvaro Obregón, 01030 Ciudad de México, CDMX',
  'Av. Veracruz 102, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, CDMX',
  'Av. México 188, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX',
  'Insurgentes Sur 1602, Crédito Constructor, Benito Juárez, 03940 Ciudad de México, CDMX, México',
]

function Asset({ name }: { name: string }) {
  return <img src={`${assets}/${name}.svg`} alt="" />
}

export function SignalMiniCard({ onStart }: { onStart?: () => void }) {
  return (
    <div className="signal-mini">
      <div className="signal-mini-label">Tarjeta de crédito <Asset name="visa" /></div>
      <div className="signal-mini-banner">
        <div className="signal-mini-art"><img src={`${assets}/card.png`} alt="" /></div>
        <p className="signal-mini-offer">Sin anualidad y<br />con límite de<br />$ 10,000</p>
        <div className="signal-mini-footer">
          <Asset name="benefits" />
          <p><strong>Hasta 50% OFF</strong> en tenis <strong>Reebok</strong></p>
          {onStart ? <button type="button" onClick={onStart}>Pedir tarjeta</button> : <span className="signal-mini-action">Pedir tarjeta</span>}
        </div>
      </div>
    </div>
  )
}

export function SignalProjectCover({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  return (
    <div className={`signal-cover signal-cover-live${compact ? ' signal-cover-compact' : ''}`} role="group" aria-label="Signal Personalizado: recorrido automático del prototipo mobile">
      <p>Signal Personalizado</p>
      <div className="signal-cover-window" aria-hidden="true" inert>
        <div className="signal-cover-device"><SignalMobileFlow variant={variants[0]} preview paused={paused} /></div>
      </div>
      {!compact && <button className="signal-cover-pause" type="button" onClick={() => setPaused(value => !value)}>{paused ? 'Reanudar animación' : 'Pausar animación'}</button>}
    </div>
  )
}

function SignalMobileFlow({ variant, preview = false, paused = false }: { variant: Variant; preview?: boolean; paused?: boolean }) {
  const [stage, setStage] = useState<Stage>('entry')
  const [playing, setPlaying] = useState(true)
  const [accepted, setAccepted] = useState(false)
  const [trial, setTrial] = useState(false)
  const [day, setDay] = useState('1')
  const [address, setAddress] = useState(addresses[0])
  const [sheet, setSheet] = useState<'date' | 'address' | null>(null)
  const [newAddress, setNewAddress] = useState<string | null>(null)
  const sheetRef = useRef<HTMLDialogElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  useEffect(() => { screenRef.current?.scrollTo({ top: 0 }) }, [stage])
  useEffect(() => {
    const dialog = sheetRef.current
    if (sheet && dialog && !dialog.open) dialog.showModal()
    if (!sheet && dialog?.open) dialog.close()
  }, [sheet])
  const autoPlaying = preview ? !paused : playing
  // Timers are scoped to the visible stage and cleared on pause, close or navigation.
  useEffect(() => {
    if (!autoPlaying || sheet) return
    const timers: ReturnType<typeof setTimeout>[] = []
    const after = (ms: number, action: () => void) => timers.push(setTimeout(action, ms))
    if (stage === 'success' && preview) after(4000, () => { setStage('entry'); setAccepted(false); setTrial(false) })
    if (stage === 'entry') after(3000, () => setStage('onboarding'))
    if (stage === 'onboarding') after(5000, () => setStage('review'))
    if (stage === 'review') {
      after(2500, () => screenRef.current?.scrollTo({ top: 240, behavior: 'smooth' }))
      if (variant.id === 'trial') after(4500, () => setTrial(true))
      after(6500, () => {
        setAccepted(true)
        screenRef.current?.scrollTo({ top: screenRef.current.scrollHeight, behavior: 'smooth' })
      })
      after(9500, () => setStage('success'))
    }
    return () => timers.forEach(clearTimeout)
  }, [autoPlaying, sheet, stage, variant.id, preview])
  useEffect(() => {
    if (preview) return
    const pauseWhenHidden = () => { if (document.hidden) setPlaying(false) }
    document.addEventListener('visibilitychange', pauseWhenHidden)
    return () => document.removeEventListener('visibilitychange', pauseWhenHidden)
  }, [preview])
  const reset = () => {
    setPlaying(true); setStage('entry'); setAccepted(false); setTrial(false); setDay('1')
    setAddress(addresses[0]); setSheet(null); setNewAddress(null)
  }
  return (
    <>
      {!preview && <div className="signal-flow-tools">
        <p aria-live="polite">{({ entry: '1. Minicard', onboarding: '2. Onboarding', review: '3. Revisión y confirmación', success: '4. Confirmación' })[stage]}</p>
        <div className="signal-playback-controls">
          {stage !== 'success' && <button type="button" onClick={() => setPlaying(value => !value)}>{playing ? 'Pausar' : 'Reproducir'}</button>}
          <button type="button" onClick={reset}>Reiniciar</button>
        </div>
      </div>}
      <div className={`signal-mobile signal-mobile-${stage}`} data-signal-variant={variant.id} data-stage={stage} onPointerDownCapture={() => setPlaying(false)} onKeyDownCapture={() => setPlaying(false)}>
        {stage !== 'entry' && <div className="signal-status"><span>9:30</span><div><Asset name="wifi" /><Asset name="signal" /><Asset name="battery" /></div></div>}
        <div className="signal-screen-scroll" ref={screenRef}>
          {stage === 'entry' && <div className="signal-entry"><SignalMiniCard onStart={preview ? undefined : () => setStage('onboarding')} /></div>}
          {stage === 'onboarding' && (
            <div className="signal-onboarding">
              <button type="button" className="signal-icon-button signal-skip" aria-label="Omitir presentación" onClick={() => setStage('review')}><Asset name="close" /></button>
              <div className="signal-onboarding-card"><img src={`${assets}/card.png`} alt="Tarjeta de crédito Mercado Pago" /></div>
              <h4>Hasta 50% OFF en tenis Reebook</h4>
              <p>Beneficio exclusivo lunes y jueves.</p>
            </div>
          )}
          {stage === 'review' && (
            <div className="signal-review">
              <div className="signal-review-nav"><button type="button" className="signal-icon-button" aria-label="Volver al onboarding" onClick={() => setStage('onboarding')}><Asset name="back" /></button></div>
              <h4>Tendrás $ 10,000 de límite en tu tarjeta</h4>
              <div className="signal-fields">
                <div className="signal-detail"><Asset name={variant.id === 'meli' ? 'present-meli' : 'present'} /><div><p>Beneficios de la tarjeta</p>{variant.id === 'meli' ? <strong>• Hasta {'{n}'}% de cashback <Asset name="meli-tag" /><br />• Hasta {'{n}'} meses sin intereses<br />• Sin anualidad</strong> : <strong>• Sin anualidad<br />• Hasta 24 meses sin intereses</strong>}</div></div>
                <div className="signal-detail"><Asset name="discount" /><div><p>Exclusivo para ti</p><strong>Hasta $ 50,000 OFF en tenis Reebook en Martí este lunes</strong></div></div>
                <div className="signal-detail signal-detail-edit"><Asset name="calendar" /><div><p>Fecha de vencimiento</p><strong>Día {day} de cada mes</strong></div><button type="button" onClick={() => setSheet('date')} aria-label="Modificar fecha de vencimiento">Modificar</button></div>
                <div className="signal-detail signal-detail-edit"><Asset name="shipping" /><div><p>Envío de tarjeta física</p><strong className="signal-address" title={address}>{address}</strong></div><button type="button" onClick={() => setSheet('address')} aria-label="Modificar dirección de envío">Modificar</button></div>
              </div>
              {variant.id === 'trial' && <label className="signal-trial"><SignalTrialIcon /><div><strong>Ganar hasta {'{n}'}% de cashback con Meli+ gratis</strong><p>{'{n}'} {'{mes/meses}'} de Meli+ gratis!<br />Después, $ {'{meli_price}'}/mes.<br />Cancela cuando quieras.</p></div><input type="checkbox" role="switch" aria-label="Agregar Meli+ gratis" checked={trial} onChange={e => setTrial(e.target.checked)} /></label>}
              <div className="signal-review-actions">
                <label className="signal-legal"><input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} /><span>{variant.id === 'trial' ? <>Al pedir, acepto los <span className="signal-legal-link">Términos y Condiciones</span> y la <span className="signal-legal-link">Carátula</span>.</> : <>Acepto los <span className="signal-legal-link">Términos y Condiciones</span> y la <span className="signal-legal-link">Carátula</span>. Autorizo a Mercado Lending, S.A. de C.V. a consultar mis antecedentes crediticios. <span className="signal-legal-link">Revisar autorización</span>.</>}</span></label>
                <button type="button" className="signal-primary" disabled={!accepted} onClick={() => setStage('success')}>Pedir tarjeta gratis</button>
              </div>
            </div>
          )}
          {stage === 'success' && <div className="signal-success" role="status"><h4>¡Listo! Ya tienes tu tarjeta de crédito</h4><p>Usa tu tarjeta digital mientras te entregamos tu tarjeta física.</p>{variant.id === 'trial' && trial && <p className="signal-success-trial">Meli+ agregado a tu tarjeta.</p>}</div>}
        </div>
        {stage !== 'entry' && <div className="signal-home-indicator" />}
      </div>
      {!preview && <p className="signal-playback-status" role="status">{stage === 'success' ? 'Recorrido finalizado. Podés reiniciarlo.' : playing ? 'Reproducción automática · Simulación' : 'En pausa · Podés explorar o reanudar'}</p>}
      {!preview && stage === 'onboarding' && <button type="button" className="signal-external-next" onClick={() => { setPlaying(false); setStage('review') }}>Avanzar a la revisión</button>}
      <dialog ref={sheetRef} className="signal-sheet" aria-label={sheet === 'date' ? 'Elige la fecha de pago' : '¿Dónde quieres recibir tu tarjeta?'} onCancel={e => { e.stopPropagation(); setSheet(null) }}>
        <div className="signal-sheet-handle" />
        <h4>{sheet === 'date' ? 'Elige la fecha de pago' : '¿Dónde quieres recibir tu tarjeta?'}</h4>
        {sheet === 'date' ? <><p>Tendrás hasta este día de cada mes para pagar tu estado de cuenta sin intereses.</p>{['1', '7', '15'].map(value => <label key={value}><input type="radio" name="payment-day" checked={day === value} onChange={() => { setDay(value); setSheet(null) }} />Día {value}</label>)}</> : <>{addresses.map(value => <label key={value}><input type="radio" name="shipping-address" checked={address === value} onChange={() => { setAddress(value); setSheet(null) }} />{value}</label>)}{newAddress === null ? <button type="button" className="signal-add-address" onClick={() => setNewAddress('')}><Asset name="add" />Agregar otra dirección <Asset name="arrow-right" /></button> : <form onSubmit={e => { e.preventDefault(); if (newAddress.trim()) { setAddress(newAddress.trim()); setSheet(null); setNewAddress(null) } }}><label className="signal-new-address">Otra dirección<input required value={newAddress} onChange={e => setNewAddress(e.target.value)} /></label><button type="submit" className="signal-primary">Guardar dirección</button></form>}</>}
        <button type="button" className="signal-sheet-close" onClick={() => setSheet(null)}>Cerrar</button>
      </dialog>
    </>
  )
}

export function SignalPrototypeGallery() {
  const [active, setActive] = useState<Variant | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (active && dialog && !dialog.open) dialog.showModal()
    if (!active && dialog?.open) dialog.close()
  }, [active])
  return (
    <section className="mt-16" aria-labelledby="signal-prototypes-title">
      <h2 id="signal-prototypes-title" className="text-2xl font-semibold text-neutral-900">Prototipos</h2>
      <h3 className="mt-5 text-lg font-semibold text-neutral-900">Mobile · México (MLM) · Mercado Pago</h3>
      <p className="mt-2 text-sm text-neutral-600">Mirá el recorrido automático o pausalo para explorar cómo el beneficio personalizado acompaña el recorrido desde la minicard hasta la confirmación. Los datos y beneficios son ejemplos del handoff; estas simulaciones no solicitan tarjetas ni activan suscripciones.</p>
      <div className="signal-gallery">
        {variants.map(variant => <article key={variant.id}>
          <h4>{variant.title}</h4><p>{variant.description}</p>
          <div className="signal-gallery-preview"><SignalMiniCard /></div>
          <button type="button" className="signal-open-prototype" onClick={() => setActive(variant)}>Reproducir {variant.title}</button>
          <div className="signal-source-links"><a href={`${figma}?node-id=${variant.handoff}`} target="_blank" rel="noreferrer">Handoff ↗</a><a href={`${figma}?node-id=${variant.prototype}`} target="_blank" rel="noreferrer">Ejemplo en Figma ↗</a></div>
        </article>)}
      </div>
      <p className="mt-4 text-xs text-neutral-500">Reproducción automática con opción de pausa y navegación manual. Consultá Figma para ver las animaciones del onboarding.</p>
      <dialog ref={dialogRef} className="signal-proto-dialog" aria-label={`Prototipo Signal Personalizado ${active?.title ?? ''}`} onCancel={() => setActive(null)} onClick={e => { if (e.target === e.currentTarget) setActive(null) }}>
        <div className="signal-dialog-header"><h3>{active?.title} · MLM · Mercado Pago</h3><button type="button" onClick={() => setActive(null)}>Cerrar</button></div>
        {active && <SignalMobileFlow key={active.id} variant={active} />}
      </dialog>
    </section>
  )
}
