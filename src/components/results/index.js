import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
    render(){
        const {suggestions} = this.props;

       // console.log(suggestions);
          console.log(this.props);
          
        return(
             <Page
                  suggestions={suggestions}
             />   
        );
    }
} 

const mapStateToProps = (state) => {

    return {
        suggestions: state.suggestions,
        hola: '123',
      };

};

/*
const wrapper = connect(mapStateToProps);
const component = wrapper(Results);

export default component;
*/
// LO DE ARRIBA YA NO LO USAMOS ASI 

export default connect(mapStateToProps)(Results);