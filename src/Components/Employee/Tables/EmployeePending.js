import React, { useContext } from 'react';
import { PendingContext } from '../Context/PendingContext';

function EmployeePending() {
    const context = useContext(PendingContext)
    const [pending, setPending] = context.pending;

    return (
        <table>
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>Amount Requested</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {pending.map(request => (
                    <tr key={request._id}>
                        <td>{request._id}</td>
                        <td>{request.amount}</td>
                        <td>{request.reason}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeePending;