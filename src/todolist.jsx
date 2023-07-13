import React, { useState } from 'react';

const TodoApp = () => {
  const [bags, setBags] = useState([]);
  const [newBag, setNewBag] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBag.trim() !== '') {
      const newTask = {
        name: newBag,
        isCompleted: false
      };

      
      setBags([...bags, newTask]);

       
      setNewBag('');
    }
  };

  return (
    <div>
      <h1>TODO App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBag}
          onChange={(e) => setNewBag(e.target.value)}
          placeholder="Enter a new bag/task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {bags.map((bag, index) => (
          <li key={index}>
            {bag.name} - {bag.isCompleted ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
