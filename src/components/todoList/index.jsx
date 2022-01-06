import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { pink } from '@mui/material/colors';
import {Grid, Paper, Typography} from '@mui/material';
function TodoList(props) {
    const {todoList, handleDeleteClick, handleEditClick} = props;
    const editTodo = (index) =>{
        const newTitle = prompt('Enter new title here: ');
        return handleEditClick(newTitle, index);
    }
    return (
        <div>
            <Grid container direction="column" style={{marginTop:"2rem"}} spacing={2}>
                {todoList.map((todo, index) => {
                    return(
                        <Grid item key={todo.id}>
                            <Paper style={{ padding: '0.8rem' }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h6">
                                            {todo.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <span onClick={() => handleDeleteClick(index)} style={{ padding: '0 10px', cursor: 'pointer' }}>
                                            <DeleteIcon sx={{ color: pink[500] }} />
                                        </span>
                                        <button onClick={() => editTodo(index)}>
                                            <EditIcon color="primary" />
                                        </button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
            {/* <ul>
                {todoList.map((todo, index) =>
                    <li key={todo.id}>
                        {todo.title}
                        <span onClick={()=>handleDeleteClick(index)} style={{padding: '0 10px', cursor: 'pointer'}}>
                            <DeleteIcon sx={{ color: pink[500] }} />
                        </span>
                        <button onClick={()=>editTodo(index)}>
                            <EditIcon color="primary"/>
                        </button>
                    </li>
                )}
            </ul> */}
        </div>
    );
}

export default TodoList;