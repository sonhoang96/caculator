import React from 'react'

export default class ScreenOutput extends React.Component {
	render() {
		return (
			<div className="screen">
	          <div className="screen__expression">{this.props.expression}</div>
	          <div className="screen__result">{this.props.result}</div>
	        </div>
		)
	}
}