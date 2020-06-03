import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
// TODO: pull items from local storage

		this.state = props.item;
		this.key = this.state.key;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<li key={this.key}>
				<div 
					className="text"
					role="textbox" 
					contentEditable="true" 
					aria-multiline="true" 
					aria-label={"To Do Item: " + this.state.text} 
					aria-required="true" 
					suppressContentEditableWarning={true}
					onChange={this.handleChange}>
						{this.state.text}
				</div>
				<div className="actions">
					<button className="delete">
						<span className="icon-bin"></span> Remove
					</button>
					
					<div className="move-actions">
						<button className="up">
							<span className="icon-arrow-up2"></span> Up
						</button>
						<button className="down">
							<span className="icon-arrow-down2"></span> Down
						</button>
						<button className="top">
							Top
						</button>
						<button className="bottom">
							Bottom
						</button>
					</div>
				</div>
			</li>
		);
	}
}

export default ToDoItem;
