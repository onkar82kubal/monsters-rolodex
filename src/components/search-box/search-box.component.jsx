import React from 'react';

import './search-box.component.styles.css';

export const SearcBox = ({placeholder,handleChange}) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange} /> 
)