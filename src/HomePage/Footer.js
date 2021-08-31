import { Fragment } from "react";
import BackTop from "./FooterContent.js/BackTop";
import CopyRight from "./FooterContent.js/CopyRight";
import FooterDescription from "./FooterContent.js/FooterDescription";
import FooterSection from "./FooterContent.js/FooterSection";

const Footer = () => {
  const Quick = [
    { name: "About", address: "/about" },
    { name: "Offers & Discounts", address: "/" },
    { name: "Get Coupon", address: "/" },
    { name: "Contact Us", address: "/contact" },
  ];
  const New = [
    { name: "Woman Cloth", address: "" },
    { name: "Fashion Accessories", address: "/" },
    { name: "Get Coupon", address: "/" },
    { name: "Rubber made Toys", address: "/" },
  ];
  const Support = [
    { name: "Frequently Asked Questions", address: "/" },
    { name: "Terms & Conditions", address: "/" },
    { name: "Privacy Policy", address: "/" },
    { name: "Report a Payment Issue", address: "/" },
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
