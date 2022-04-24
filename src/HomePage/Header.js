import {Link, useLocation} from "react-router-dom";
import Navs from "./HeaderContent/Navs";
import {useSelector} from "react-redux";

const Header = () => {

    const location = useLocation();
    const {brandName, navItems} = useSelector(state => state.siteData.data)

    return (
        <section className="header_menu" id="header_menu">
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
                                    <Link className="nav-link" to={item.address}>
                                        {item.name}<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                            )) : <h3 className='w-100 text text-center'>No data found</h3>}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;
