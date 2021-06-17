import React from 'react';
import TableView from './TableView';
import ManagerNav from './ManagerNav';
import { TableProvider } from './Context/TableContext'
function ManagerHome() {
    return (
        <TableProvider>
            <div>
                <h1>Manager Home</h1>
                <ManagerNav />
                <TableView/>
            </div>
        </TableProvider>

    );
}

export default ManagerHome;