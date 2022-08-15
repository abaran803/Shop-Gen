import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, ListItem, Switch, Divider } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AbcIcon from '@mui/icons-material/Abc';
import LuggageIcon from '@mui/icons-material/Luggage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import ArticleIcon from '@mui/icons-material/Article';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

export default function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [checked, setChecked] = React.useState(['wifi']);
    const { url } = useRouteMatch();

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box flex={1} sx={{bgcolor: 'background.paper', display: {xs: 'none', sm: 'inherit'}}}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" sx={{ fontSize: '1.4rem', bgcolor: 'background.paper', marginTop: '0.5rem' }} id="nested-list-subheader">
                        Shop Generator
                    </ListSubheader>
                }
            >
                <Divider sx={{ marginTop: '0.5rem', marginBottom: '0.3rem' }} />
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/dashboard`}>
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <DashboardCustomizeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/brand`}>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <AbcIcon />
                        </ListItemIcon>
                        <ListItemText primary="Brand Name" />
                    </ListItemButton>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/products`}>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <LuggageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItemButton>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/categories`}>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <DynamicFeedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categories" />
                    </ListItemButton>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${url}/static`}>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Static Pages" />
                    </ListItemButton>
                </NavLink>
                <ListItem>
                    <ListItemIcon>
                        <Brightness6Icon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Dark Mode" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
            </List>
        </Box>
    );
}
