import React from 'react';

const EyesOnMe = () => {
    return (
        <div>
            <button 
                onFocus={() => console.log("Good!")}
                onBlur={() => console.log("Hey! Eyes on me!")}
            >
                EyesOnMe
            </button>
        </div>
    )
}

export default EyesOnMe;
