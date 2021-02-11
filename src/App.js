import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      text: "todo 1",
      checked: true
    },
    {
      id:2,
      text: "todo 2",
      checked: true
    },
    {
      id:3,
      text: "todo 3",
      checked: true
    },
  ])
  return (
    <Template>
      <TodoList todos={todos}/>
    </Template>
  );
}

export default App;

// 함수 모양 
// .map 사용법 
//usestate 함수 
