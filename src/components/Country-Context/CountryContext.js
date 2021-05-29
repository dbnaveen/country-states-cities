import React, { useState, createContext } from 'react';

// Create Context Object
export const CountryContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CountryProvider = props => {
    const [country, setCountry] = useState({});

    return (
        <CountryContext.Provider value={[country, setCountry]}>
            {props.children}
        </CountryContext.Provider>
    )
}
