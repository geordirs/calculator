import React from "react";
import PropTypes from "prop-types";
import {Button} from "./Button";

function MathOperations({onClickOperation, onClickEqual}) {
    return (
        <section className="text-pink-200 text-pink-100 inline-block w-20 h-20">
            <Button text="+" clickHandler={onClickOperation}/>
            <Button text="-" clickHandler={onClickOperation}/>
            <Button text="*" clickHandler={onClickOperation}/>
            <Button text="/" clickHandler={onClickOperation}/>
            <Button text="=" clickHandler={onClickEqual}/>
        </section>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export {MathOperations}