import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
// TODO: pull items from local storage

		this.state = props.item;
		this.index = props.index;
		this.textRef = React.createRef();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		let text = this.textRef.current.innerHTML;
		if (text == this.state.text) return;

		this.setState({
			text: text
		});
	}

	render() {
		return (
			<li>
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
