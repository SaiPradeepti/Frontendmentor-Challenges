export const reducer = (state,action) => {
    let list;
    switch (action.type){
        case 'toggleLightTheme':
            return {
                ...state,
                lightTheme: !state.lightTheme,
            };
        case 'addToDo':
            return{
                ...state,
                list: [...state.list,action.payload]
            } 
        case 'completedToDo':
            list = state.list.map(item => {
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }
                    else            
                    return item;
                });
            return{...state, list: list};
        case 'clearCompleted':
            list = state.list.filter(item => item.completed !== true);
            return{...state, list: list};
        case 'removeToDo':
            list = state.list.filter(item => item.id !== action.payload.id);
            return {...state, list: list};
        default:
            throw new Error('no matching action type');
    }
}