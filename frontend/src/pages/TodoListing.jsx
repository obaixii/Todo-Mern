import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Link } from 'react-router-dom';

function TodoListing() {

  const [todos,setTodos] = useState([])
  const getData = () => {
    axios.get("http://localhost:8000/v1/todos/todos")
      .then(res => setTodos(res.data))
      .catch(error => console.log(error.message))
  };

  useEffect(()=>{
    getData()
  });

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8000/v1/todos/delete-todo/${id}`
      const res = await axios.delete(url)
      toast(res.data, {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getData()
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <h2 className='text-center'>TodoListing</h2>
      <ol className="list-group list-group-numbered text-start">
        <div className="container">
          <ToastContainer position="top-left" autoClose={2500} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
          {
            todos.map(todo => {
              return (
                <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{todo.title}</div>
                    {todo.body}
                  </div>
                  <div className="action-controllers">
                    <button className='btn btn-info'><i className="bi bi-eye-fill"></i></button>
                    <Link to={`/${todo._id}`} className='btn btn-primary mx-1'><i className="bi bi-pencil-square"></i></Link>
                    <button className='btn btn-danger' onClick={() => handleDelete(todo._id)}><i className="bi bi-trash3-fill"></i></button>
                  </div>
                </li>
              )
            })
          }
        </div>
      </ol>
    </div>
  )
}

export default TodoListing
