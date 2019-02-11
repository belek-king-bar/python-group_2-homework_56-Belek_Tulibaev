import React from 'react';


function Button(props) {
    return(
        <div className="button-wrapper">
            <button onClick={() => props.gameReset()} className="button">Обновить</button>
        </div>
    )

}

export default Button;
