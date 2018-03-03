import React, { Component, ReactNode, cloneElement, ReactChild, ReactElement, SFC } from 'react'
import { findDOMNode } from 'react-dom';
import injectSheet from 'react-jss'

export enum Direction {
	Horizontal = 'width',
	Vertical = 'height',
}

interface IProps {
	direction: Direction;
	children?: any;
	classes?: any;
}

interface IState {
	distance: number | string;
}

@injectSheet({
	outer: {
		display: 'flex',
		flexDirection: props => props.direction === Direction.Horizontal ? 'horizontal' : 'vertical',
	},
})
export default class Slider extends Component<IProps, IState> {
	public state: IState = { distance: '100%' };

	public render() {
		const { classes, children: [first, second] } = this.props
		return (
			<div className={classes.outer}>
				<Panel ref={this.initializeDistance} distance={this.state.distance} direction={this.props.direction}>
					{first}
				</Panel>
				<Seperator direction={this.props.direction} />
				{second}
			</div>
		)
	}

	private initializeDistance = (ref: any) => {
		this.setState({ distance: findDOMNode(ref).getBoundingClientRect()[this.props.direction as string] })
	}
}

interface IPanelProps {
	classes?: any;
	ref: any;
	direction: Direction;
	distance: number | string;
}

const Panel: SFC<IPanelProps> = injectSheet({
	panel: props => ({
		[props.direction as string]: props.distance,
	}),
})(({ classes, children }) =>
	<div className={classes.panel}>{children}</div>
)
