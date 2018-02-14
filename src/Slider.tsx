import { linkEvent, VNode, cloneVNode } from 'inferno'
import Component from 'inferno-component'
import Button from './Button'
import { createComponent, withTheme } from 'inferno-fela'

enum Direction {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
}

interface IProps {
	direction: Direction;
}

interface IState {
	distance?: number;
}

export default class Slider extends Component<IProps, IState> {
	public state: IState = {};

	private first: any;
	private second: VNode;

	constructor (props, context) {
		super(props, context)

		if (this.props.children instanceof Array &&
				this.props.children.length === 2 &&
				this.props.children[0] &&
				this.props.children[1]) {
			this.first = createComponent(props => ({
				width: props.width || '100%',
			}), 'h1')
			this.second = this.props.children[1] as VNode
		} else {
			throw new Error('Slider component must have exactly two children.')
		}
	}

	public render () {
		console.log(1)
		console.log('first', this.first)
		return (
			<div>
				<this.first width={this.state.distance} innerRef={linkEvent(this, initializeDistance)} />
				{
					// cloneVNode(this.first, {
					// 	width: this.state.distance,
					// 	innerRef: linkEvent(this, initializeDistance),
					// })
				}
				{this.second}
			</div>
		)
	}
}

function initializeDistance (instance: Slider, ref: VNode) {
	console.log(ref)
	// instance.setState({ distance: ref. })
}
