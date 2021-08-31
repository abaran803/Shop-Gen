import { Fragment } from "react";
import BackTop from "./FooterContent.js/BackTop";
import CopyRight from "./FooterContent.js/CopyRight";
import FooterDescription from "./FooterContent.js/FooterDescription";
import FooterSection from "./FooterContent.js/FooterSection";

const Footer = () => {
  const Quick = [
    { name: "About", address: "/about" },
    { name: "Offers & Discounts", address: "javascript:;" },
    { name: "Get Coupon", address: "javascript:;" },
    { name: "Contact Us", address: "/contact" },
  ];
  const New = [
    { name: "Woman Cloth", address: "" },
    { name: "Fashion Accessories", address: "javascript:;" },
    { name: "Get Coupon", address: "javascript:;" },
    { name: "Rubber made Toys", address: "javascript:;" },
  ];
  const Support = [
    { name: "Frequently Asked Questions", address: "javascript:;" },
    { name: "Terms & Conditions", address: "javascript:;" },
    { name: "Privacy Policy", address: "javascript:;" },
    { name: "Report a Payment Issue", address: "javascript:;" },
  ];
  const footerSection = [
    { name: "Quick Links", items: Quick },
    { name: "New Products", items: New },
    { name: "Support", items: Support },
  ];
  return (
    <Fragment>
      <section className="footer_section pt-5 pb-2" id="footer_section">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <FooterDescription />
              {footerSection.map((item) => (
                <FooterSection name={item.name} items={item.items} key={item.name} />
              ))}
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
