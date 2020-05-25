import React from "react";

const Hello = ({ name, big}) => {
    if (big) {
        return <h1>Hello, {name}!</h1>
    }
    return <p>hi, {name}!</p>
}

export default Hello;