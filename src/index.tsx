import { h, render } from 'preact'
import App from './App'

const root = document.createElement('div')
render(<App />, root)

const shadowContainer = document.createElement('div')
document.body.appendChild(shadowContainer)

const shadow = shadowContainer.attachShadow({ mode: 'closed' })
shadow.innerHTML = `<style>:host { all: initial; }</style>`
shadow.appendChild(root)
