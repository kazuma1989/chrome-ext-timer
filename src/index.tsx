import { render } from 'preact'
import { useState } from 'preact/hooks'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hello {name?.toUpperCase() || 'World'}!</h1>
      <input value={name} onInput={e => setName(e.currentTarget.value)} />
    </div>
  )
}

render(<App />, document.getElementById('root')!)
