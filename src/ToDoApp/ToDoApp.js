import React from 'react';
import './ToDoApp.css';

function ToDoApp() {
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
			<li>
				<div className="text">
					<input type="text" />
					<div className="timestamps">
						<span className="completed"></span>
						<span className="created"></span>
					</div>
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
