import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

export default function Timer() {
  const [msec, setMsec] = useState(0)

  useEffect(() => {
    const startAtMsec = Date.now()
    const timer = setInterval(() => setMsec(Date.now() - startAtMsec), 1000)

    return () => clearInterval(timer)
  }, [])

  return <div>{msecToTime(msec)}</div>
}

function msecToTime(msec: number): string {
  const ms = msec % 1000
  const sec = ((msec - ms) % 60000) / 1000
  const min = (msec - sec * 1000 - ms) / 60000

  const mm = min.toString()
  const ss = sec.toString().padStart(2, '0')

  return `${mm}:${ss}`
}
