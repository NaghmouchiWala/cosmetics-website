import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home-cosmetics"}>{strings["home"]}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/home-cosmetics"}>
                {strings["home_group_one"]}
              </Link>
              <ul className="sub-menu">
               
              
             
      
              
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-cosmetics"}>
                    {strings["home_cosmetics"]}
                  </Link>
                </li>
               
              
              </ul>
            </li>
            
           
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["shop"]}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {strings["shop_layout"]}
              </Link>
             
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                {strings["product_details"]}
              </Link>
             
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["collection"]}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["pages"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                {strings["cart"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
                {strings["checkout"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                {strings["wishlist"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/compare"}>
                {strings["compare"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                {strings["my_account"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {strings["login_register"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {strings["about_us"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {strings["contact_us"]}
              </Link>
            </li>
            
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {strings["blog"]}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                {strings["blog_standard"]}
              </Link>
            </li>
           
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                {strings["blog_details_standard"]}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
