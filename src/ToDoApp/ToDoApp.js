import React from 'react';
import './ToDoApp.css';

function ToDoApp() {
	return (
<div id="ToDoApp">
	<header>
		<div className="header-inner">
			<div className="logo">ToDo</div>
			<div className="filters">
				<input type="text" aria-label="Filter To Do items" />
				<button>
					<span className="icon-search"></span> Filter
				</button>
			</div>
		</div>
	</header>
	<main>
		<ul id="ListItems">
			<li>
				<input type="text" />
				<div className="timestamps">
					<span className="completed"></span>
					<span className="created"></span>
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

export default ToDoApp;
