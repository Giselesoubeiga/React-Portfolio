/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Parallax, Background } from "react-parallax";
import imgbg from "./../water.jpg";

import profil from "./../profil.jpg";
import github from "./../git.PNG";
import linkedin from "./../link.PNG";
import gmail from "./../gmail2.png";
import vibe from "./../Vibe.PNG";
import passwordgenerator from "./../Passwordgenerator.PNG";
import daypalanner from "./../Workdayscheduler.PNG";
import burger from "./../burgerApp.PNG";
import archer from "./../archer.PNG";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 2,
          name: "Vibe(Group Project)",
          img: vibe,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        {
          id: 3,
          name: "Password-generator",
          img: passwordgenerator,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        {
          id: 4,
          name: "Burger-App",
          img: burger,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        {
          id: 4,
          name: "Archer-Forums",
          img: archer,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        {
          id: 4,
          name: "Day-Planner",
          img: daypalanner,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        {
          id: 2,
          name: "Vibe(Group Project)",
          img: vibe,
          githublink: "https://github.com/",
          link: "https://github.com/",
          description: `I hope to interact and work with other creative minds to grow my skills as
          a developer in this field.`,
        },
        //
      ],
    };
  }
  render() {
    return (
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
              <button className="btn btn-success btn-block">
                DOWNLOAD RESUME
              </button>
            </div>

            <div className="col-lg-8">
              <a href="#">
                <img className=" img-fluid github" src={github} />
              </a>

              <a href="#">
                <img className="img-fluid linkedin" src={linkedin} />
              </a>
              <a href="#">
                <img className="img-fluid gmail" src={gmail} />
              </a>
            </div>
            
          </div>
        </div>


        <Parallax 
         className="portfolio"
            blur={{ min: -100, max: 100 }}
            bgImage={imgbg}
            bgImageAlt="the dog"
            strength={500}
        >

        
          <div className="container ">
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
                  </div>
                </div>
              );
            })}
          </div>
          </div>
         
       

        </Parallax>

        <div className="contact container">
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
                        className="btn btn-success mb-2 hidden"
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
