import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');
  const [checkboxes, setCheckboxes] = useState(() => {
    const storedCheckboxes = localStorage.getItem('checkboxes');
    return storedCheckboxes ? JSON.parse(storedCheckboxes) : [];
  });

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const currentDate = new Date();
      const newTodoItem = {
        text: newTodo,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
      setCheckboxes([...checkboxes, false]);
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditedTodo(todos[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes.splice(index, 1);
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }, [todos, checkboxes]);

  return (
    <>
      <div>
        <div className='bg-pink-500 pt-12'>
          <p className='text-4xl font-bold text-center mb-6 text-white'>  Todo List App</p>
          <div className=''>
            <div className='mx-auto shadow-lg shadow-pink-300 lg:w-2/4  bg-white p-4 rounded-md'>
              <div className='mx-auto '>
                <p className='mb-2 font-semibold'>New Todos:</p>
              </div>
              <div className='flex justify-around'>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  className='ps-2 outline-none border border-pink-600 py-2 rounded-md w-full'
                />
                <button
                  className='bg-pink-500 mx-2 px-8 py-2 rounded-md text-white font-semibold '
                  onClick={handleAddTodo}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {todos.map((todo, index) => (
          <div key={index} className='mx-auto lg:w-1/2 flex flex-wrap items-center mt-10 border border-pink-600 p-4 rounded-md shadow-lg'>
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                checked={checkboxes[index] || false}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              <div className="flex flex-col w-full">
                <p className={`border border-pink-600 py-2 ms-2 ps-2 rounded-md mb-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</p>
                <p className="text-sm text-gray-500 ml-auto">Created on {todo.date} at {todo.time}</p>
              </div>
            </div>
            <div className='flex mt-2 ml-auto'>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    className='border border-pink-600 w-full py-2 ms-2 ps-2 rounded-md'
                  />
                  <button
                    className='bg-pink-600 mx-2 mt-2 px-8 py-2 rounded-md text-white font-semibold'
                    onClick={() => handleSaveEdit(index)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='bg-pink-500 mr-2 px-8 py-2 rounded-md text-white font-semibold'
                    onClick={() => handleEditTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-pink-500 px-8 py-2 rounded-md text-white font-semibold'
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
