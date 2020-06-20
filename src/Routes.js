import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRegister from './pages/Login_register/Login_Register';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Routes(props) {
    return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/Home" component={Home} />
                        <Route path="/" component={LoginRegister} />
                    </Switch>
                    <ToastContainer />
            </BrowserRouter>
    );
}

export default Routes;