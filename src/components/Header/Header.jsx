import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
  // InputGroup,
  // InputGroupText,
  // InputGroupAddon,
  // Input
} from "reactstrap";

import dashboardRoutes from "routes/dashboard.jsx";

import { isAuthentication } from "../../actions/authentication";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }

  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }

  signOut(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.reload();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.refs.sidebarToggle.classList.toggle("toggled");
    }
  }

  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-fixed fixed-top"
            : "navbar-fixed fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            {/* <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}
            {isAuthentication() ? (
              <Nav navbar>
                <NavItem>
                  <Link to="/config" className="nav-link btn-rotate">
                    <i className="nc-icon nc-settings" />
                    <p>
                      <span className="d-lg-none d-md-block">Account</span>
                    </p>
                  </Link>
                </NavItem>
                <Dropdown
                  nav
                  isOpen={this.state.dropdownOpen}
                  toggle={e => this.dropdownToggle(e)}
                >
                  <DropdownToggle caret nav>
                    <i className="nc-icon nc-bell-55" />
                    <p>
                      <span className="d-lg-none d-md-block">Some Actions</span>
                    </p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="a">Action</DropdownItem>
                    <DropdownItem tag="a">Another Action</DropdownItem>
                    <DropdownItem tag="a">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <Link
                    to="/"
                    onClick={this.signOut}
                    className="nav-link btn-rotate"
                  >
                    <i className="nc-icon nc-button-power" />
                    <p>
                      <span className="d-lg-none d-md-block">Sign Out</span>
                    </p>
                  </Link>
                </NavItem>
              </Nav>
            ) : null}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
