import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

import $ from 'jquery'


const Header = (props) => {

    const removeActive = () => {
        $('nav li').removeClass('active');
    };

    const addActive = ({target}) => {

        if ( $(target).parent().is('li') ) {

            removeActive();
            $(target).parent().addClass('active');

        }

    };

    const logOut = () => {
        window.location.href = '/logout';
    };

    $(document).ready( function() {

        $('nav li > a').on('click', addActive);
        if (props.location.pathname !== "/") {

            removeActive();
            $('#' + props.location.pathname.slice(1)).addClass('active');

        }

    });

    return (
        <header>
            <div className="text-right">
                <a className="admin-btn" onClick={logOut}>Salir</a>
            </div>
            <h1>Hola, {props.username}</h1>
            <nav>
                <ul>
                    <li id="dashboard" className="active" onClick={addActive}><NavLink exact to='/'>Dashboard</NavLink></li>
                    <li id="usuarious" onClick={addActive}><NavLink to='/usuarious'>Usuarios</NavLink></li>
                    <li id="conversaciones" onClick={addActive}><NavLink to='/conversaciones'>Conversaciones</NavLink></li>
                </ul>
            </nav>
        </header>
    );

};

export default withRouter(Header);
