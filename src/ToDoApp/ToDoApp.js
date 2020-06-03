import React from 'react';
import './ToDoApp.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoApp extends React.Component {
	constructor(props) {
		super(props);
// TODO: pull items from local storage

		this.state = {
			items:[], 
			addNewValue: ''
		};

		this.handleAddNewSubmit = this.handleAddNewSubmit.bind(this);
		this.handleAddNewChange = this.handleAddNewChange.bind(this);
	}


	handleAddNewSubmit(event){
		event.preventDefault();
		
		if (!this.state.addNewValue) return false;
		
		let currItems = this.state.items;
		let newItem = {
			text: this.state.addNewValue, 
			completed: false,
			key: Date.now()
		};

		currItems.push(newItem);

		this.setState({
			items: currItems,
			addNewValue: ''
		});
	}
	
	handleAddNewChange(event){
		this.setState({addNewValue: event.target.value});
	}



	renderItem(item){
		return (
			<ToDoItem item={item} key={item.key} />
		);
	}

	renderListOfItems(){
		let items = this.state.items;
		return items.map(item => this.renderItem(item));
	}

	render() {
		return (
			<div id="ToDoApp">
				<header>
					<input type="text" aria-label="Filter To Do items" />
					<button>
						<span className="icon-search"></span> Filter
					</button>
				</header>
				<main>
					<ul id="ListItems">
						{this.renderListOfItems()}
					</ul>
				</main>
				<footer>
					<form onSubmit={this.handleAddNewSubmit}>
						<input type="text" id="addNewInput" name="addNewInput" aria-label="Add new list items" value={this.state.addNewValue} onChange={this.handleAddNewChange} />
						<button type="submit">
							<span className="icon-plus"></span> Add New
						</button>
					</form>
				</footer>
			</div>
		);
	}
}

export default ToDoApp;
