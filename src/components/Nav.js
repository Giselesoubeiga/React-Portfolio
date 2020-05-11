import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark fixed-top">
          <div className="container">
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
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Project <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Contact <span className="sr-only">(current)</span>
                  </a>
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
