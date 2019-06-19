import {CHANGE_SEARCH_FIELD,
    REQUST_ROBOTS_PENDING,
    REQUST_ROBOTS_SUCESS,
    REQUST_ROBOTS_FAILED} from './constants'

export const setSearchField=(text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobots=()=>(dispatch)=>{
    dispatch({type:REQUST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>dispatch({type:REQUST_ROBOTS_SUCESS,payload:data}))
    .catch(error=>dispatch({type:REQUST_ROBOTS_FAILED,payload:error}))
}