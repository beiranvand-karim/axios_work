import React from 'react';
import BoxCon from './box-container';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>Home</h1>
                <div>
                    <Link to="/log-in">Log In</Link>
                </div>
                <BoxCon />
            </div>
        )
    }
}
export default Home;