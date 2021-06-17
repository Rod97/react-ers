import React, {useState, useEffect} from 'react';

function EmployeeResolved({ employee }) {
    const [resolved, setResolved] = useState([]);
    useEffect(() => {
        (async () => {
            const getResolved = await fetch(`https://ers-node.herokuapp.com/employee/resolved/${employee}`);
            const results = await getResolved.json();
            setResolved(results.data);
        })();
    }, [employee]);

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