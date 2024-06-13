import React from 'react';

const Child = ({ items, onDeleteItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => onDeleteItem(item)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Child;
