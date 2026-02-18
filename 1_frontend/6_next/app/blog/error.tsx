'use client'

export default function Error({error}: {error: Error}) {
  return (
    <div>Appear error: {error.message}</div>
  )
}