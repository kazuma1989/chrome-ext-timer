import { h, render } from 'preact'
import App from './App'

const root = document.createElement('div')
document.body.appendChild(root)

render(<App />, root)
