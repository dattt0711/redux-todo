const initialState = {
    list:[],
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list, action.payload];
            return {
                list: newList,
            }
        }

        case 'SET_TODO':{
            const newList = [...state.list];
            newList[action.payload.index] = {
                ...newList[action.payload.index],
                title: action.payload.title,
            }
            return {
                list: newList,
            }
        }

        case 'DELETE_TODO': {
            const newList = [...state.list];
            newList.splice(action.payload, 1);
            return {
                list: newList,
            }
        }
        default: 
            return state;     
    }
}

export default todoReducer;