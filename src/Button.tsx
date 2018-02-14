import { createComponent } from 'inferno-fela'

const button = props => ({
	height: 10,
	width: 10,
	backgroundColor: 'red',
})

export default createComponent(button, 'div', ['onClick'])
