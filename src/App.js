import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import {useSelector, useDispatch} from 'react-redux'
import {addNewTodo, deleteTodo, setTodo} from './actions/todo.js';
import {useState, useRef} from 'react'
function App() {
  const todoList = useSelector(state => state.todo.list);
  const dispatch = useDispatch();
  const input = useRef(null);
  const [todoInput, setTodoInput] = useState('');
  const randomNumber = ()=> {
    return 1000 + Math.floor(Math.random()*9000);
  }
  const handleAddClick = () => {
    const rdNum = randomNumber();
    const newTodo = {
      id: rdNum,
      title: todoInput
    }

    dispatch(addNewTodo(newTodo))
    input.current.focus();
    setTodoInput('');
  }
  const handleDeleteClick = (index) => {
    dispatch(deleteTodo(index));
  }

  const handleEditClick = (title, index) => {

    dispatch(setTodo(index, title));
  }
  return (
    <div>
      <h1>Todo list</h1>
      <input ref={input} type="text" value={todoInput} onSubmit={e=>e.preventDefault()} onChange={e=>setTodoInput(e.target.value)}></input>
      <button onClick={handleAddClick}>Add</button>
      <TodoList handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} todoList={todoList}/>
    </div>
  );
}

export default App;
