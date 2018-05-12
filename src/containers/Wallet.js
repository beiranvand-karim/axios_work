import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BitCoinTransactions from "../components/wallet/BitCoinTransactions";
import EtherTransactions from "../components/wallet/EtherTransactions";
import BitCoinCashTransactions from "../components/wallet/BitCoinCashTransactions";
import Dashboard from "../components/wallet/Dashboard";
import RightNav from "../components/wallet/RightNav";
import WalletHeader from "../components/wallet/WalletHeader";
import TopView from "../components/wallet/TopView";
import './Wallet.scss';

export default function Wallet() {

    return (

        <Router>

            <div>
                <WalletHeader />
                <div className="wallet-container">

                    <RightNav />

                    <div className="DashboardHome main-container">

                        <TopView />

                        <div className="right-container flex flex-column">

                            <Switch>

                                <Route path='/btc/transactions' component={BitCoinTransactions} />
                                <Route path='/eth/transactions' component={EtherTransactions} />
                                <Route path='/bch/transactions' component={BitCoinCashTransactions} />
                                <Route path='/wallet/home' component={Dashboard} />

                            </Switch>

                        </div>

                    </div>

                </div>

            </div>

        </Router>

    )
}