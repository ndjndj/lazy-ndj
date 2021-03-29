import React from 'react';
import { makeStyles, AppBar, Toolbar, List, ListItem, ListItemText, Container, IconButton, Typography } from '@material-ui/core';
import IconRay from '../assets/ray-48.svg';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles(
    {
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`,
        },
    }
);

const navLinks = [
    {title: 'blog', path: '/blog'},
    {title: 'products', path: '/products'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
];

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <IconRay />
                        <Typography variant="h5" className={classes.title}>LazyRay</Typography>
                    </IconButton>

                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(
                            ({title, path}) => (
                                <a href={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </a>
                            )
                        )}
                    </List>
                </Container>

            </Toolbar>
        </AppBar>
    );
}

export default Header;
