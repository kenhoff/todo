import React from 'react';
import './ToDoItem.css';
import ToDoContentEditable from './ToDoContentEditable';

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = props.item;
		this.textRef = React.createRef();

		this.editText = this.editText.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.moveDown = this.moveDown.bind(this);
		this.moveUp = this.moveUp.bind(this);
		this.moveTop = this.moveTop.bind(this);
		this.moveBottom = this.moveBottom.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
	}

	editText(text){
		if (text === this.state.text) return;

		this.props.editText(this.state.key, text);
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

		this.props.toggleCompleted(this.state.key);
	}

	render() {
		return (
			<li className={this.state.completed ? 'completed' : ''}>
				<div className="toggle">
					<button onClick={this.toggleCompleted}>
						<span className={this.state.completed ? 'icon-checkbox-checked' : 'icon-checkbox-unchecked'}></span>
					</button>
				</div>
				<ToDoContentEditable text={this.state.text} editText={this.editText} />
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
