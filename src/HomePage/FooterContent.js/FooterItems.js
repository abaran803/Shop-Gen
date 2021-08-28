import { Link } from "react-router-dom";

const FooterItems = (props) => {
  return (
    <li>
      <Link to={props.item.address}>{props.item.name}</Link>
    </li>
  );
};

export default FooterItems;
