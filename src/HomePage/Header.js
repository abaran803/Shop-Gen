import { Link, useLocation } from "react-router-dom";
import Navs from "./HeaderContent/Navs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Menu, MenuItem, Drawer, Divider, ListItemButton, ListItemText, List } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import ListItem from '@mui/material/ListItem';

const Header = (props) => {

    const history = useHistory();
    const location = useLocation();
    const { brandName, navItems } = useSelector(state => state.siteData.data)
    const storeId = useSelector(state => state.storeId.id);

    const handleLogin = () => {
        history.push(`/${storeId}/loginUser`);
    }
    const handleLogOut = () => {
        props.setUserLoginStatus(false);
    }

    const loginUserData = JSON.parse(localStorage.getItem('userData'));

    return (
        <section className="header_menu w-100" id="header_menu"
            style={{ position: "sticky", top: "0", left: "0", zIndex: "99999" }}>
            <div className="container-fluid px-0 shadow">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        {brandName}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {navItems ? navItems.map((item, index) => (
                                <li className={`nav-item ${location.pathname === item.address && "active"}`}
                                    key={index}>
                                    <Link className="nav-link" to={`/${storeId}${item.address}`}>
                                        {item.name}<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                            )) : <h3 className='w-100 text text-center'>No data found</h3>}
                        </ul>
                        {loginUserData && <h5 className="my-0 mr-2">Hello, {loginUserData.name}</h5>}
                        <button
                            className={`${loginUserData ? 'bg-danger' : 'bg-success'} text text-light rounded border-0 px-2 py-1`}
                            onClick={loginUserData ? handleLogOut : handleLogin}>{loginUserData ? 'Log Out' : 'Log In'}</button>
                    </div>
                </nav>
            </div>
        </section>
    );
};

const HeaderMaterial = (props) => {

    const history = useHistory();
    const location = useLocation();
    const { brandName, navItems } = useSelector(state => state.siteData.data)
    const storeId = useSelector(state => state.storeId.id);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogin = () => {
        history.push(`/${storeId}/loginUser`);
    }
    const handleLogOut = () => {
        props.setUserLoginStatus(false);
    }

    const loginUserData = JSON.parse(localStorage.getItem('userData'));

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {brandName}
            </Typography>
            <Divider />
            <List>
                {navItems ? navItems.map((item) => (
                    <Link className="nav-link text-dark" to={`/${storeId}${item.address}`}>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                )) : <div>Not Found</div>}
            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="sticky" sx={{bgcolor: {xs: 'primary', sm: 'background.paper'}}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1, display: { xs: '', sm: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" mr={3} sx={{color: {xs: 'white',sm: 'black'}}}>
                        {brandName}
                    </Typography>
                    {navItems && navItems.map((item, index) => (
                        <Typography key={index} variant='button' component="div" sx={{ cursor: 'pointer', display: { xs: 'none', sm: 'block' } }} component='div' mx={1}>
                            <Link className="nav-link" to={`/${storeId}${item.address}`}>
                                <Box sx={{color: {xs: 'white',sm: 'black'}}}>
                                {item.name}<span className="sr-only">(current)</span>
                                </Box>
                            </Link>
                        </Typography>
                    ))}
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Button variant="contained" color="success">Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
};

export default HeaderMaterial;
