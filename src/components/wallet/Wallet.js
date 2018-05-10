import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BitCoinTransactions from "./BitCoinTransactions";
import EtherTransactions from "./EtherTransactions";
import BitCoinCashTransactions from "./BitCoinCashTransactions";
import Dashboard from "./Dashboard";
import DashboardHome from "./DashboardHome";
import RightNav from "./RightNav";
import './Wallet.scss';

export default function Wallet() {

    return (

        <Router>

            <div className="wallet-container">

                <RightNav />
                <DashboardHome />

                <Switch>

                    <Route path='/btc/transactions' component={BitCoinTransactions} />
                    <Route path='/eth/transactions' component={EtherTransactions} />
                    <Route path='/bch/transactions' component={BitCoinCashTransactions} />
                    <Route path='/wallet/home' component={Dashboard} />

                </Switch>

            </div>

        </Router>

    )
}