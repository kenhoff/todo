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
		this.deleteItem = this.deleteItem.bind(this);
		this.moveDown = this.moveDown.bind(this);
		this.moveUp = this.moveUp.bind(this);
		this.moveTop = this.moveTop.bind(this);
		this.moveBottom = this.moveBottom.bind(this);
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

	addItem(index, item){
		if (!item) return false;

		this.state.items.splice(index, 0, item);
		this.setState({items: this.state.items});
	}

	findItemIndexByKey(itemKey){
		return this.state.items.findIndex(item => item.key === itemKey);
	}

	deleteItem(itemKey){
		let itemIndex = this.findItemIndexByKey(itemKey);
		let item = this.state.items[itemIndex];

		if (!item) return false;

		this.state.items.splice(itemIndex, 1);
		this.setState({items: this.state.items});

		return item;
	}

	moveDown(itemKey){
		let itemIndex = this.findItemIndexByKey(itemKey);

		if (itemIndex === this.state.items.length - 1) return;

		let item = this.deleteItem(itemKey);
		this.addItem(itemIndex + 1, item);
	}

	moveUp(itemKey){
		let itemIndex = this.findItemIndexByKey(itemKey);
		
		if (itemIndex === 0) return;

		let item = this.deleteItem(itemKey);
		this.addItem(itemIndex - 1, item);
	}

	moveTop(itemKey){
		let itemIndex = this.findItemIndexByKey(itemKey);

		if (itemIndex === 0) return;

		let item = this.deleteItem(itemKey);
		this.addItem(0, item);
	}

	moveBottom(itemKey){
		let itemIndex = this.findItemIndexByKey(itemKey);
		let lastIndex = this.state.items.length - 1;

		if (itemIndex === lastIndex) return;

		let item = this.deleteItem(itemKey);
		this.addItem(lastIndex, item);
	}


	renderItem(item, index){
		return (
			<ToDoItem 
				item={item} 
				key={item.key}
				deleteItem={this.deleteItem}
				moveDown={this.moveDown}
				moveUp={this.moveUp}
				moveTop={this.moveTop}
				moveBottom={this.moveBottom} />
		);
	}

	renderListOfItems(){
		let items = this.state.items;
		return items.map((item, index) => this.renderItem(item, index));
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
