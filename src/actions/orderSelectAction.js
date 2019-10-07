import {ORDER_MOVIE_LIST} from './types'

export function orderMovieList(orderSelectedItem){
return function (dispatch) {
    dispatch({
        type:ORDER_MOVIE_LIST,
        payload:orderSelectedItem.target.value
    })
}
}


