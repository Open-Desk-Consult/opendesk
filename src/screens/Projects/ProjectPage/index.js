import React from 'react';
import Image from '../../../assets/images/project-1.jpg';

export default () => {
  return (
    <>
      <div className="main">
        <div className="header">PROJECTS</div>
        <div className="content">
          <div className="intro">Here's some work we're proud to be part of:</div>
          <div className="intro-project">
            A fleet management system to allow efficient monitoring and traffic data analysis
          </div>
          <div className="class-project">DESIGN AND ENGINEERING</div>
        </div>
      </div>
      <div className="project-main">
        <img className="project-img" src={Image} />
        <div className="nav-counter">
          <div>01</div>
          <div>/</div>
          <div>04</div>
        </div>
      </div>
    </>
  );
};
