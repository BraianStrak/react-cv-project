import './App.css';
import React, { Component } from "react";
import WorkExperience from "./components/WorkExperience";
import GeneralInformation from "./components/GeneralInformation";


class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <GeneralInformation />
        </div>
        <div className="row">

        </div>
        <div className="row">
          <WorkExperience />
        </div>
      </div>
    );
  }
}

export default App;

