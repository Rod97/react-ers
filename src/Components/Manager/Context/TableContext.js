import React, { createContext, useState } from 'react';

export const TableContext = createContext();

export const TableProvider = (props) => {
    const [table, setTable] = useState('employees');

    return (
        <TableContext.Provider value={[table, setTable]}>
            {props.children}
        </TableContext.Provider>
    );
}