import { Box, Button, Container, TextField, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../config/axiosConfig';
// import { useFormik } from 'formik';

import Auth from '../assests/auth.svg';

const SignInScreen = () => {
    const history = useHistory();
    const [email, setEmail] = useState('') as any;
    const [emailError, setEmailError] = useState('') as any;
    const [password, setPassword] = useState('') as any;
    const [passwordError, setPasswordError] = useState('') as any;
    const [username, setUsername] = useState('') as any;
    const [usernameError, setUsernameError] = useState('') as any;

    useEffect(() => {
        if (localStorage.getItem('skillMasteryToken')) {
            history.push('/tutors');
        }
    });

    const handleSubmit = async (e: any) => {
        // e.preventDefault();
        e.preventDefault();
        let validateInput = true as boolean;
        if (email?.length <= 4) {
            validateInput = false;
            setEmailError('Please enter more than 5 characters');
            // return;
        }
        if (password?.length <= 4) {
            validateInput = false;
            setPasswordError('Please enter more than 5 characters');
            // return;
        }
        if (username?.trim().match(/\s/g)) {
            validateInput = false;
            setUsernameError('Please enter without space');
        }
        if (!validateInput) {
            return;
        }

        const res = await api.post(
            '/api/auth/signin',
            {
                email: email.trim(),
                password: password.trim(),
                username: username.trim()
            }
        );
        localStorage.setItem('trelloToken', res.data.token);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('userId', res.data.id);
    };

    const handleChangeEmail = (e: any) => {
        setEmailError('');
        setEmail(e.target.value);
        // console.log(email);
    };

    const handleChangePassword = (e: any) => {
        setPasswordError('');
        setPassword(e.target.value);
    };

    const handleChangeUsername = (e: any) => {
        setUsernameError('');
        setUsername(e.target.value);
    };

    return (
        <Container maxWidth="sm" disableGutters>
            <Box mb={3} display="flex" flexDirection="column" p={{ xs: 0, sm: 2, md: 3 }} >
                {/* <Box display='flex' flexDirection="column" alignItems='center'>
                    <img src={Auth} alt="" style={{ maxWidth: '85%' }} />
                </Box> */}
                <Typography variant='h5' style={{ marginTop: '16px', alignSelf: 'center', fontWeight: 560 }}> Sign Up </Typography>
                <Box mt={2} px={4}>
                    {
                        <form id='businessUserRegistrationForm' onSubmit={e => handleSubmit(e)}>
                            <Box display="flex" flexDirection="column">
                                <TextField
                                    required
                                    name="email"
                                    label="Email Id"
                                    onChange={e => handleChangeEmail(e)}
                                    value={email}
                                    error={!!emailError}
                                    helperText={emailError}
                                    variant="outlined"
                                    style={{ marginBottom: '24px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}
                                />
                                <TextField
                                    required
                                    name="username"
                                    label="Username"
                                    onChange={e => handleChangeUsername(e)}
                                    value={username}
                                    error={!!usernameError}
                                    helperText={usernameError}
                                    variant="outlined"
                                    style={{ marginBottom: '24px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}
                                />
                                <TextField
                                    required
                                    name="password"
                                    label="Password"
                                    onChange={e => handleChangePassword(e)}
                                    value={password}
                                    error={!!passwordError}
                                    helperText={passwordError}
                                    variant="outlined"
                                    style={{ marginBottom: '24px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}
                                />
                                <Button type='submit' size="large" variant="contained" color="primary"
                                    style={{ width: '100%', padding: '12px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }} >
                                    Sign Up
                                </Button>
                            </Box>
                        </form>
                    }
                </Box>
                <span style={{ marginTop: '16px', alignSelf: 'center', fontSize: '16px' }}>
                    Dont have an account ? <Link to="/login" style={{ color: '#7F6EFC', fontSize: '18px', fontWeight: 600 }}> SignIn </Link>
                </span>
            </Box>
        </Container>
    );
};

export default SignInScreen;
