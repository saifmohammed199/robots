import {CHANGE_SEARCH_FIELD,
    REQUST_ROBOTS_PENDING,
    REQUST_ROBOTS_SUCESS,
    REQUST_ROBOTS_FAILED} from './constants'


const intialStateSearch={
    searchField:''
}

export const searchRobots=(state=intialStateSearch,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return Object.assign({},state, {searchField:action.payload})
        default:
            return state;
    }
}

const intialStateRobots={
    isPending:false,
    robots:[],
    error:''
}

export const requestRobots=(state=intialStateRobots,action={})=>{
    switch(action.type){
        case REQUST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUST_ROBOTS_SUCESS:
            return Object.assign({},state,{robots:action.payload, isPending:false})
        case REQUST_ROBOTS_FAILED:
            return Object.assign({},state,{error:action.payload, isPending:false})
        default:
            return state;
    }
}