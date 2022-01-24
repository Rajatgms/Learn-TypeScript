import React, {useRef} from 'react';
import './AddItem.scss';

interface AddItemProps {
    addItem: (item: string) => void
}

const AddItem: React.FunctionComponent<AddItemProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null)
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
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default AddItem
