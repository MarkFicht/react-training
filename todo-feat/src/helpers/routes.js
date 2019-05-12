const serverUrl = `http://localhost:4000`;

export const toDoItemsApiUrl = id => 
    id ? `${serverUrl}/todo_items/${id}` : `${serverUrl}/todo_items`

/**
* json-server --watch db.json --port 4000
*/