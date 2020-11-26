import React from "react";

const RenderGeneralInformation = (props) => {

    return (
        <div>
            <p className="d-block">{props.name}</p>
            <p className="d-block">{props.email}</p>
            <p className="d-block">{props.phone}</p>
        </div>
    );
    
};

export default RenderGeneralInformation;