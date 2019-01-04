import React, { Component } from 'react';
import Page from './page';
import {connect} from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import {withRouter} from 'react-router-dom';

class IAppBar extends Component {
    
    constructor(props){
        super(props);

        this.state= {
             text: '',   

        };

        this.onChangeText = this.onChangeText.bind(this); 
        this.onChangeSelection = this.onChangeSelection.bind(this);     

    }
    
    onChangeText(text){
        this.setState({ text });

        this.props.findSuggestions(text);
    }
    onChangeSelection(text){
        this.setState({ text });

        this.props.findResults(text);
        this.props.history.push('/results');
    }

    render(){
        const {text} = this.state;
        const {suggestions} = this.props;
        return(
             <Page 
             
             text = {text}
             suggestions= {suggestions}
             onChangeText={this.onChangeText}
             onChangeSelection={this.onChangeSelection}
             
             />   
        );
    }
} 

const mapStateToProps = (state) => {

    return {
        suggestions: state.suggestions,
      };

};

//LO MISMO DE ABAJO PERO MÁS SENCILLO, version 2
const mapDispatchToProps = {
    findSuggestions,
    findResults,

};

/* LO MISMO DE ARRIBA PERO MÁS COMPLEJO, version 1, 
const mapDispatchToProps = (dispatch) => {
    return {
        findSuggestions: text => dispatch(findSuggestions(text)),
    };

 };
*/

// un wrapper con withrouter para poder redirigir despues de details de nuevo a results
// si se hace una nueva busqueda mejorado lo de abajo.
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);


// antes de hacer el wrapper con withRouter para poder redirigir a results como arriba
//export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);



// export default connect(mapStateToProps)(IAppBar); ANTES DE AGREGAR EL mapDispatchToProps)


/*
export default IAppBar;

*/ // ya no es necesario asi este vieja forma