import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/Todoinsert';
import TodoList from './components/TodoList';


let nextID = 4;
function App() {
  
  const [selectedTodo,setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos,setTodos] = useState([
    {
      id:1,
      text: "todo 1",
      checked: true
    },
    {
      id:2,
      text: "todo 2",
      checked: false
    },
    { 
      id:3,
      text: "todo 3",
      checked: true
    },
    
  ])

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if(text === ""){
      return alert('please type todos')
    }else{
      const todo = {
        id: nextID,
        text,
        checked: false 
      }
      setTodos(todos => todos.concat(todo));
      nextID++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked}: todo)))
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle}
      onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}><MdAddCircle/></div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} selectedTodo={selectedTodo}/>}
    </Template>
    
  );
}

export default App;

// 함수 모양 
// .map 사용법 
//usestate 함수 
