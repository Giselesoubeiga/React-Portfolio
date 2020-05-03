import React from "react";
import profil from "./../profil.jpg"
import github from "./../git.PNG"
import linkedin from "./../link.PNG"

  class Container extends React.Component {
      render(){
          return(
              <div className="sectionAbout">
                  <h1 className="aboutTitle">About</h1>
                  
                  <div className="about container">
                      <h1 className="aboutTItle"></h1>
                      <div className="row">
                          <div className="col-lg-3">
                          <img className="img-fluid" src={profil} />
                         
                          </div>
                          <div className="col-lg-9">
                              <h2 className="textTitle">Web developer</h2>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. nisipellentesque eu, pretium quis, sem. Nulla consequat massa quis enim nisi</p>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                          </div>
                          <div className="col-lg-3">
                         <button className="btn btn-success btn-block">Dowload my resume</button>
                         
                          </div>
                          <div className="col-lg-9">
                          <img className="img-fluid github" src={github} />
                           <img className="img-fluid linkedin" src={linkedin} />
                          </div>
                          <div>
                            
                          </div>
                          
                      </div>
                  </div>
                  <div className="portfolio"></div>
                  <div className="contact"></div>
              </div>
          )
      }
  }


  export default Container