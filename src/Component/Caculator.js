import React from 'react';
import Buttons from './Buttons.js'
import ScreenOutput from './ScreenOutput.js';
export default class Caculator extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			expression: '',
			result: '...loading'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		const value = event.target.value;
		switch (value) {
			case '=':
				if(this.state.expression !== ''){
					var val = '';
					try {
						val = eval(this.state.expression);
						this.setState({
							expression: this.state.expression,
							result: val
						})
					} catch(e) {
						return 'Error' + e.name;
					}
				}
				break;
			case 'AC':
				this.setState({
					expression: '',
					result: '...loading'
				})
				break;
			case 'delete':
				let del = this.state.expression;
				del = del.substr(0, del.length - 1);
				this.setState({
					expression: del,
					result: '...loading'
				})
				break;
			default:
				this.setState({
					expression: this.state.expression += value
				})
		}
	}
	render() {
		return (
			<div id="Caculator">
				<div className="header">
		          <h3 className="header__title">simple caculator</h3>
		        </div>
		        <ScreenOutput expression={this.state.expression} result={this.state.result}/>
		        <Buttons handleClick={this.handleClick}/>
	        </div>
		)
	}
}