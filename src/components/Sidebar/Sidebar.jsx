import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/logo-emoji.png";

import { isAuthentication } from "../../actions/authentication";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.signOut.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  signOut(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="/" className="simple-text logo-normal">
            MY ROOM
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              if (prop.isAuth) {
                if (isAuthentication()) {
                  if (prop.name === "Login") return null;
                  return (
                    <li
                      className={
                        this.activeRoute(prop.path) +
                        (prop.pro ? " active-pro" : "")
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                } else {
                  return null;
                }
              } else {
                if (isAuthentication()) {
                  if (prop.name === "Login") return null;
                }
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              }
            })}
            {isAuthentication() ? (
              <li key="signout">
                <NavLink
                  to="/"
                  onClick={this.signOut}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="nc-icon nc-button-power" />
                  <p>Sign Out</p>
                </NavLink>
              </li>
            ) : null}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
