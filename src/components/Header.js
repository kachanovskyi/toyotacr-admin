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

    $(document).ready( function() {

        $('nav li > a').on('click', addActive);

        if (props.location.pathname !== "/") {

            removeActive();
            $('#' + props.location.pathname.slice(1)).addClass('active');

        }

    });

    return (
        <header>
            <nav>
                <ul>
                    <li id="dashboard" className="active" onClick={addActive}><NavLink exact to='/'>Dashboard</NavLink></li>
                    <li id="usarious" onClick={addActive}><NavLink to='/usarious'>Usarious</NavLink></li>
                    <li id="conversaciones" onClick={addActive}><NavLink to='/conversaciones'>Conversaciones</NavLink></li>
                    {/*<li><Link to='/conversations'>Conversaciones</Link></li>*/}
                </ul>
            </nav>
        </header>
    );

};

export default withRouter(Header);
