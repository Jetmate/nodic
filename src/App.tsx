import { linkEvent } from 'inferno'
import Component from 'inferno-component'
import Button from './Button'
import { createComponent } from 'inferno-fela'
import Slider from './Slider'

export default class Main extends Component<any, any> {
	public render() {
		return (
			<Slider>
				<p>one</p>
				<p>two</p>
			</Slider>
		)
	}
}
