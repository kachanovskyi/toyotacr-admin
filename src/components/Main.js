import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Users from './Users';
import Conversations from './Conversations';


const Main = () => {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/usuarious' component={Users}/>
                <Route path='/conversaciones' component={Conversations}/>
            </Switch>
        </main>
    );
};

export default Main;
