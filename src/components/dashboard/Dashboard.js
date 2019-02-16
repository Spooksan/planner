import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard conatiner">
        <div className="row col s12">
          <div classname=" col s6">
            <ProjectList projects={projects} />
          </div>
          <div className=" col s6">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};
export default connect(mapStateToProps)(Dashboard);
