import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles/style.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import * as actions from '../actions';

import Header from './Header';

const Interior = () => <h2>Aqui van los contenidos</h2>


class App extends Component{


    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Interior}/>

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);