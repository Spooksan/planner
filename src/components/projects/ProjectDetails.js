import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Aliquip exercitation qui esse id enim. Duis sunt dolor non mollit
            eiusmod. Irure Lorem consectetur deserunt irure laborum. Tempor
            dolore tempor in dolor. Incididunt voluptate nostrud reprehenderit
            laborum consectetur ipsum aute velit veniam. Ea amet labore in
            commodo esse cupidatat ipsum laborum quis et aliquip. Minim in
            proident sunt exercitation excepteur et magna cupidatat proident.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Spooksan</div>
          <div>2nd September, 2am </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
