import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = props.item;
		this.textRef = React.createRef();

		this.handleChange = this.handleChange.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.moveDown = this.moveDown.bind(this);
		this.moveUp = this.moveUp.bind(this);
		this.moveTop = this.moveTop.bind(this);
		this.moveBottom = this.moveBottom.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
	}

	handleChange(event){
		let text = this.textRef.current.innerHTML;
		if (text === this.state.text) return;

		this.setState({
			text: text
		});
	}

	deleteItem(event){
		event.preventDefault();
		this.props.deleteItem(this.state.key);
	}

	moveDown(event){
		event.preventDefault();
		this.props.moveDown(this.state.key);
	}

	moveUp(event){
		event.preventDefault();
		this.props.moveUp(this.state.key);
	}

	moveTop(event){
		event.preventDefault();
		this.props.moveTop(this.state.key);
	}

	moveBottom(event){
		event.preventDefault();
		this.props.moveBottom(this.state.key);
	}

	toggleCompleted(event){
		event.preventDefault();

		this.setState({completed: !this.state.completed})
	}


	render() {
		return (
			<li className={this.state.completed ? 'completed' : ''}>
				<div className="toggle">
					<button onClick={this.toggleCompleted}>
						<span className={this.state.completed ? 'icon-checkbox-checked' : 'icon-checkbox-unchecked'}></span>
					</button>
				</div>
				<div 
					className="text"
					ref={this.textRef}
					role="textbox" 
					contentEditable="true" 
					aria-multiline="true" 
					aria-label={"To Do Item: " + this.state.text} 
					aria-required="true" 
					suppressContentEditableWarning={true}
					onInput={this.handleChange}
					onBlur={this.handleChange}
					dangerouslySetInnerHTML={{__html: this.state.text}}>
				</div>
				<div className="actions">
					<button className="delete" onClick={this.deleteItem}>
						<span className="icon-bin"></span> Remove
					</button>
					
					<div className="move-actions">
						<button className="up" onClick={this.moveUp}>
							<span className="icon-arrow-up2"></span> Up
						</button>
						<button className="down" onClick={this.moveDown}>
							<span className="icon-arrow-down2"></span> Down
						</button>
						<button className="top" onClick={this.moveTop}>
							Top
						</button>
						<button className="bottom" onClick={this.moveBottom}>
							Bottom
						</button>
					</div>
				</div>
			</li>
		);
	}
}

export default ToDoItem;
