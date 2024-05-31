import React, { createContext, useReducer } from 'react';
const initialState = {
    activeContentIndex: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CONTENT_INDEX':
            return { ...state, activeContentIndex: action.payload };
        default:
            return state;
    }
};

export const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TabsContext.Provider value={{ state, dispatch }}>
            {children}
        </TabsContext.Provider>
    );
};