import React, { useState } from 'react';
import {
    AppBar, IconButton, Toolbar, Typography,
    createStyles, makeStyles,
    Box, Drawer, Tooltip
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
// import Brightness5Icon from '@material-ui/icons/Brightness5';
// import Brightness4Icon from '@material-ui/icons/Brightness4';

import './navbar.css';

export const mainDrawerWidth = 300;

const useStyles = makeStyles((theme) =>
    createStyles({
        navbar: {
            height: '10px',
            [theme.breakpoints.dowm('md')]: {
                height: '20px'
            }
        }
    })
);

const Navbar = ({ isBoard }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    // const userName = localStorage.getItem('name') ? localStorage.getItem('name') : 'user';

    return (
        <>
            <AppBar position="sticky" style={{}}>
                <Toolbar>
                    <Box display="flex" alignItems='center' justifyContent='space-between' className={classes.navbar}>
                        <Typography style={{ fontWeight: 700, fontSize: '22px', marginRight: '5px' }} >
                            Hello
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
