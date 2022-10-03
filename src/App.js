import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SubmitForm from './components/SubmitForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleSubmit = todo => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="wrapper">
      <div className='card frame'>
        <Header qtyTodos={todos} />

        <TodoList
          todos={todos}
          onDelete={handleDelete}
        />

        <SubmitForm onFormSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
