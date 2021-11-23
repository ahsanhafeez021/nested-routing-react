import React from 'react';
import Dashboard from './Dasboard';

const ComTwo = () => {

    const body = () => (
        <div>
            <h3>This is from component Two</h3>
        </div>
    )
    return <Dashboard body={body()} />
}

export default ComTwo;