import React from "react";
import "./Projects.scss";
import { imageData } from "../../helper/imageData";
const Projects = () => {
  return (
    <div className="projects__items">
      <div className="projects__item">
        <img src="img/project-3.jpg" alt="My Project" />
      </div>

      <div className="projects__item">
        <img src="img/project-2.jpg" alt="My Project" />
      </div>
      <div className="projects__item">
        <img src="img/project-3.jpg" alt="My Project" />
      </div>
      <div className="projects__item">
        <img src="img/project-4.jpg" alt="My Project" />
      </div>

      <div className="projects__item">
        <img src="img/project-5.jpg" alt="My Project" />
      </div>
      <div className="projects__item">
        <img src="img/project-6.jpg" alt="My Project" />
      </div>
    </div>
  );
};

export default Projects;
