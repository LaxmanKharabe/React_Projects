import React, { useContext } from 'react';
import { content } from '../data';
import { TabsContext } from './TabsContext';

const Content = () => {
    const { state } = useContext(TabsContext);
    return (
        <div id="tab-content">
            <ul>
                {content[state.activeContentIndex].map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
export default Content;