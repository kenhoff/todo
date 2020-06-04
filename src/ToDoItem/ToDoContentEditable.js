import React from 'react';
import './ToDoItem.css';

class ToDoContentEditable extends React.Component {
	constructor(props) {
		super(props);

		this.textRef = React.createRef();
		this.editText = this.editText.bind(this);
	}

	editText(event){
		let text = this.textRef.current.innerHTML;
		if (text === this.props.text) return;

		this.props.editText(text);
	}


	shouldComponentUpdate(nextProps){
        return nextProps.text !== this.textRef.current.innerHTML;
    }

	render() {
		return (
			<div 
				className="text"
				ref={this.textRef}
				role="text" 
				contentEditable="true" 
				aria-label={"To Do Item: " + this.props.text} 
				aria-required="true" 
				suppressContentEditableWarning={true}
				onInput={this.editText}
				onBlur={this.editText}
				dangerouslySetInnerHTML={{__html: this.props.text}}>
			</div>
		);
	}
}

export default ToDoContentEditable;
