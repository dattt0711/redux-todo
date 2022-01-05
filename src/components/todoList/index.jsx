import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    
};

function TodoList(props) {
    const {todoList, handleDeleteClick, handleEditClick} = props;
    const editTodo = (index) =>{
        const newTitle = prompt('Enter new title here: ');
        return handleEditClick(newTitle, index);
    }
    return (
        <div>
            <ul>
                {todoList.map((todo, index) =>
                    <li key={todo.id}>
                        {todo.title}
                        <span onClick={()=>handleDeleteClick(index)} style={{padding: '0 10px', cursor: 'pointer'}}>
                            &times;
                        </span>
                        <button onClick={()=>editTodo(index)}>edit</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList;