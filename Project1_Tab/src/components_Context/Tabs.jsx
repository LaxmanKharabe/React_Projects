import React, { useContext } from 'react';
import { btnTxt } from '../data';
import { TabsContext } from './TabsContext';

const Tabs = () => {
    const { state, dispatch } = useContext(TabsContext);
    const setActiveContentIndex = (index) => {
        dispatch({ type: 'SET_ACTIVE_CONTENT_INDEX', payload: index });
    };
    return (
        <menu>
            {btnTxt.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => setActiveContentIndex(index)}
                    className={state.activeContentIndex === index ? 'active' : ''}>
                    {btn}
                </button>
            ))}
        </menu>
    );
};
export default Tabs;