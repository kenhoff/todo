import React from 'react';
import { render } from '@testing-library/react';
import ToDoItem from './ToDoItem';

// test('renders toggle button', () => {
// 	const itemMock = {
// 		text: 'Sample ToDo Item Text', 
// 		completed: false,
// 		key: Date.now()
// 	};

// 	const deleteItemMock = jest.fn(itemKey => itemKey);
// 	const moveDownMock = jest.fn(itemKey => itemKey);
// 	const moveUpMock = jest.fn(itemKey => itemKey);
// 	const moveTopMock = jest.fn(itemKey => itemKey);
// 	const moveBottomMock = jest.fn(itemKey => itemKey);
// 	const toggleCompletedMock = jest.fn(itemKey => itemKey);
// 	const editItemTextMock = jest.fn(itemKey => itemKey);

// 	const { getByText } = render(
// 		<ToDoItem 
// 			item={item} 
// 			key={item.key}
// 			deleteItem={deleteItemMock}
// 			moveDown={moveDownMock}
// 			moveUp={moveUpMock}
// 			moveTop={moveTopMock}
// 			moveBottom={moveBottomMock} 
// 			toggleCompleted={toggleCompletedMock}
// 			editText={this.editItemText} />
// 		);
	




// 	const editableDiv = getByText(regex);
	
// 	expect(editableDiv).toBeInTheDocument();
// });