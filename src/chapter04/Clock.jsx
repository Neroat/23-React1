import React from "react";

const Clock = () => {
    return(
        <div>
            <h1>Hi react!</h1>
            <h2>CurrentTime : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;