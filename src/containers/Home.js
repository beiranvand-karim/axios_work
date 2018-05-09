import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import AboutPage from './AboutPage';
import WalletHome from './WalletHome';
import Wallet from "../components/wallet/Wallet";
import NewLogIn from "./NewLogIn";
import SignUp from "./SignUp";
import HomeSub1 from "../components/home/HomeSub1";
import HomeSub2 from "../components/home/HomeSub2";
import HomeSub3 from "../components/home/HomeSub3";
import Navigation from "../components/home/Navigation";
import HomeSub5 from "../components/home/HomeSub5";
import HomeSub4 from "../components/home/HomeSub4";
import './Home.scss';

class Home extends React.Component {
    render(){
        return(

            <Router>

                <div className="wrapper home-component">
                    <Navigation />

                    <HomeSub1 />
                    <HomeSub2 />
                    <HomeSub3 />
                    <HomeSub4 />
                    <HomeSub5 />

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