import { Link } from "react-router-dom";
import classes from './FooterDescription.module.css';
import {useSelector} from "react-redux";

const FooterDescription = () => {

  const storeId = useSelector(state => state.storeId.id);

  return (
    <div className={`${classes["footer-description"]} col-md-3 col-6 pl-5 pl-small-15 mt-3`}>
      <div className="footer_title">
        {/* <Link to={`/${storeId}/home`}> */}
          {/* <i className="fas fa-eye fa-5x"></i> */}
          <h3>Connect to Us</h3>
        {/* </Link> */}
      </div>
      <div>
        <a href="https://facebook.com/abaran13" target="_blank"><i className="fab fa-facebook fa-2x mr-3 mt-1"></i></a>
        <a href="https://twitter.com/abaran803" target="_blank"><i className="fab fa-twitter-square fa-2x mr-3 mt-1"></i></a>
        <a href="https://linkedIn.com/in/ayush-baranwal" target="_blank"><i className="fab fa-linkedin fa-2x mr-3 mt-1"></i></a>
      </div>
    </div>
  );
};

export default FooterDescription;
