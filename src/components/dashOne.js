import React from 'react';
import Dashboard from './Dasboard';

const DashOne = () => {

    const body = () => (
        <div>
            <h3>This is from Dashboard</h3>
        </div>
    )
    return <Dashboard body={body()} />
}

export default DashOne;