import React, { useState, createContext } from 'react';

// Create Context Object
export const StateContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const StateProvider = props => {
    const [stateVal, setState] = useState({});

    return (
        <StateContext.Provider value={[stateVal, setState]}>
            {props.children}
        </StateContext.Provider>
    )
}
