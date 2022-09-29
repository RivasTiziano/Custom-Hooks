export const toDoReducer = ( initialState = [], action = {} )=>{
    switch (action.type) {
        case "[TODO] Add Todo":
            return [...initialState, action.payload];

        case "[TODO] Delete Todo":
            return initialState.filter(d => d != action.payload);

        case '[TODO] Complete Todo':
            return initialState.map( todo => {
    
                if ( todo.id === action.payload ) {// id
                    return {
                            ...todo,
                        done: !todo.done
                    }
                } 
    
                return todo;
            });
            
        default:
            return initialState
    }
}