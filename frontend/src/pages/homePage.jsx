import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography style={{ background: 'linear-gradient( 95.84deg, #5054cf 0%, #08bd80 100% )', padding: '10px 20px', borderRadius: '25px', color: 'white' }}>Learn and Master skills the right way!</Typography>
            </Box>
        </>
    );
};

export default HomePage;
