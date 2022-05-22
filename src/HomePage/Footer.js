import { Fragment } from "react";
import BackTop from "./FooterContent.js/BackTop";
import CopyRight from "./FooterContent.js/CopyRight";
import FooterDescription from "./FooterContent.js/FooterDescription";
import FooterSection from "./FooterContent.js/FooterSection";
import {useSelector} from "react-redux";

const Footer = () => {

  const {quick, newProduct, support} = useSelector(state => state.siteData.data);
  const footerSection = [
    { name: "Quick Links", items: quick },
    { name: "New Products", items: newProduct },
    { name: "Support", items: support },
  ];

  return (
    <Fragment>
      <section className="footer_section pt-5 pb-2 mx-5" id="footer_section">
        <footer>
          <div className="container-fluid">
            <div className="row">
              {footerSection ? footerSection.map((item) => (
                <FooterSection name={item.name} items={item.items} key={item.name} />
              )) : <h3 className='w-100 text text-center mt-5'>No data found</h3>}
              <FooterDescription />
            </div>
          </div>
          <CopyRight />
        </footer>
      </section>
      <BackTop />
    </Fragment>
  );
};

export default Footer;
