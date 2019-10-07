import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovieList} from '../actions/movieActions';
import MoviePoster from './MoviePoster';
import OrderSelect from './order-select';
import Loader from './Loader';



class Movie extends Component {

componentDidMount() {
this.props.fetchMovieList() 
}

render() {
       
         
        const {movies:movieLists} = this.props.movies;
        const movies = movieLists.map((movie)=> (<div className="col-md-4 marginTop" key={movie.id}><MoviePoster movieItem={movie} query={this.props.location.search}/></div>))
        if(movieLists.length===0)
         return  <Loader/>
         else
        return (

            <React.Fragment>
           {!movies? <Loader/>:null}
            <OrderSelect orderSelectItems={this.props.orderSelectItems}/>
            <div className="marginTop animated fadeIn">
               <div className="row">
               {movies || 'No movies found'}
               </div>
            </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        movies:state.movies,
        orderSelectItems:state.movies.orderSelectItems
    }
}
Movie.propTypes={
    movies:[],
    orderSelectItems:[]
}

export default connect(mapStateToProps,{fetchMovieList})(Movie);