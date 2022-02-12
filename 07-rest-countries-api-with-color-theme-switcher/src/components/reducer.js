export const reducer = (state, action) => {
    switch(action.type){
        case 'setData' : 
            const newData = action.payload;
            return {
                ...state, data: newData
            }
        case 'setLoading':
            return{
                ...state, loading: false
            }
        case 'themeChange': 
            console.log(state.theme)
            const newTheme = (state.theme === 'light') ? 'dark' : 'light'            
            return {
                ...state, theme: newTheme
            }
        default:
            return { ...state }
    }
}