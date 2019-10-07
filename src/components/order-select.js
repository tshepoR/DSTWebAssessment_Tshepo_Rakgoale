import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {orderMovieList} from '../actions/orderSelectAction';

class OrderSelect extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {OrderSelect} = this.props;
        return (
            <div style={{marginTop:10}}>
            <div className="row">
             <div className="col-12">
                  Order By:
             </div>
            </div>
              <div className="row">
                  <div className="col-4">
                  <select className="form-control" onChange={OrderSelect}>
                      <option value="">Select....</option>
                  {
                      this.props.orderSelectItems.map((item)=>{
                          return(
                            <option key={item.valueToOrderBy} value={item.valueToOrderBy}>{item.label}</option>
                          )
                      })
                  }
                  </select>
                  </div>
             </div>
             </div>
        );
    }
}

OrderSelect.propTypes = {

};

const mapDispatchToProps =(dispatch)=>{
    return{
           OrderSelect:(e)=>{

               if(!e.target.value) {
                    return;
               }

             dispatch({
                type:'ORDER_MOVIE_LIST',
                payload:e.target.value
            })

        }  
    }
}

export default connect(null,mapDispatchToProps)(OrderSelect);