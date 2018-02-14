import { render } from 'inferno'
import { Provider } from 'inferno-fela'
import createRenderer from './renderer'
import App from './App'

const renderer = createRenderer()

render(
	<Provider renderer={renderer}>
		<App />
	</Provider>,
	document.getElementById('app'),
)
