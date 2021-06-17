import React, { useState } from 'react';
import EmployeeSelector from './EmployeeSelector';
import RequestForm from './RequestForm';
import ViewRequests from './ViewRequests';
import { ResolvedProvider } from './Context/ResolvedContext'
import { PendingProvider } from './Context/PendingContext'
import { EmployeeProvider } from './Context/EmployeeContext';

function EmployeeHome() {
    const [showForm, setShowForm] = useState(false)
    const [formButton, setFormButton] = useState("New Request")

    const toggleForm = () => {
        setShowForm(!showForm);
        toggleButton();
    }
    const toggleButton = () => {
        if (!showForm) {
            setFormButton("Cancel")
        } else {
            setFormButton("New Request")
        }
    }
    return (
        <EmployeeProvider>
            <PendingProvider>
                <ResolvedProvider>
                    <div>
                        <h1>Employee Home</h1>
                        <div className='employee-home'>
                            <EmployeeSelector />
                            <div>
                                <button onClick={toggleForm}>{formButton}</button>
                                {showForm ? <RequestForm /> : null}
                            </div>
                        </div>
                        <ViewRequests />
                    </div>
                </ResolvedProvider>
            </PendingProvider>
        </EmployeeProvider>
    );
}

export default EmployeeHome;