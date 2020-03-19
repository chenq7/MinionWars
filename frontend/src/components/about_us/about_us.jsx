import React from "react";
import "./about_us.css";
import anton from "./team_img/anton.jpg";
import greg from "./team_img/greg.jpg";
import john from "./team_img/john.jpg";
import lawrence from "./team_img/lawrence.jpeg";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-container">
        <h2 className="teamh2">Meet the Team</h2>
        <div className="team-members">
          <ul>
            <li>
              <label className="team-name">Anton Pinchuk</label>
              <img src={anton}></img>
              <p className="details">
                I am a software engineer based in New York City. I am skilled in
                developing web applications that utilize React.js, Redux, Ruby
                on Rails, PostgreSQL and Heroku. I also have a background in
                Biomedical Engineering.
              </p>
              <p className="personal">
                Learn more about me at{" "}
                <a
                  href="https://wayattearp.github.io/PortfolioSite.github.io/"
                  target="_blank"
                >
                  Portfolio Site
                </a>
              </p>
            </li>
            <li>
              <label className="team-name">John Jiang</label>
              <img src={john}></img>
              <p className="details">
                I am a software engineer based in New York City experienced with
                JavaScript, React, Redux, Ruby on Rails, MongoDB, Express.js,
                Node.js, and PostgreSQL, as well as an entrepreneur skilled in
                time management, efficiency, strategic thinking, and
                communication.I have an appetite for learning new skills and
                technologies.
              </p>
              <p className="personal">
                Learn more about me at{" "}
                <a href="https://jianjiang.me" target="_blank">
                  Portfolio Site
                </a>
              </p>
            </li>
            <li>
              <label className="team-name">Lawrence Nicastro</label>
              <img src={lawrence}></img>
              <p className="details">
                I'm a software engineer with a passion for technology and
                problem solving. I'm well versed in many different frameworks
                such as ReactJs and rails. During my spare time I love to travel
                and spend time with animals. I volunteer at a local animal
                program called Paws in Manhattan, the goal is to help dogs find
                a forever home.
              </p>
              <p className="personal">
                Learn more about me at{" "}
                <a href="https://www.lawrencenicastro.me" target="_blank">
                  Portfolio Site
                </a>
              </p>
            </li>
            <li>
              <label className="team-name">Qixiang Chen</label>
              <img src={greg}></img>
              <p className="details">
                I am a software engineer that is passionate about creating
                dynamic and visually appealing software. I have experience
                building engaging web applications in Ruby on Rails, JavaScript,
                and HTML/CSS. I love building projects from the ground up and
                seeing all the pieces come together to create user friendly
                applications. I like to use programming as an outlet to let my
                creative ideas come to fruition.
              </p>
              <p className="personal">
                Learn more about me at{" "}
                <a href="https://chenq7.github.io" target="_blank">
                  Portfolio Site
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutUs;