/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Parallax, } from "react-parallax";
import imgbg from "./../water.jpg";

import profil from "./../profil.jpg";
import github from "./../git.PNG";
import linkedin from "./../link.PNG";
import vibe from "./../Vibe.PNG";
import daypalanner from "./../Workdayscheduler.PNG";
import burger from "./../burgerApp.PNG";
import archer from "./../archer.PNG";
import employee from "./../employeeDirectory.PNG";
import password from "./../Passwordgenerator.PNG"
import Pdf from "./../GiseleSoubeigaResume.pdf"

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 2,
          name: "Day-Planner",
          img: daypalanner,
          githublink: "https://github.com/Giselesoubeiga/Day-Planner",
          browserlink: "https://giselesoubeiga.github.io/Day-Planner/",
          description: `Javascript - Momentjs - jQuery -  HTML -  CSS,
          Bootstrap.`,
        },
        {
          id: 3,
          name: "Burger-App",
          img:burger,
          githublink: "https://github.com/Giselesoubeiga/Eat-Da-Burger",
          browserlink: "https://afternoon-savannah-16664.herokuapp.com/",
          description: `Bootstrap - Express.js - Node.js - Sequelize - Handlebars.js - MySQL.`,
        },
        {
          id: 4,
          name: "Employee-Directory",
          img: employee,
          githublink: "https://github.com/Giselesoubeiga/Employee-Directory",
          browserlink: "https://giselesoubeiga.github.io/Employee-Directory/",
          description: `React.js - JavaScript - CSS - HTML - Bootstrap - Moment.js - Heroku.`,
        },
        {
          id: 4,
          name: " Vibe(Group Project)",
          img: vibe,
          githublink: "https://github.com/Giselesoubeiga/MoodProject",
          browserlink: "https://drewhowell.github.io/MoodProject/",
          description: `Javascript - HTML - CSS -
          Boostrap -  API integrations: iTunes-Google Maps-Edamam - Granim.js.`,
        },
        {
          id: 4,
          name: "Archer-Forums(Group Project)",
          img: archer,
          githublink: "https://github.com/Giselesoubeiga/project-2",
          browserlink: "https://fast-bayou-13599.herokuapp.com/",
          description: `HTML - CSS - JavaScript - Bootstrap - Handlebars - Nodejs - Express - Sequelize - Passport - MySQL - Heroku.`,
        },
        {
          id: 2,
          name: "Password-Generator",
          img: password,
          githublink: "https://github.com/Giselesoubeiga/Password-Generator",
          browserlink: "https://giselesoubeiga.github.io/Password-Generator",
          description: `Javascript - HTML - CSS,
          Boostrap -  API integrations: iTunes-Google Maps-Edamam-and Granim.js.`,
        },
        //
      ],
    };
  }
  render() {
    return (
      <div className="sectionAbout" id="aboutme">
        
        <h1 className="aboutTitle">About</h1>

        <div className="about container">
          <h1 className="aboutTItle"></h1>
          <div className="row">
            <div className="col-lg-3">
              <img className="img-fluid" src={profil} />
            </div>
            <div className="col-lg-9">
              <h2 className="textTitle">Web developer</h2>
              <p>
                I'm originally from Burkina Faso, a country located in the west
                coast of Africa, but I grew up and attended most of my schools
                in the neighboring country in Togo, which is my mother homeland.
                My passion for programming and developing grew rapidly as I
                moved to the United States. I enrolled at Georgia Tech coding
                bootcamp program as a Full Stack Developer student to fulfill my
                goals of growing and learning in a very dynamic environment
                where I can exchange and work with my peers to acquire a
                valuable knowledge throughout my journey.
              </p>

              <p>
                As a bilingual (French and English speaking) person, I hope to
                interact and work with other creative minds to grow my skills as
                a developer in this field.
              </p>
            </div>
            <div className="col-lg-3">

              <a href= {Pdf} className="btn btn-primary btn-block">
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="col-lg-8">
              <a href="https://github.com/Giselesoubeiga">
                <img className=" img-fluid github" src={github} />
              </a>

              <a href="https://www.linkedin.com/in/gisele-soubeiga-87b064196/">
                <img className="img-fluid linkedin" src={linkedin} />
              </a>
             
            </div>
            
          </div>
        </div>


        <Parallax id="project"
         className="portfolio"
            blur={{ min: -100, max: 100 }}
            bgImage={imgbg}
            bgImageAlt="the dog"
            strength={500}
        >

        
          <div className="container" id="project">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className="portfoliotTitle">PORTFOLIO</h1>
              <h5 className="portfoliotTitle2">Check Out My Latest Projects</h5>
            </div>
            {this.state.projects.map((project) => {
              return (
                <div className="col-lg-4">
                  <div className="projectCard">
                    <a href={project.link}>
                      <img
                        className="img-fluid projectImage"
                        src={project.img}
                      />
                    </a>
                    <h2 className="projectTitle">
                      <a href={project.link}>{project.name}</a>
                    </h2>
                    <div className="projectDescription">
                      {project.description}
                    </div>
                    <div className="linkIcone">
                    <a href={project.githublink} className="btn btn-primary mr-2" target="_blank"><i
                className="fab fa-github"></i></a>
            <a href={project.browserlink} className="btn btn-primary" target="_blank"><i className="fab fa-chrome"></i></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
         
       

        </Parallax>

        <div className="contact container" id="contactme">
          <div className="row justify-content-md-center">
            <div className="col-lg-12">
              <h1>CONTACT</h1>
            </div>
            <div className="col-lg-8 ">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="8"
                  ></textarea>
                  <div className="row text-md-left text-sm-center">
                    <div className="col-12 col-sm-12">
                      <button
                        type="submit"
                        className="btn btn-primary mb-2 hidden"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
