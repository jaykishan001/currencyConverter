import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={input} 
        placeholder='Input Todo'
        onChange={(e) => setInput(e.target.value)} 
        />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo