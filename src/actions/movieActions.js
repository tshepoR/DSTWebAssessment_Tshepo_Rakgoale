import {FETCH_MOVIE_LIST} from './types'
import topFiveMoviesDB from '../foreRunnerDB';
import {getTopFiveMoviesEndPoint} from './endPoints';

export function fetchMovieList(){
return function (dispatch) {
    // i'm just gonna use the bult in javascript promise based method Fetch instead for axios.
    fetch(getTopFiveMoviesEndPoint)
    .then(componets=>componets.json())
    .then(responseJson =>{
      //store data to our local server database beacuse we are told the service might be slow onload.
        topFiveMoviesDB.insert(responseJson);
        //use data stored in local ForunneDB, this db is accessable throughout the app since is the browser local db. uses Bson structure just like mongoDB
        dispatch({
          type:FETCH_MOVIE_LIST,
          payload:topFiveMoviesDB.find()[0].components
      })
    })
    .catch(err=>{
        console.log( new Error('Error coccured',err));
    })
}
}