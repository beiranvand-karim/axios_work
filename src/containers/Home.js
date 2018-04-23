import React from 'react';
// import BoxCon from './box-container';
import {Link} from "react-router-dom";
import './Home.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from './LogIn';
import Footer from './Footer';
import AboutPage from './AboutPage';
import WalletHome from './WalletHome';
import Wallet from "./Wallet";

class Home extends React.Component {
    render(){
        return(

            <Router>
                <div className="home-component">
                    <h1>Home</h1>
                    <div>
                        <Link to="/log-in">Log In</Link>
                    </div>
                    <Switch>
                        <Route path="/log-in" component={LogIn} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/walletHome" component={WalletHome} />
                        <Route path="/wallet" component={Wallet} />
                    </Switch>
                    <Footer />
                    {/*<BoxCon />*/}
                </div>
            </Router>

        )
    }
}
export default Home;