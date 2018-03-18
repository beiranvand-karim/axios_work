import React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render(){
        return(
            <div>
                <Link to="/about">about</Link>
                <h1>Footer</h1>
            </div>
        )
    }
}
export default Footer;