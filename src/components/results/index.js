import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';

class Results extends Component {
    render(){
        const {results,} = this.props;

       // console.log(suggestions);
          console.log(this.props);
          
        return(
            <Page 
            results={results}
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
        results: state.results,
        hola: '123',
      };

};

/*
const wrapper = connect(mapStateToProps);
const component = wrapper(Results);

export default component;
*/
// LO DE ARRIBA YA NO LO USAMOS ASI 

/*  ASI VA ANTES DE AGREGAR EL WRAPER CON EL withRouter para cambiar de pagina 
export default connect(mapStateToProps)(Results);

*/

// con este withRouter podemos cambiar de pagina dando click, llama la funcion onclick
// y llama la funcion  goto={(path)} dentro del <Page/> de  Results  ,  results->index.js aqui.
export default withRouter (
    connect(mapStateToProps)(Results)
  );
