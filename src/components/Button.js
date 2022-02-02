import React from "react";
import PropTypes from "prop-types";

function Button({text, clickHandler}) {
    return (
        <button
            className="last:w-full bg-black-200 block w-20 h-20 float-left p-6 text-base bg-transparent duration-100 hover:border hover:text-blue-100 hover:border-yellow-200"
            onClick={() => clickHandler(text)}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

Button.defaultProps = {
    text: "0",
}

export {Button}