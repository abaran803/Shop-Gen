import { Link, useLocation } from "react-router-dom";
import Navs from "./HeaderContent/Navs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = (props) => {

    const history = useHistory();
    const location = useLocation();
    const { brandName, navItems } = useSelector(state => state.siteData.data)
    const ownerId = JSON.parse(localStorage.getItem('ownerData'))["_id"];

    const handleLogin = () => { history.push(`/${ownerId}/loginUser`); }
    const handleLogOut = () => { props.setUserLoginStatus(false); }

    const loginUserData = JSON.parse(localStorage.getItem('userData'));

    return (
        <section className="header_menu w-100" id="header_menu" style={{ position: "sticky", top: "0", left: "0", zIndex: "99999" }}>
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
                            {navItems ? navItems.map((item) => (
                                <li className={`nav-item ${location.pathname === item.address && "active"}`} key={item.name}>
                                    <Link className="nav-link" to={`/${ownerId}${item.address}`}>
                                        {item.name}<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                            )) : <h3 className='w-100 text text-center'>No data found</h3>}
                        </ul>
                        {loginUserData && <h5 className="my-0">Hello, {loginUserData.name}</h5>}
                        <button className={`${loginUserData ? 'bg-danger' : 'bg-success'} text text-light rounded border-0 px-2 py-1 mx-2`} onClick={loginUserData ? handleLogOut : handleLogin}>{loginUserData ? 'Log Out' : 'Log In'}</button>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;
