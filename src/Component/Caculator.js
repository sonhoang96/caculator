import React from 'react';
import Buttons from './Buttons.js'
import ScreenOutput from './ScreenOutput.js';
export default class Caculator extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			expression: '',
			result: '...waiting'
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
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
						return e;
					}
				}
				break;
			case 'AC':
				this.setState({
					expression: '',
					result: '...waiting'
				})
				break;
			case 'delete':
				let del = this.state.expression;
				del = del.substr(0, del.length - 1);
				this.setState({
					expression: del,
					result: '...waiting'
				})
				break;
			default:
				this.setState({
					expression: this.state.expression += value
				})
		}
	}
	handleKeyPress(event){
		const code = event.keyCode;
		switch(code){
			//button Enter
			case 13:
				if(this.state.expression !== ''){
					let val = '';
					try {
						val = eval(this.state.expression);
						this.setState({
							expression: this.state.expression,
							result: val
						})
					} catch(e) {
						this.setState({
							result: e.name
						})
					}
				}
				break;
			//button C
			case 67:
				this.setState({
					expression: '',
					result: '...waiting'
				})
				break;
			//buton Backspace
			case 8:
				let del = this.state.expression;
				del = del.substr(0, del.length - 1);
				this.setState({
					expression: del,
					result: '...waiting'
				})
				break;
			default:
				const value = event;
				//button numbers and symbols
				if(code >= 96 && code <= 107 || code === 109 || code === 111){
					this.setState({
						expression: this.state.expression += value.key
					})
				}
		}
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount(){
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	componentDidUpdate(prevProps, prevState) {
		const screenResult = document.querySelector('.screen__result');
		if(this.state.result >= 999999999999999){
			screenResult.style.fontSize = '2.5em';
		}else{
			screenResult.style.fontSize = '3em';
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