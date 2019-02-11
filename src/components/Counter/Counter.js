import React from 'react';

function Counter(props) {
    return (
        <div className="counter">
            <p className="counter-text">Tries: {props.counter}</p>
        </div>
    )

}


export default Counter;