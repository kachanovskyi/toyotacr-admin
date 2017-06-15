import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {Col} from 'react-bootstrap';

import Header from '../components/Header';
import Main from '../components/Main';
import Login from '../components/Login';

import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            isLogged: "false"
        };

        this.logIn = this.logIn.bind(this);
    };

    logIn(username) {
        console.log(`username: ${username}`);

        this.setState({
            username,
            isLogged: "true"
        })
    };

    loadData() {
        fetch('./data.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    username: responseJson.username,
                    isLogged: responseJson.isLogged
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

        if(this.state.isLogged === "false") {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <Col xsOffset={1} xs={10} mdOffset={2} md={8} lg={6} lgOffset={3}>
                            <Login logIn={this.logIn}/>
                        </Col>
                    </div>
                </div>
            )
        }

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
