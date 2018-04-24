import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import AboutPage from './AboutPage';
import WalletHome from './WalletHome';
import Wallet from "./Wallet";
import NewLogIn from "./NewLogIn";
import './Home.scss';
import SignUp from "./SignUp";


class Home extends React.Component {
    render(){
        return(

            <Router>
                <div className="home-component">
                    <h1>Home</h1>
                    <div>
                        <Link to="/log-in">Log In</Link>
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                    <Switch>
                        <Route path="/log-in" component={NewLogIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/walletHome" component={WalletHome} />
                        <Route path="/wallet" component={Wallet} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

        )
    }
}
export default Home;