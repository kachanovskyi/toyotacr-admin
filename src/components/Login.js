import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {Col} from 'react-bootstrap';

import './Login.css';

import $ from 'jquery'


const Login = ({logIn}) => {

    const login = () => {
        console.log('logging...');
        const login = $('#inputLogin').val();
        const pass = $('#inputPass').val();
        if( (login.length || login.trim()) && (pass.length || pass.trim()) ) {
            let data = {
                login,
                pass
            };
            fetch('./data.json', data)
                .then((response) => response.json())
                .then((responseJson) => {

                    logIn(responseJson.userId, responseJson.username);

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    $('#inputLogin, #inputPass').keypress(function(e){
        if(e.which === 13){
            login();
        }
    });

    return (
        <div className="Login">
            <div className="row table-cell">
                <Col xs={10} xsOffset={1} className="login-form">
                    <p className="title">Ingresar</p>
                    <p>Correo Electrónico</p>
                    <input type="text" name="login" id="inputLogin" required/>
                    <p>Contraseña</p>
                    <input type="password" name="password" id="inputPass" required/>
                    <a className="login-btn" onClick={login}>ENTRAR</a>
                </Col>
            </div>
        </div>
    );

};

export default Login;
