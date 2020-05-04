import React from "react";
import profil from "./../profil.jpg"
import github from "./../git.PNG"
import linkedin from "./../link.PNG"
import gmail from "./../gmail2.png"
import projectImg from "./../projects.jpg"


  class Container extends React.Component {
      constructor (props){
          super(props)
          this.state={
            projects:[
              {id:1,name:"password generator",img:projectImg,githublink:"https://github.com/",link:"https://github.com/"},
              {id:2,name:"password generator",img:projectImg,githublink:"https://github.com/",link:"https://github.com/"},
              {id:3,name:"password generator",img:projectImg,githublink:"https://github.com/",link:"https://github.com/"},
              {id:4,name:"password generator",img:projectImg,githublink:"https://github.com/",link:"https://github.com/"},
            //   
            ]
          }
      }
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
                         <button className="btn btn-success btn-block">DOWNLOAD RESUME</button>
                         
                          </div>
                        
                          <div className="col-lg-9">
                              <a href="#"><img className=" img-fluid github" src={github} /></a>
                          
                              <a href="#"><img className="img-fluid linkedin" src={linkedin} /></a>
                              <a href="#"><img className="img-fluid gmail" src={gmail} /></a>
                          </div>
                          <div>
                            
                          </div>
                          
                      </div>
                  </div>
                  <div className="portfolio">
                      <div className="row">
                          {this.state.projects.map((imagelement)=>{
                             return(<div className="col-lg-3">
                              <div className="projectCard">
                              <a href={imagelement.link}><img className="img-fluid projectImage" src={imagelement.img} /></a>
                          <h2><a href={imagelement.link}>{imagelement.name}</a></h2>
                              </div>
                            
                             </div>)
                          })}
                          

                      </div>
                  </div>
                  
                  <div className="contact"></div>
              </div>
          )
      }
  }


  export default Container