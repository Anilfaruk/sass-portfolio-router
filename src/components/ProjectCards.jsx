import React from "react";
import { imageData } from "../helper/imageData";
const ProjectCards = () => {
  return (
    <>
      {imageData?.map((item, index) => {
        return (
          <div key={index} className="projects__item">
            <img src={item.image} alt="My Project" />
          </div>
        );
      })}
    </>
  );
};

export default ProjectCards;
