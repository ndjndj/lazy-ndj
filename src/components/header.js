import React from 'react';
import { makeStyles, AppBar, Toolbar, List, ListItem, ListItemText } from '@material-ui/core';
import IconRay from '../assets/ray-32.svg';

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
            <Toolbar>
                <strong>
                    <div>LazyRay</div>
                </strong>
                <IconRay />
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
            </Toolbar>
        </AppBar>
    );
}

export default Header;
