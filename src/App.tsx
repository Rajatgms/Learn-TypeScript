import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';
import {TodoModel} from './todo.model';

const rootElement = document.getElementById('root')!;

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    const handleAddItem = (text: string) => {
        setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}]);
    }
    const handleItemDelete = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };
    return <div className="App">
        <AddItem addItem={handleAddItem}></AddItem>
        <ToDoList items={todos} handleItemDelete={handleItemDelete}/>
    </div>
}

ReactDOM.render(<App/>, rootElement)
