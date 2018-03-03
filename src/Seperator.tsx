import { Component } from "react";
import { Direction } from "./Slider2";
import injectSheet from 'react-jss'

interface IProps {
	direction: Direction;
	classes?: any;
}

@injectSheet({
	seperator: props => ({
		...(props.direction === Direction.Horizontal ? {
			width: 10 + 'px',
			height: '100%',
		} : {
				height: 10 + 'px',
				width: '100%',
			}),
	}),
})
class Seperator extends Component<IProps, any> {
	public render () {
		return (
			<div on className={this.props.classes.seperator} />
		)
	}
}
