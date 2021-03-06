import React, { Component, ReactNode, cloneElement, ReactChild, ReactElement } from 'react'
import Button from './Button'
import { createComponent } from 'react-fela'
import * as ReactDOM from 'react-dom';

export enum Direction {
	Horizontal = 'width',
	Vertical = 'height',
}

interface IProps {
	direction: Direction;
	children?: any;
}

interface IState {
	distance?: number;
}

const Expandable = createComponent((props: any) => ({
	[props.direction]: props.distance || '100%',
}), () => this.props.children[0])

export default class Slider extends Component<IProps, IState> {
	public state: IState = {};
	private first: any;
	private second: any;

	constructor (props, context) {
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

	public render () {
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
