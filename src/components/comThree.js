import React from 'react';
import Dashboard from './Dasboard';

const ComThree = () => {

    const body = () => (
        <div>
            <h3>This is from component Three</h3>
        </div>
    )
    return <Dashboard body={body()} />
}

export default ComThree;