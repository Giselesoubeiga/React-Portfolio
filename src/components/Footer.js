import React from "react";
import github from "./../git.PNG";
import linkedin from "./../link.PNG";


class Footer extends React.Component {
  render() {
    return (

      <div className="footeritem">
         <p className="pItem mt-3">2020 © Copyright Gisele Soubeiga. All Rights Reserved</p>
        <div className="footerIcone">
       
              <a href="https://github.com/Giselesoubeiga">
                <img className=" img-fluid github" src={github} />
              </a>

              <a href="https://www.linkedin.com/in/gisele-soubeiga-87b064196/">
                <img className="img-fluid linkedin" src={linkedin} />
              </a>
            </div>
      </div>
    );
  }
}

export default Footer;
