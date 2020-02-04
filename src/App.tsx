import { h } from 'preact'
import css from './css'
import Timer from './Timer'

export default function App() {
  return (
    <div class="app">
      <style>{css`
        .app {
          padding: 1vw;
          font-size: 5vw;
        }
      `}</style>

      <Timer />
    </div>
  )
}
