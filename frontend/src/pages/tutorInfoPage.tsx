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
                        color: 'white',
                        fontWeight: 500
                    }}>
                    Tutors info displayed here
                </Typography>
                <Button color='primary' variant='contained' onClick={e => history.push('/')} style={{ marginTop: '40px' }}>Go back to home</Button>
            </Box>
        </>
    );
};

export default HomePage;
