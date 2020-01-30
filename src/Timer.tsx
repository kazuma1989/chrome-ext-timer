import { useState, useEffect } from 'preact/hooks'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const worker = new Worker('./worker.ts')
    worker.addEventListener('message', e => setSeconds(e.data))

    return () => worker.terminate()
  }, [])

  return <div>{secondsToTime(seconds)}</div>
}

function secondsToTime(seconds: number): string {
  const sec = seconds % 60
  const min = (seconds - sec) / 60

  const mm = min.toString()
  const ss = sec.toString().padStart(2, '0')

  return `${mm}:${ss}`
}
