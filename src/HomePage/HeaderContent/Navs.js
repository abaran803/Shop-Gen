import { Link } from "react-router-dom";

const Navs = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.item.address}>
        {props.item.name}
      </Link>
    </li>
  );
};

export default Navs;
