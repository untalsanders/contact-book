import React from 'react'

export default function ContactPhoto({ url, alt = '' }: { url: string, alt: string | undefined }) {
  return <img src={url} alt={alt} width={35} height={35} className="rounded-full p-1" />
}
