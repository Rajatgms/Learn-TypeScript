import React from 'react';
import {TodoModel} from '../todo.model';
import './ToDoList.scss';

interface ToDoListProps {
  items: TodoModel[];
  handleItemDelete: (id: string) => void;
}

const ToDoList: React.FunctionComponent<ToDoListProps> = props => {
  return (
      <ul>
        {props.items.map(item =>
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={props.handleItemDelete.bind(null, item.id)}>
                DELETE
              </button>
            </li>
        )}
      </ul>)
}

export default ToDoList;
