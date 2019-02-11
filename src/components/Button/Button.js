import React from 'react';


function Button(props) {
    return(
        <div className="button-wrapper">
            <button onClick={() => props.gameReset()} className="button">Reset</button>
        </div>
    )

}

export default Button;
