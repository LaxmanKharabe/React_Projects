import React from 'react'
import { btnTxt } from '../data'
const Menu = ({ activeContentIndex, setActiveContentIndex }) => {
    return (
        <menu>
            {
                btnTxt.map((btn, index) =>
                    <button
                        onClick={() => setActiveContentIndex(index)}
                        className={activeContentIndex === index ? "active" : ""}>
                        { btn }
                    </button>
                )
            }
        </menu>
    )
}
export default Menu