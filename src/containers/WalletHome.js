import React from 'react';
import refresh from '../assets/img/refresh-cf3ee378cf5ca20da155bfe9fbe5e37fe7cc5d38.svg';
import refreshDev from '../assets/img/refresh-dev-e9561f9d3dd68fccdc1d62374cf5d0ccd35467d3.svg';
import whiteBlockChain from '../assets/img/white-blockchain-f1208a2b904ce045df3239b1922104bd3fc6a7c1.svg';


export default function WalletHome() {


    return (
        <div className="wallet-top-navigation navbar navbar-inverse mbn">

            <div className="wrapper">

                <nav className="short opaque">

                    <ul className="igation">


                        <li>

                            <a href="">
                                <img src={whiteBlockChain} alt="Blockchain"/>
                            </a>

                            <button className="menu-button">
                                <span>0</span>
                            </button>
                        </li>

                        <li className="hidden-sm hidden-xs flex-space"></li>

                        <li className="hidden-sm hidden-xs whats-new item hidden-xs dropdown dropdown-toggle">

                            <a href="">
                                <i className="icon-bell"></i>


                                <span className="whats-new-icon ng-hide">
                                    <span>0</span>
                                </span>
                            </a>
                        </li>

                        <li className="hidden-sm hidden-xs ml-25 item">

                            <a href="">
                                <img src={refresh} alt=""/>
                                <img src={refreshDev} alt=""/>
                            </a>
                        </li>

                        <li className="hidden-sm hidden-xs ml-25 item">

                            <a href="" className="upper">Sign out</a>
                        </li>

                    </ul>
                </nav>

            </div>

        </div>
    );

}