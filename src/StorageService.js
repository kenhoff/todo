class StorageService {
	storageKey = 'ToDoList';

	static get(){
		const storage = window.localStorage;
		return JSON.parse(storage.getItem('ToDoList')) || null;
	}

	static save(itemList){
		const storage = window.localStorage;
		storage.setItem('ToDoList', JSON.stringify(itemList));
	}
}

export default StorageService;