import React from 'react';
import { render } from '@testing-library/react';
import ToDoItem from './ToDoItem';

<ToDoItem 
	item={item} 
	key={item.key}
	deleteItem={this.deleteItem}
	moveDown={this.moveDown}
	moveUp={this.moveUp}
	moveTop={this.moveTop}
	moveBottom={this.moveBottom} 
	toggleCompleted={this.toggleItemCompleted}
	editText={this.editItemText} />





test('renders toggle button', () => {
	const item = {

	};

	const deleteItemMock = jest.fn(itemKey => itemKey);
	const moveDownMock = jest.fn(itemKey => itemKey);
	const moveUpMock = jest.fn(itemKey => itemKey);
	const moveTopMock = jest.fn(itemKey => itemKey);
	const moveBottomMock = jest.fn(itemKey => itemKey);
	const toggleCompletedMock = jest.fn(itemKey => itemKey);
	const editItemTextMock = jest.fn(itemKey => itemKey);

	const { getByText } = render(
		<ToDoItem 
			item={item} 
			key={item.key}
			deleteItem={deleteItemMock}
			moveDown={moveDownMock}
			moveUp={moveUpMock}
			moveTop={moveTopMock}
			moveBottom={moveBottomMock} 
			toggleCompleted={toggleCompletedMock}
			editText={this.editItemText} />
		);
	




	const editableDiv = getByText(regex);
	
	expect(editableDiv).toBeInTheDocument();
});