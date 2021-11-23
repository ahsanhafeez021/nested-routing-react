import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Dashboard = (props) => {
    return (
        <div>
            <div className="dashboard">
                <div className="linkGrp">
                <Link className="link" to="/c1">Page1</Link>
                <Link className="link" to="/c2">Page2</Link>
                <Link className="link" to="/c3">Page3</Link>
                </div>
                <form>
                <label for="search">Search : </label>
                    <input type="search"/>
                </form>
            </div>
            <h3>DASHBOARD</h3>
            <div className="body-div">
                {props.body}
            </div>
        </div>
    );
}

export default Dashboard;