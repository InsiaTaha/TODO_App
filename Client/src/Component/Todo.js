import './todo.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../Features/user'


export default function Todo(){
    const dispatch = useDispatch();
    const [data, setData] = useState('');
    //const currentUser  = useSelector((state) => state.user);
    const currentUser= useSelector((state)=>state.user.currentUser)
    console.log(currentUser)
    const addItems = () => {
        
        if (data !== '') {
            dispatch(addTodo({currentUser:currentUser,Todo:data}));
            setData('');
        }
        else {
            alert('Input field must not be empty');
        }
    }
    const deleteItems = (todoId) => { 
        dispatch(deleteTodo({currentUser:currentUser,id:todoId}));
        console.log(currentUser)
    }
    return(
        <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Todo list</h4>
                        <div className="add-items d-flex"> 
                        <input type="text" className="form-control todo-list-input" 
                        placeholder="What do you need to do today?"
                        value={data}    
                        onChange={(e) => setData(e.target.value)} /> 
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={addItems}>Add</button> 
                        </div>
                        <div className="list-wrapper">
                            <ul className="d-flex flex-column-reverse todo-list">
                            {currentUser.TodoList.map((todo, index) =>
                                <li id={index} key={index}>
                                  {index}
                                    {todo} <button onClick={()=>deleteItems(index)}>del</button>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}