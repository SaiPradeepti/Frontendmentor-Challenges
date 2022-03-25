export const reducer = (state, action) => {
    switch(action.type){
        case 'checkTheme':
            const existingTheme = localStorage.getItem('theme');
            return{
                ...state, theme: existingTheme
            }
        case 'setData' : 
            const newData = action.payload;
            return {
                ...state, data: newData
            }
        // case 'setDisplayData': //used while implementing pagination
        //     const index = state.pageSelected;
        //     const newDisplayData = state.data.slice((index-1)*20,index*20);
        //     console.log((index-1)*20,index*20)
        //     console.log(newDisplayData.length)
        //     return{
        //         ...state, displayData: newDisplayData
        //     }
        case 'setDisplayData':
            const newDisplayData = state.data.slice(0,state.numberOfItems)
            return{
                ...state, displayData: newDisplayData
            }
        case 'setIDs':
            let idArr = state.data.map(item => parseInt(item.numericCode));
            return {
                ...state, IDs: idArr
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
            localStorage.setItem('theme',newTheme)          
            return {
                ...state, theme: newTheme
            }
        case 'setInputFilter':
            return{
                ...state, inputFilter: action.payload
            }
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
        case 'setCountryInfoID':
            return {
                ...state, countryInfoID: action.payload.id
            }
        case 'setCountryInfo':
            const newCountryInfo = state.data.filter(item => {
                if(parseInt(item.numericCode) === parseInt(action.payload.id)){
                    return item
                }
                else
                    return;
            })
            return{
                ...state, countryInfo: newCountryInfo
            }
        case 'setCountryDetails':
            let langNames = state.countryInfo[0].languages.map(item => item.name);
            langNames = langNames.join(', ');          
            let newBorderCountries = [];  
            if(state.countryInfo[0].borders){
                const tempArr = state.countryInfo[0].borders.map(item1 => {
                state.data.filter(item2 => {
                    if (item1 === item2.alpha3Code)
                        {
                            let newItem  = {
                                name: item2.name,
                                id: item2.numericCode
                            }
                            newBorderCountries.push(newItem)
                            return item2.name;
                        }
                })
            });
            }        
            else{
                let newItem  = {
                                name: 'No Borders',
                                id: 1
                            }
                newBorderCountries.push(newItem)
            }    
            return{
                ...state, languageNames: langNames, borderCountries: newBorderCountries
            }
        case 'setNumberOfPages':
            const numberOfPages = Math.ceil(state.data.length / state.itemsPerPage);
            return{
                ...state, numberOfPages
            }
        case 'setPageSelected':
            const newPage = action.payload.item;
            return {
                ...state,pageSelected: newPage
            }
        default:
            return { ...state }
    }
}