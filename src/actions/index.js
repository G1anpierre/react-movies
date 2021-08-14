import { getData } from '../api';


export const handleSearch = (payload) => {
    return {
        type: 'HANDLESEARCH', payload: payload
    }
}

export const fetchData = (searchWord) => {
    
    return async(dispatch, getState) => {
        const receivedData = await getData(searchWord);
        console.log('emter action :', receivedData);
        dispatch({
            type: 'FETCHDATA', payload: receivedData
        });
    }
}

