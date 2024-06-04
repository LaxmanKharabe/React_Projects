import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeProvider';

const Button = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
};
export default Button;