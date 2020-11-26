import React, {Component} from "react";
import RenderGeneralInformation from "./RenderGeneralInformation";

class GeneralInformation extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            phone: "",
            isSubmitted: false
        }
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value,
        });
    }

    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    handlePhoneChange = (e) =>{
        this.setState({
            phone: e.target.value
        });
    }

    onSubmit = (e) =>{
        e.preventDefault(); 
        this.setState({
            isSubmitted: true
        });
    }

    render() {
        return(
            <div className = "col">
                <form id="GeneralInformationForm" onSubmit={this.onSubmit}>
                    <input id="nameInput" type="text" onChange={this.handleNameChange} placeholder="Name" className="d-block"/>
                    <input id="emailInput" type="text" onChange={this.handleEmailChange} placeholder="Email" className="d-block"/>
                    <input id="phoneInput" type="text" onChange={this.handlePhoneChange} placeholder="Phone Number" className="d-block"/>
                    <input type = "submit" />
                </form>

                {this.state.isSubmitted && <RenderGeneralInformation name={this.state.name} email={this.state.email} phone={this.state.phone}/> }
            </div>
        );
    }
}

export default GeneralInformation;
