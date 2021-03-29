import React from 'react';
import { makeStyles, AppBar, Toolbar, List, ListItem, ListItemText, Container, IconButton, Typography } from '@material-ui/core';
import IconRay from '../assets/ray-32.svg';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles(
    {
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
        },
        navList: {
            display: `flex`,
            justifyContent: `flex-end`,
            paddingTop: `0px`,
            paddingBottom: `0px`,
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`,
            display: `flex`,
            alignItems: `center`,
        },
        toolbar: {
            minHeight: `40px`,
        }
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
            <Toolbar className={classes.toolbar}>
                <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <IconRay />
                        <Typography variant="h6" className={classes.title}>LazyRay</Typography>
                    </IconButton>

                    <List component="nav" aria-labelledby="main navigation" className={classes.navList}>
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
