import React from 'react';
import Dashboard from './Dasboard';

const ComOne = () => {

    const body = () => (
        <div>
            <h3>This is from component One</h3>
            <div className="com1Main">
                <label htmlFor="filePicker" style={{ background: "grey", padding: "10px 10px" }}>
                    My custom choose file label
                </label>
                <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} />
            </div>
        </div>
    )
    return <Dashboard body={body()} />
}

export default ComOne;