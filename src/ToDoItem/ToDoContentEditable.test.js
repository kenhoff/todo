import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoContentEditable from './ToDoContentEditable';

test('renders text', () => {
	const editTextMock = function(){};
	const sampleText = 'Test text example';
	const regex = new RegExp(sampleText,"i");
	const { getByText } = render(<ToDoContentEditable text={sampleText} editText={editTextMock} />);
	const editableDiv = getByText(regex);
	
	expect(editableDiv).toBeInTheDocument();
});
