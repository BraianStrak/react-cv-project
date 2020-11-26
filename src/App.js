import './App.css';
import React, { Component } from "react";
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
      </div>
    );
  }
}

export default App;

