import React, { Component, ReactNode, cloneElement, ReactChild, ReactElement } from 'react'
import Button from './Button'
import { createComponent } from 'react-fela'
import * as ReactDOM from 'react-dom';
import { injectSheet } from 'react-jss'

export enum Direction {
	Horizontal = 'width',
	Vertical = 'height',
}

interface IProps {
	direction: Direction;
	children?: any;
	classes:
}

interface IState {
	distance?: number;
}

@injectSheet({
	button: {

	},
})
export default class Slider extends Component<IProps, IState> {
	public state: IState = {};
	private first: any;
	private second: any;

	constructor(props, context) {
		super(props, context)

		if (this.props.children instanceof Array &&
			this.props.children.length === 2 &&
			this.props.children[0] &&
			this.props.children[1]) {

			this.second = this.props.children[1]

		} else {
			throw new Error('Slider component must have exactly two children.')
		}
	}

	public render() {
		const { classes } = this.props
		return (
			<Row>
				<this.first width={this.state.distance} ref={this.initializeDistance} />

				{this.second}
			</Row>
		)
	}

	private initializeDistance = (ref: any) => {
		this.setState({ distance: ReactDOM.findDOMNode(ref).getClientRects()[0][this.props.direction as string] })
	}
}
