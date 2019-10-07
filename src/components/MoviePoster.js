import React, { Component, PropTypes } from 'react';
import MovieItemDetail from './MovieItemDetail';
import queryString from 'query-string';




class MoviePoster extends Component {
       constructor(props){
           super(props);
        }

    render() {
      const parsed = queryString.parse(this.props.query);
      console.log(parsed);
        
         const {title,imageUrl,releaseDate,rank} =this.props.movieItem;
        
        return (
         <div>
     
     <div className="card" style={{width: '18rem'}}>
      <img src={imageUrl} className="card-img-top pointer" alt="..." style={{height:307,cursor:'pointer'}}/>
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p>{`Release Date: ${releaseDate}`}</p>
    <p>{`Ranked: ${rank}`}</p>
    <p className="card-text"><em><b>Are you interested in this movie?</b></em></p>
    <MovieItemDetail movie={this.props.movieItem} show={rank==parsed.rank}/>
  </div>
</div> 
 </div>
         
   );
    }
}

export default MoviePoster;