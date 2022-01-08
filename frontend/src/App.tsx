import React, { useEffect, Suspense, lazy } from 'react';
// import axios from 'axios';
import {
    Box, makeStyles, Typography, Button, LinearProgress
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesContext } from '@material-ui/styles';

// // Set jwt toke to header
// import setAuthHeader from './utils/authHeader';

import Navbar from './components/navbar';

const HomePage = lazy(() => import('./pages/homePage'));
const LoginPage = lazy(() => import('./pages/loginPage'));
const RegisterPage = lazy(() => import('./pages/registerPage'));
const TutorsPage = lazy(() => import('./pages/tutorsPage'));

const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: `${theme.palette.primary.main}`,
        height: '100vh'
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <>
            <Router>
                <Route path="/" component={Navbar} />
                <Suspense fallback={<LinearProgress />}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/tutors" component={TutorsPage} />
                </Suspense>
            </Router>
        </>
    );
};

export default App;
