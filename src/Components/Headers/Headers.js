import React from 'react';
import { Link } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import './Headers.css'

const Headers = (props) => {
    return (
        <Router >
            <header>
               <Link to={"/"} className="LinkBack" >Speedy Math</Link>
            </header>
        </Router>
    )
}

export default Headers