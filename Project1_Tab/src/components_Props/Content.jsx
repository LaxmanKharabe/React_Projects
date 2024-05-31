import React from 'react'
import { content } from '../data'
const Content = ({ activeContentIndex }) => {
    return (
        <div id="tab-content">
            <ul>
                {
                    content[activeContentIndex].map(items =>
                        <li key={items}>{items}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default Content