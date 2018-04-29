import React from 'react';
import './HomeSub2.scss';

export default function HomeSub2() {

    return (
        <div className="HomeSub2 container-fluid">

            <div className="rects row">

                <div className="first col-md-4 col-sm-4 col-xs-12 bg-purple flex-center flex-justify">

                    <span className="stat white uppercase em-200">
                        <span id="n-wallets">24</span>
                        M+ Wallets
                    </span>
                </div>

                <div id="exchange-rates" className="second col-md-4 col-sm-4 col-xs-12 bg-dark-blue flex-center flex-justify">

                    <span id="btc" className="white em-200 lh1">
                        1 BTC =
                        <span id="exchange-rate-btc">9,198.16</span>
                         USD
                    </span>
                    <span id="eth" className="white em-200 lh1">
                        1 ETH =
                        <span id="exchange-rate-eth">682.14</span>
                         USD
                    </span>
                    <span id="bch" className="white em-200 lh1 active">
                        1 BCH =
                        <span id="exchange-rate-bch">1,388.05</span>
                         USD
                    </span>

                </div>

                <div className="third col-md-4 col-sm-4 col-xs-12 bg-blue flex-center flex-justify">
                    <span className="stat white uppercase em-200">100M+ Transactions</span>
                </div>

            </div>
        </div>
    )

}