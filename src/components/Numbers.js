import React from "react"
import PropTypes from "prop-types"
import {Button} from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber => {
    const renderButton = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbers.map(renderButton)
})
function Numbers({onClickNumber}) {
    return (
        <section className="bg-black-200 text-yellow-200 relative w-60 border-none leading-none">
            {renderButtons(onClickNumber)}
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export {Numbers}
