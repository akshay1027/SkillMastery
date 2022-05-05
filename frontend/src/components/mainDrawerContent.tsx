import {
    Box, Divider, List, ListItem, ListItemIcon, ListItemText,
    createStyles, makeStyles
} from '@material-ui/core';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FlareIcon from '@material-ui/icons/Flare';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import DescriptionIcon from '@material-ui/icons/Description';
// import PagesIcon from '@material-ui/icons/Pages';

const useStyles = makeStyles((theme) => {
    return createStyles({
        toolbar: theme.mixins.toolbar,
        navLink: {
            display: 'flex',
            color: `${theme.palette.primary.main}`,
            borderLeft: '4px solid rgba(0, 0, 0, 0.87)',
            textDecoration: 'none'
        },
        activeLink: {
            color: `${theme.palette.secondary.main}`,
            backgroundColor: `${theme.palette.secondary.main}15`,
            fontWeight: 500,
            borderLeft: `4px solid ${theme.palette.secondary.main}`
        },
        activeIcon: {
            color: `${theme.palette.secondary.main}`
        },
        icon: {
            color: `${theme.palette.primary.main}`
        }
    });
}
);

const MainDrawerContent = ({ isOpen, setIsOpen }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <Box>
            <div className={classes.toolbar} />
            <Divider />
            <List component='div'>
                <NavLink to="/app/profile" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/app/profile') ? classes.activeIcon : classes.icon}>
                            <HowToRegIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" style={{ fontWeight: 800 }} />
                    </ListItem>
                </NavLink>
                <NavLink to="/app/tutors" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/app/tutors') ? classes.activeIcon : classes.icon}>
                            <FlareIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tutors" style={{ fontWeight: 800 }} />
                    </ListItem>
                </NavLink>
                <NavLink to="/" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/') ? classes.activeIcon : classes.icon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" style={{ fontWeight: 800 }} />
                    </ListItem>
                </NavLink>
                <NavLink to="/signin" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/signin') ? classes.activeIcon : classes.icon}>
                            <VpnKeyIcon />
                        </ListItemIcon>
                        <ListItemText primary="SignIn" style={{ fontWeight: 800 }} />
                    </ListItem>
                </NavLink>
                <NavLink to="/signup" className={classes.navLink} activeClassName={classes.activeLink}>
                    <ListItem button onClick={e => setIsOpen(!isOpen)}>
                        <ListItemIcon className={pathname.startsWith('/signup') ? classes.activeIcon : classes.icon}>
                            <LockOpenIcon />
                        </ListItemIcon>
                        <ListItemText primary="Signup" style={{ fontWeight: 800 }} />
                    </ListItem>
                </NavLink>
            </List>
        </Box>
    );
};

export default MainDrawerContent;
