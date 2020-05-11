import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="topHeader">
          <div className="filter"></div>
          <div className="titleContainer">
            <h1 className="topTitle">Gisele Soubeiga,</h1>
            <h2 className="smalTitle"> Front-end / Full stack Web Developer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
