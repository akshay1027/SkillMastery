import React, { useEffect, Suspense, lazy } from 'react';
// import axios from 'axios';
import {
    Box, createStyles, makeStyles, Typography, Button, LinearProgress
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesContext } from '@material-ui/styles';

// // Set jwt toke to header
// import setAuthHeader from './utils/authHeader';

const HomePage = lazy(() => import('./pages/homePage'));
// const SignUpScreen = lazy(() => import('./screens/signUpScreen'));
// const SignInScreen = lazy(() => import('./screens/signInscreen'));
// const AllBoardsScreen = lazy(() => import('./screens/allBoardsScreen'));
// const IndividualBoard = lazy(() => import('./screens/individualBoardScreen'));

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
                <Switch>
                    <Suspense fallback={<LinearProgress />}>
                        <Route path="/" component={HomePage} />
                    </Suspense>
                </Switch>
            </Router>
        </>
    );
};

export default App;
