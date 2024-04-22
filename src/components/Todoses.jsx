import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from './store/todoSlice';

function Todos() {

   const todos =  useSelector(state=> state.todos);
   const dispatch = useDispatch();

   const [editId, setEditId] = useState(null)
   const [editText, setEditText] = useState("")

   const saveEdit = (id) => {
    dispatch(editTodo({id, text: editText}));
    setEditId(null)
   }
   const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
   }

  return (
    <>
    <div>Todos</div>
    <ul>
    
        {todos?.map((todo) => (

            <li key={todo.id}>
            {editId === todo.id ? (
                            <input 
                                type="text" 
                                value={editText} 
                                onChange={(e) => setEditText(e.target.value)} 
                            />
                        ) : (
                            <div>{todo.text}</div>
                        )}
                        {editId === todo.id ? (
                            <button onClick={() => saveEdit(todo.id)}>Save</button>
                        ) : (
                            <button onClick={() => handleEdit(todo)}>Edit</button>
                        )}
            <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
        )
    )}
    </ul>
    </>
  )
}

export default Todos;