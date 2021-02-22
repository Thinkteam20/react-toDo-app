import React, {useState, useEffect}  from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({onInsertToggle,onInsertTodo, selectedTodo}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    useEffect(() => {
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    }, [selectedTodo])
    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
                <form onSubmit={onSubmit}>
                    <input placeholder="please type new todo" onChange={onChange}></input>
                    <button type="submit">
                        <MdAddCircle/>
                    </button>
                </form>
        </div>
    );
}

export default TodoInsert;