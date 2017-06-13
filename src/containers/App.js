import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Col } from 'react-bootstrap';

import Header from '../components/Header';
import Main from '../components/Main';

import './App.css';


const App = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                    <Header/>
                    <Main/>
                </Col>
            </div>
        </div>
    );
};

export default App;
