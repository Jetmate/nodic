import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-fela'
import createRenderer from './renderer'
import App from './App'

const renderer = createRenderer()

render(
	<Provider renderer={renderer}>
		<App />
	</Provider>,
	document.getElementById('app'),
)
