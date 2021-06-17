import React, {useState, useEffect, useContext} from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';
import { ResolvedContext } from '../Context/ResolvedContext';

function EmployeeResolved() {
    const [resolved, setResolved] = useContext(ResolvedContext);
    return (
        <table>
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>Amount Requested</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {resolved.map(request => (
                    <tr key={request._id}>
                        <td>{request._id}</td>
                        <td>{request.amount}</td>
                        <td>{request.reason}</td>
                        <td>{request.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeResolved;