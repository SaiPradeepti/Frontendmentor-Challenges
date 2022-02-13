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
        case 'setRegionCategory':
            return {
                ...state, regionFilter: action.payload
            }
        case 'setDropdownContent':
            const newDropdownContent = ['All', ...new Set(state.data.map(item => item.region))]
            return {
                ...state, dropdownContent: [...newDropdownContent]
            }
        case 'themeChange': 
            console.log(state.theme)
            const newTheme = (state.theme === 'light') ? 'dark' : 'light'            
            return {
                ...state, theme: newTheme
            }
        case 'filterData':
            const filteredData = state.data.filter(item => item.region === action.payload)
            return{
                ...state, data: filteredData
            }
        default:
            return { ...state }
    }
}