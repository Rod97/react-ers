import { useEffect, useState, useContext } from "react";
import { AllResolvedContext } from "../Context/AllResolvedContext";

function AllResolved() {
    const [resolved, setResolved] = useContext(AllResolvedContext);
    return (
        <table>
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>Amount Requested</th>
                    <th>Reason</th>
                    <th>Employee Requesting</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    resolved.map(request => (
                        <tr key={request._id}>
                            <td>{request._id}</td>
                            <td>{request.amount}</td>
                            <td>{request.reason}</td>
                            <td>{request.employee_id}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default AllResolved;