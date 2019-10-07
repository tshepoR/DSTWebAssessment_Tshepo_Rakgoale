import {FETCH_MOVIE_LIST,ORDER_MOVIE_LIST} from '../actions/types'; 

const initialState={
    movies:[],
    orderSelectItems:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_MOVIE_LIST:
            return{
                ...state,
                movies:action.payload.find(t=>t.type.includes('movie-list')).items,
                orderSelectItems:action.payload.find(t=>t.type.includes('order-select')).items
            }
            case ORDER_MOVIE_LIST:
                    return{
                        ...state,
                       movies:state.movies.sort((a,b)=> { return a[action.payload]-b[action.payload]})
                       
                    }
            default:
            return state;
    }

}