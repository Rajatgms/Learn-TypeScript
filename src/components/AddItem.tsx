import React, {useContext, useRef} from 'react';
import './AddItem.scss';
import ThemeContext from '../themeContext';

interface AddItemProps {
    addItem: (item: string) => void
}

const AddItem: React.FunctionComponent<AddItemProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null)
    const themeContext = useContext(ThemeContext);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.addItem(inputRef.current!.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor='todo-text'>Add task</label>
                <input type='text' id='todo-text' ref={inputRef}/>
            </div>
            <button
                type="submit"
                style={{background: themeContext.theme}}
            >ADD TODO
            </button>
        </form>
    )
}

export default AddItem
