import React from 'react'
import Button from '@mui/material/Button';
function TodoList(props) {
    return (
        <>
            
                <Button sx={{
                    position: 'absolute',
                    left: 510,
                    top: 255,
                    width: 50,
                    height: 20
                }} onClick={() =>{
                    props.onSelect(props.id)
                }} variant="outlined" >
                    Delete
                </Button>
                <li>   {props.text}</li>
            
        </>
    )
}

export default TodoList



{/* <Button sx={{
                position: 'absolute',
                left: 520,
                top: 255,
                width: 50,
                height: 20
            }} onClick={props.deleteItem} variant="outlined" >
                Delete
            </Button>
            <li>   {props.text}</li> */}