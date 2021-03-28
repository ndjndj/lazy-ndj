import React from 'react';
import { AppBar, Toolbar, List, ListItem, ListItemText } from '@material-ui/core';

const navLinks = [
    {title: 'blog', path: '/blog'},
    {title: 'products', path: '/products'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
];

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <List component="nav" aria-labelledby="main navigation">
                    {navLinks.map(
                        ({title, path}) => (
                            <a href={path} key={title}>
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
