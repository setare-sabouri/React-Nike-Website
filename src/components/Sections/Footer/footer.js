import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-container">
        <div>
          <h3 className="footer-header-font">MENU</h3>
          <ul className="footer-paragraph-font">
            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>STUDENT DISCOUNTS</li>
            <li>SEND US FEEDBACK</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-header-font">HELPDESK</h3>
          <ul className="footer-paragraph-font">
            <li>ORDER STATUS</li>
            <li>DELIVERY</li>
            <li>RETURNS</li>
            <li>PAYMENT OPTIONS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-header-font">ABOUT NIKE</h3>
          <ul className="footer-paragraph-font">
            <li>NEWS</li>
            <li>CAREERS</li>
            <li>INVESTORS</li>
            <li>SUSTAINABILITY</li>
          </ul>
        </div>
      </div>
      <div className="contact-info-container">
        <p className="footer-paragraph-font">
          {" "}
          <b>Primary Address </b> <br />
          One Bowerman Drive <br />
          Beaverton, OR 97005-6453 <br />
          USA <br />
          <br />
          <br />
          <br /> © 2022 Nike, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
