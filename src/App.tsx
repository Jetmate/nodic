import React from 'react'
import Button from './Button'
import Slider, { Direction } from './Slider'

export default class Main extends React.Component<any, any> {
	public render() {
		return (
			<Slider direction={Direction.Horizontal}>
				<p>one</p>
				<p>two</p>
			</Slider>
		)
	}
}
