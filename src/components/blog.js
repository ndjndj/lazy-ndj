import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(
    (theme) => ({
        markdown: {
            ...theme.typography.body2,
            padding: theme.spacing(3, 0),
        },
    })
);

const Blog = () => {
    <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
            Title
        </Typography>
        <Divider />
        <p>posts</p>
        <p>posts</p>
        <p>posts</p>
        <p>posts</p>
    </Grid>
}

Main.PropTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
}

export default Blog;
