import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import localStorage from "localStorage"

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/logo-emoji.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.isAuthentication.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  isAuthentication() {
    if (localStorage.getItem("token") === null) {
      return false;
    } else {
      return true;
    }
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
                if (this.isAuthentication()) {
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
                if (this.isAuthentication()) {
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
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
