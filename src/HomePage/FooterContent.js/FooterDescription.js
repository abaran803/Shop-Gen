import { Link } from "react-router-dom";
import classes from './FooterDescription.module.css';

const FooterDescription = () => {
  return (
    <div className={`${classes["footer-description"]} col-md-3 col-6 pl-5 pl-small-15`}>
      <div className="footer_title">
        <Link to="/home">
          <i className="fas fa-eye fa-5x"></i>
        </Link>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione cum
        ullam officiis asperiores quae provident et, repellendus explicabo
        voluptates animi magni eligendi repudiandae architecto mollitia.
      </div>
    </div>
  );
};

export default FooterDescription;
