import { h, render } from 'preact'
import App from './App'

globalThis.h = h

render(<App />, document.getElementById('root')!)
