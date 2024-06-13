import React, { useState } from 'react';
import Child from './Child';
import { useRef } from 'react';

const Parent = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const inputRef = useRef(null)
    const handleAddItem = () => {
        inputRef.current = inputValue.trim();
        if (inputRef.current !== null) {
            if(!items.includes(inputRef.current)){
                setItems([...items, inputRef.current]);
            }else{
                alert("Duplicate item")
            }
        }
        setInputValue('');
    };

    const handleDeleteItem = (item) => {
        setItems(items.filter(i => i !== item));
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter item"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <Child items={items} onDeleteItem={handleDeleteItem} />
        </div>
    );
};

export default Parent;
