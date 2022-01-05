export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const setTodo = (index, title) => {
    return {
        type: 'SET_TODO',
        payload: {
            title,
            index,
        }
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index
    }
}