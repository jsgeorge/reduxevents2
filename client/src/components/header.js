import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

class Header extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          {!isAuthenticated ? (
            <Link to="/" className="navbar-brand">
              ReactEvents
            </Link>
          ) : (
            <Link to="/events" className="navbar-brand">
              ReactEvents
            </Link>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-right">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {!isAuthenticated ? (
                <span>
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link ">
                      Sign Up
                    </Link>
                  </li>
                </span>
              ) : (
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={this.logout.bind(this)}
                    className="nav-link "
                  >
                    Sign Out
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// Header.propTypes = {
//   auth: React.PropTypes.object.isRequired,
//   logout: React.PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(Header);
