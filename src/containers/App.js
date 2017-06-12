import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


const App = () => {

    const test = () => {
        return fetch('./data.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.isLogged);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    test();

    return (
        <div className="App row col-lg-offset-2 col-lg-8">
            <Header />
            <Main />
        </div>
    );

};

export default App;
