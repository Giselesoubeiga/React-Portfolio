import React from "react";
import { Parallax, Background } from 'react-parallax';
import imgbg from "./../paralaxbg.jpg"

import profil from "./../profil.jpg"
import github from "./../git.PNG"
import linkedin from "./../link.PNG"
import gmail from "./../gmail2.png"
import vibe from "./../Vibe.PNG"
import passwordgenerator from "./../Passwordgenerator.PNG"
import daypalanner from "./../Workdayscheduler.PNG"
import burger from "./../burgerApp.PNG"
import archer from "./../archer.PNG"


  class Container extends React.Component {
      constructor (props){
          super(props)
          this.state={
            projects:[
             
              {id:2,name:"Vibe(Group Project)",img:vibe,githublink:"https://github.com/",link:"https://github.com/"},
              {id:3,name:"Password-generator",img:passwordgenerator,githublink:"https://github.com/",link:"https://github.com/"},
              {id:4,name:"Burger-App",img:burger,githublink:"https://github.com/",link:"https://github.com/"},
              {id:4,name:"Archer-Forums",img:archer,githublink:"https://github.com/",link:"https://github.com/"},
              {id:4,name:"Day-Planner",img:daypalanner,githublink:"https://github.com/",link:"https://github.com/"},
              {id:2,name:"Vibe(Group Project)",img:vibe,githublink:"https://github.com/",link:"https://github.com/"},
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
                        
                          <div className="col-lg-8">
                              <a href="#"><img className=" img-fluid github" src={github} /></a>
                          
                              <a href="#"><img className="img-fluid linkedin" src={linkedin} /></a>
                              <a href="#"><img className="img-fluid gmail" src={gmail} /></a>
                          </div>
                          <div>
                            
                          </div>
                          
                      </div>
                  </div>


                  
                  
                  <div className="portfolio" style={{background:`url(${imgbg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                   
                  
                      <div className="row ">
                        <div className="col-lg-12">
                            <h1 className="portfoliotTitle">PROJECTS</h1>
                        </div>
                          {this.state.projects.map((imagelement)=>{
                             return(<div className="col-lg-4">
                              <div className="projectCard">
                              <a href={imagelement.link}><img className="img-fluid projectImage" src={imagelement.img} /></a>
                          <h2 className="projectTitle"><a href={imagelement.link}>{imagelement.name}</a></h2>
                              </div>
                            
                             </div>)
                          })}
                          

                      </div>
                     
                  </div>
                  
                  <div className="contact container">
                  <div className="row justify-content-md-center"> 
                    <div className="col-lg-12">
                    <h1>CONTACT</h1>
                    </div>
                     <div className="col-lg-8 ">
                     <form>
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"/>
                     </div>
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="E-mail"/>
                     </div>
                     <div className="form-group">
                       <textarea className="form-control" placeholder="Message" rows="8">
                       </textarea>
                     </div>
                     </form>
                    </div>
                  </div>
                  </div>
              </div>
          )
      }
  }


  export default Container