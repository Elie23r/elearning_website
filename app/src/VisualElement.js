import React from 'react';
import { Avatar, Box, Icon, Typography } from '@material-ui/core';

function VisualElement() {
    return (
        <Box my={6}>
            <Avatar>
                <Icon>school</Icon>
            </Avatar>
            <Typography variant="h6" component="h3" gutterBottom>
                100+ Courses
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ultrices justo.
            </Typography>
        </Box>
    );
    }
    
    export default VisualElement;