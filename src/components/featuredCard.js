import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(
    (theme) => ({
        mainFeaturedPost: {
            position: `relative`,
            backgroundColor: theme.pallete.gray[800],
            color: theme.pallete.common.white,
            marginBottom: theme.spacing(4),
            backgroundImage: `url(https://source.unsplash.com/random)`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
        },
        overlay: {
            position: `absolute`,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: `rgba(0,0,0,.3)`,
        },
        mainFeaturedPostContent: {
            position: 'relative',
            padding: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(6),
              paddingRight: 0,
            },
          },
    })
);
