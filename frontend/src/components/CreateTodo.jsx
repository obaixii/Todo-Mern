import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CreateTodo() {
    const { id } = useParams();

    const splitMessage = (message) => {
        return message.includes(',') ? message.split(',') : message;
    }
    const [todo, setTodo] = useState({
        title: '',
        body: '',
        status: false
    })
    const [message, setMessage] = useState('');
    const [serverMessages, setServerMessages] = useState([]);

    const getDataById = async () => {
        try {
            await  axios.get(`http://localhost:8000/v1/todos//todo/${id}`)
                .then(res => {
                    setTodo({
                        title:res.data.title,
                        body:res.data.body,
                        status:res.data.status
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (id) getDataById()
    },[id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/v1/todos/new-todo", todo)
                .then(res => {
                    console.log("~~~hello ", res.data.message)
                    const r = splitMessage(res.data.message)
                    if (typeof r !== 'string') {
                        setServerMessages(r)
                    } else {
                        setMessage(res.data.message)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className='container' onSubmit={(e) => handleSubmit(e)}>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    {id ? 'Update Todo' : 'Create Todo'}
                </button>
            </p>
            <div className={`collapse ${id ? 'show' : ''}`} id="collapseExample">
                <div className="card card-body">
                    {message}
                    {serverMessages.map((error, i) => (<p key={i}>{error}</p>))}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">{id ? 'Edit Title' : 'Enter Title'}</label>
                        <input type="text" value={todo.title? todo.title : ''} onChange={(e) => setTodo({ ...todo, title: e.target.value })} className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">{id ? 'Edit Description' : 'Enter Description'}</label>
                        <input type="text" value={todo.body? todo.body : ''} onChange={(e) => setTodo({ ...todo, body: e.target.value })} className="form-control" id="body" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">{id ? 'Edit Status' : 'Select Status'}</label>
                        <select className="form-select" defaultValue={id? todo.status:false} onChange={(e) => setTodo({ ...todo, status: e.target.value })} aria-label="Default select example">
                            <option value="true">Read</option>
                            <option value="false">UnRead</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-success">{id ? 'Update' : 'Create'}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateTodo
