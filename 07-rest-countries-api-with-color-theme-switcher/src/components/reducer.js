export const reducer = (state, action) => {
    switch(action){
        case 'setData' : 
            const newData = action.payload;
            return {
                state, data: newData
            }
        case 'themeChange': 
            const newTheme = state.theme === 'light' ? 'dark' : 'light'
            return {
                state, theme: newTheme
            }
        default:
            return { state }
    }
}