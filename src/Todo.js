import React from 'react'
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import TodoList from './TodoList';
function Todo() {
    const [inputs, setInputs] = useState("");
    const [List, setList] = useState([]);
   
    
    const inputE = (e) => {
        setInputs(e.target.value);
    }
    const Add = () => {
        setList((ol) => {
            return [...ol, inputs];
        })
        setInputs("");
    }
    const deleteItem = (id) => {
        console.log("Dlete");
        setList((ol) => {
            return ol.filter((arrelem, index) => {
                return index !== id;
            })
        })
    }
    
    return (
        <>
            <div className="TODO">
            
                <TextField sx={{
                    marginTop: 10,
                    marginLeft: 10,
                    color: 'white'
                }} value={inputs} onChange={inputE} id="standard-basic" label="Task" variant="standard" />
                <Button
                    sx={{
                        marginTop: -8,
                        marginLeft: 39
                    }}
                    type='text'
                    onClick={Add}
                    variant="contained" color="success">
                    Add Items
                </Button>
                <ui>
                    {/* <li>{inputs}</li> */}
                    {List.map((i, index) => {
                        return <TodoList onSelect={deleteItem} id={index} key={index} text={i} />
                    })}
                </ui>
            </div>
        </>
    )
}

export default Todo