import { createRenderer } from 'fela'
import embedded from 'fela-plugin-embedded'
import prefixer from 'fela-plugin-prefixer'
import unit from 'fela-plugin-unit'
import lvha from 'fela-plugin-lvha'
import validator from 'fela-plugin-validator'
import logger from 'fela-plugin-logger'
import perf from 'fela-perf'
import beautifier from 'fela-beautifier'
import extend from 'fela-plugin-extend'

export default () => {
	const renderer = createRenderer({
		plugins: [
			extend(),
			embedded(),
			prefixer(),
			lvha(),
			unit(),
			validator({}),
			logger(),
		],
		enhancers: [
			perf(),
			beautifier(),
		],
	})

	renderer.renderStatic(
		{
			width: '100%',
			height: '100%',
			margin: 0,
			padding: 0,
		},
		'html,body,#app',
	)

	return renderer
}
