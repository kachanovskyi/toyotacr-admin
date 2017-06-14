import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {Col} from 'react-bootstrap';

import Header from '../components/Header';
import Main from '../components/Main';

import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
        };
    };

    loadData() {
        fetch('./data.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    username: responseJson.username
                });

            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <Header username={this.state.username}/>
                        <Main/>
                    </Col>
                </div>
            </div>
        );
    }
}

export default App;
