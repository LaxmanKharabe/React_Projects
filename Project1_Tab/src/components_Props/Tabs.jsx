import React, { useState } from 'react'
import Menu from './Menu';
import Content from './Content';

const Tabs = () => {
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    return (
        <div id="tabs">
            <Menu activeContentIndex={activeContentIndex} setActiveContentIndex={setActiveContentIndex}/>
            <Content activeContentIndex={activeContentIndex} />
        </div>
    )
}
export default Tabs