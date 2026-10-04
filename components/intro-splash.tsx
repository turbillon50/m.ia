'use client'

import { useEffect, useRef, useState } from 'react'

const VISTO = 'mia-intro-visto'

// Pantalla de entrada de M.IA: la animación vertical en blanco y negro.
// Sale una vez por visita; se puede saltar con un toque.
export function IntroSplash() {
  const [visible, setVisible] = useState(true)
  const [saliendo, setSaliendo] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  const cerrar = () => {
    if (saliendo) return
    setSaliendo(true)
    try {
      sessionStorage.setItem(VISTO, '1')
    } catch {}
    setTimeout(() => setVisible(false), 600)
  }

  useEffect(() => {
    try {
      if (sessionStorage.getItem(VISTO)) {
        setVisible(false)
        return
      }
    } catch {}
    video.current?.play().catch(() => cerrar())
    const respaldo = setTimeout(cerrar, 11000)
    return () => clearTimeout(respaldo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!visible) return null

  return (
    <div
      onClick={cerrar}
      aria-label="M.IA"
      className="fixed inset-0 z-[100] bg-white transition-opacity duration-500"
      style={{ opacity: saliendo ? 0 : 1 }}
    >
      <video
        ref={video}
        src="/intro/mia-intro.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
        onEnded={cerrar}
        onError={cerrar}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
