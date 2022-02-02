import React from "react";
import PropTypes from "prop-types";

function Result({value}) {
    return (
        <div className="relative h-20 w-80 p-2 overflow-hidden bg-black-100 opacity-25 text-3xl leading-loose text-green-100 text-right rtl:m-auto	">
            {value}
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export {Result}