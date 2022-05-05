import { Box, Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    // useEffect(() => {
    //     if (!localStorage.getItem('skillMasteryToken')) {
    //         history.push('/login');
    //     }
    // });
    return (
        <>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '100px' }}>
                <Typography
                    style={{
                        background: 'linear-gradient( 95.84deg, #2b2d42 0%, #2b2d42 100% )',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        color: 'white',
                        fontWeight: 500,
                        boxShadow: '#b0b0b0 0px 10px 15px -3px, #b0b0b0 0px 4px 6px -2px'
                    }}>
                    Learn and Master skills the right way!
                </Typography>
                <Button color='primary' variant='contained' onClick={e => history.push('/')} style={{ marginTop: '40px' }}>Go back to home</Button>
            </Box>
        </>
    );
};

export default HomePage;
