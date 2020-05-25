import React from "react";
import PropTypes from "prop-types";

const Bye = ({ name }) => {
    return <p>Bye, {name}</p>;
}

Bye.propTypes = {
    name: PropTypes.string
};

export default Bye;