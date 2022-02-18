export const reducer = (state, action) => {
    switch(action.type){
        case 'setData' : 
            const newData = action.payload;
            return {
                ...state, data: newData
            }
        case 'setDisplayData':
            return{
                ...state, displayData: state.data
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
        case 'setInputFilter':
            return{
                ...state, inputFilter: action.payload
            }
        // case 'inputFilterData':
        //         let inputFilteredData;
        //         const regEx = new RegExp(state.inputFilter, 'i')
            
        //     if(state.inputFilter !== '')
        //         inputFilteredData = state.displayData.filter(item => {                    
        //             if(state.regionFilter !== '')                    
        //                 return regEx.test(item.name) === true
        //             else
        //                 return regEx.test(item.name) === true
        //         })

        //     else
        //         inputFilteredData = state.data;
        //     return {
        //         ...state, displayData: inputFilteredData
        //     }
        // case 'dropDownFilterData':
        //     let dropDownfilteredData;
        //     if(state.regionFilter !== 'All')
        //         dropDownfilteredData = state.data.filter(item => item.region === state.regionFilter)
        //     else
        //         dropDownfilteredData = state.data
        //     console.log(dropDownfilteredData)
        //     return{
        //         ...state, displayData: dropDownfilteredData
        //     }
        case 'filterData':
            let filteredData;
            const regEx = new RegExp(state.inputFilter, 'i')
            if (state.regionFilter === ''){
                if(state.inputFilter === '')
                    filteredData = state.data;
                else
                    filteredData = state.data.filter(item => regEx.test(item.name) === true)
            }
            else if (state.regionFilter === 'All'){
                if(state.inputFilter === '')
                    filteredData = state.data;
                else
                    filteredData = state.data.filter(item => regEx.test(item.name) === true)
            }
            else if(state.regionFilter !== 'All'){
                if(state.inputFilter === '')
                    filteredData = state.data.filter(item => item.region === state.regionFilter )
                else
                    filteredData = state.data.filter(item => (item.region === state.regionFilter && regEx.test(item.name) === true))
            }
            
            return {
                ...state, displayData: filteredData
            }
        default:
            return { ...state }
    }
}