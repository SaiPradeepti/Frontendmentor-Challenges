export const reducer = (state,action) => {
    let list;
    switch (action.type){
        case 'showAlert':
            return {
                ...state,
                showAlert: true,
                alertContent: action.payload.alertContent
            }
        case 'hideAlert':
            return {
                ...state,
                showAlert: false,
            }
        case 'toggleLightTheme':
            return {
                ...state,
                lightTheme: !state.lightTheme,
            };
        case 'addToDo':
            return{
                ...state,
                list: [...state.list,action.payload],
                showAlert: true,
                alertContent: 'Todo added',
                alertColor: 'rgb(0, 84, 22)'
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
            return{
                ...state, 
                list: list,
                showAlert: true,
                alertContent: 'Completed todos removed',
                alertColor: 'rgb(135, 0, 0)'
            };
        case 'removeToDo':
            list = state.list.filter(item => item.id !== action.payload.id);
            return {
                ...state, 
                list: list,
                showAlert: true,
                alertContent: 'Todo remove',
                alertColor: 'rgb(135, 0, 0)'
            };
        default:
            throw new Error('no matching action type');
    }
}