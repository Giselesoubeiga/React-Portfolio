import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark  fixed-top d-flex justify-content-center">
          <div className="menu-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <AnchorLink className="nav-link" href="#home">
                    Home <span className="sr-only">(current)</span>
                  </AnchorLink>
                </li>

                <li className="nav-item active">
                  <AnchorLink className="nav-link" href="#aboutme">
                    About <span className="sr-only">(current)</span>
                  </AnchorLink>
                </li>

                <li className="nav-item active">
                  <AnchorLink className="nav-link" href="#project">
                    Project <span className="sr-only">(current)</span>
                  </AnchorLink>
                </li>

                <li className="nav-item active">
                  <AnchorLink className="nav-link" href="#contactme">
                    Contact <span className="sr-only">(current)</span>
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
