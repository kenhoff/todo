import React from 'react';
import './ToDoApp.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoApp extends React.Component {
	
	items = [
		{text: 'blahblah blah1', created: 'now', completed: 'then'},
		{text: 'blahblah blah2222222', created: 'other', completed: 'moar'}
	];


	renderItem(item){
		return (
			<ToDoItem item={item} />
		);
	}

	renderListOfItems(){
		return this.items.map(item => this.renderItem(item));
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
					<input type="text" id="addNewInput" name="addNewInput" aria-label="Add new list items" />
					<button>
						<span className="icon-plus"></span> Add New
					</button>
				</footer>
			</div>
		);
	}
}

export default ToDoApp;
