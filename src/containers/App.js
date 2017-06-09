import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const App = () => {

    const test = () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    test();

    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );

};

export default App;
