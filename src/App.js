import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import TodoList from './components/todoList';
import {useSelector, useDispatch} from 'react-redux'
import {addNewTodo, deleteTodo, setTodo} from './actions/todo.js';
import {useState, useRef} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from './components/formDialog';
function App() {
  const todoList = useSelector(state => state.todo.list);
  const dispatch = useDispatch();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const handleClickOpenAddDialog = () => {
    setAddDialogOpen(true);
  };
  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };
  const randomNumber = ()=> {
    return 1000 + Math.floor(Math.random()*9000);
  }
  const handleAddClick = (newTitle) => {
    const rdNum = randomNumber();
    const newTodo = {
      id: rdNum,
      title: newTitle
    }
    dispatch(addNewTodo(newTodo))
  }
  const handleDeleteClick = (index) => {
    dispatch(deleteTodo(index));
  }

  const handleEditClick = (title, index) => {

    dispatch(setTodo(index, title));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Grid container justifyContent="space-between" direction="row"
      style={{marginTop:'1rem'}}>
          <Grid item>
            <Typography variant="h4">
              TODO
            </Typography>
          </Grid>
          <Grid item>
            <Fab
            size="medium"
            color="primary"
            onClick={()=>handleClickOpenAddDialog()}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      <TodoList handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} todoList={todoList}/>
      </Container>
      <FormDialog handleAddClick={handleAddClick} addDialogOpen={addDialogOpen} handleClickOpenAddDialog={handleClickOpenAddDialog} handleCloseAddDialog={handleCloseAddDialog}> 

      </FormDialog>
    </React.Fragment>
  );
}

export default App;
