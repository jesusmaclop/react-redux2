import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
       // this.props.findCurrentItem(this.props.match.params.itemId); aqui es string , lo ocupamos como numero para el id del idItem
        //console.log('componentDidMount');

    }
    render(){
        const {currentItem} = this.props;       
        return(
            <Page 
            currentItem={currentItem}
            goTo={(path)=>{        
               this.props.history.push(path);        
            }        
          }
         /> 
        );
    }
} 
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
      };
};


const mapDispatchToProps ={
    findCurrentItem,
};


/* ANTES 
export default withRouter (
    connect(mapStateToProps)(Details)
  );
  */

  // AHORA
  export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(Details)
  );