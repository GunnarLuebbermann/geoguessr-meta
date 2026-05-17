'use client'

import { useState, type ImgHTMLAttributes } from 'react'

interface ZoomableImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export default function ZoomableImage({ src, alt = '', className = '', ...props }: ZoomableImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`zoomable-image ${className}`.trim()}
        onClick={() => setOpen(true)}
        {...props}
      />

      {open && (
        <div className="image-zoom-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="image-zoom-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-zoom-close"
              aria-label="Close image"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  )
}
