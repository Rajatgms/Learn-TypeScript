import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';
import {TodoModel} from './todo.model';
import ThemeContext, {theme} from './themeContext';

const rootElement = document.getElementById('root')!;


const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    const [theme, setTheme] = useState<theme>('purple');

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.options[event.target.selectedIndex].value as theme);
    }
    const handleAddItem = (text: string) => {
        setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}]);
    }
    const handleItemDelete = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };
    return(
        <ThemeContext.Provider value={{theme}}>
            <select name='' id='' onChange={handleThemeChange}>
                <option value='purple'>Default</option>
                <option value='darkgreen'>Dark</option>
                <option value='lightgreen'>Light</option>
            </select>
            <div className="App">
                <AddItem addItem={handleAddItem}></AddItem>
                <ToDoList items={todos} handleItemDelete={handleItemDelete}/>
            </div>
        </ThemeContext.Provider>
    )
}

ReactDOM.render(<App/>, rootElement)
