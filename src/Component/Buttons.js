import React from 'react'

export default class Buttons extends React.Component {
	render() {
		return (
			<div className="buttons">
	          <div className="row mr-0 ml-0 buttons__margin">
	            <div className="col-6 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote buttons__none__numbers" value="AC" onClick={this.props.handleClick}>AC</button>
	            </div>
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote buttons__none__numbers" value="delete" onClick={this.props.handleClick}>Delete</button>
	            </div>
	            <div className="col-3 pr-0 pl-0">
	              <button className="buttons__remote buttons__none__numbers" value="/" onClick={this.props.handleClick}>/</button>
	            </div>
	          </div>
	          <div className="row mr-0 ml-0 buttons__margin">
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="7">7</button>
	            </div> 
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="8">8</button>
	            </div>
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="9">9</button>
	            </div>
	            <div className="col-3 pr-0 pl-0">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value="*">*</button>
	            </div>
	          </div>
	          <div className="row mr-0 ml-0 buttons__margin">
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="4">4</button>
	            </div> 
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="5">5</button>
	            </div>
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="6">6</button>
	            </div>
	            <div className="col-3 pr-0 pl-0">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value="-">-</button>
	            </div>
	          </div>
	          <div className="row mr-0 ml-0 buttons__margin">
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="1">1</button>
	            </div> 
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="2">2</button>
	            </div>
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="3">3</button>
	            </div>
	            <div className="col-3 pr-0 pl-0">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value="+">+</button>
	            </div>
	          </div>
	          <div className="row mr-0 ml-0 buttons__margin">
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value="(">(</button>
	            </div> 
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote" onClick={this.props.handleClick} value="0">0</button>
	            </div>
	            <div className="col-3 pr-0 pl-0 buttons__padding">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value=")">)</button>
	            </div>
	            <div className="col-3 pr-0 pl-0">
	              <button className="buttons__remote buttons__none__numbers" onClick={this.props.handleClick} value="=">=</button>
	            </div>
	          </div>
	        </div>
		)
	}
}