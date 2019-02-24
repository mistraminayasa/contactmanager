import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/">
                {" "}
                <i className="fas fa-home" /> Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add">
                {" "}
                <i className="fas fa-plus" /> Add{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                {" "}
                <i className="fas fa-question" /> About{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
