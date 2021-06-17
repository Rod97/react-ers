import { useContext, useEffect, useState } from "react";
import { AllPendingContext } from "../Context/AllPendingContext";
import ResolveRequest from "../ResolveRequest"

function AllPending() {
    const { pending } = useContext(AllPendingContext)
    const [requests, setRequests] = pending;
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
                    requests.map(request => (
                        <tr key={request._id}>
                            <td>{request._id}</td>
                            <td>{request.amount}</td>
                            <td>{request.reason}</td>
                            <td>{request.employee_id}</td>
                            <ResolveRequest requestId={request._id} status={request.status === 'Pending' ? true : false} />
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default AllPending;