/* eslint no-eval:0 */
import React, { useState } from "react"
import words from "lodash.words"
import {Result} from "./Result"
import {MathOperations} from "./MathOperations"
import {Functions} from "./Functions"
import {Numbers} from "./Numbers"

function App() {
    const [text, setText] = useState("")
    const items = words(text, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0";

    return (
        <main className="relative m-auto w-80 bg-black-200 shadow-lg text-center">
            <h1 className="text-white p-3">Calculator</h1>
            <Result value={value}/>
            <Numbers onClickNumber={number => {
                setText(`${text}${number}`)}}
            />
            <Functions
                onContentClear={() => {setText('')}}
                onDelete={() => {
                    if (text.length > 0) {
                        const newText = text.substring(0, text.length -1)
                        setText(newText)
                    }
                }}
            />
            <MathOperations
                onClickOperation={operation => {
                    setText(`${text}${operation}`)
                }}
                onClickEqual={equal => {
                    setText(eval(text).toString())
                }}
            />
        </main>
    )
}

export default App