import React from "react";

const RenderGeneralInformation = (props) => {

    return (
        <div>
            <p className="m-2">{props.name}</p>
            <p className="m-2">{props.email}</p>
            <p className="m-2">{props.phone}</p>
        </div>
    );
    
};

export default RenderGeneralInformation;