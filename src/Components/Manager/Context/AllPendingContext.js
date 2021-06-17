import React, { useState, createContext, useEffect } from 'react';

export const AllPendingContext = createContext();

export const AllPendingProvider = (props) => {
    const [update, setUpdate] = useState(true)
    const [pending, setPending] = useState([]);
    useEffect(() => {
        if (update) {
            (async () => {
                const getPending = await fetch(`https://ers-node.herokuapp.com/manager/pending`);
                const results = await getPending.json();
                setPending(results.data);
            })();
            setUpdate(false);
        }
    }, [update])


    return (
        <AllPendingContext.Provider value={{ pending: [pending, setPending], update: [update, setUpdate] }}>
            {props.children}
        </AllPendingContext.Provider>
    )
}