import React from "react";
import PropTypes from "prop-types";
import {Button} from "./Button";

function Functions({onContentClear, onDelete}) {
    return (
        <section className="float-left w-60 text-pink-100 inline-flex">
            <Button text="clear" clickHandler={onContentClear}/>
            <Button text="&larr;" clickHandler={onDelete}/>
        </section>
    )
}

Functions.propType = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export {Functions}