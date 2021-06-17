import React, { useState, createContext, useEffect, useContext } from 'react';
import { AllPendingContext } from './AllPendingContext';

export const AllResolvedContext = createContext();

export const AllResolvedProvider = (props) => {
    const { update } = useContext(AllPendingContext);
    const [updateResolved, setUpdateResolved] = update;
    const [resolved, setResolved] = useState([]);
    useEffect(() => {
        if (updateResolved) {
            (async () => {
                const getPending = await fetch(`https://ers-node.herokuapp.com/manager/resolved`);
                const results = await getPending.json();
                setResolved(results.data);
            })();
        }
    }, [updateResolved])


    return (
        <AllResolvedContext.Provider value={[resolved, setResolved]}>
            {props.children}
        </AllResolvedContext.Provider>
    )
}