import React from 'react';
import './DashboardHome.scss';
import spinner from '../assets/wallet/img/spinner-8de10c3e9fd9f1c447099e6d23b5c24931c019da.gif';
import selectArrow from '../assets/wallet/img/select-arrow-f0c58cd22576da74feefda596447c87d18d9e660.png';

export  default function DashboardHome() {

    return (

        <div className="main-container">

            <div className="top-view">


                <div className="flex-center flex-between height-100 width-100-mobile">


                    <div className="flex-column flex-center-mobile width-100-mobile">


                        <div className="flex-baseline heavy hidden-xs">


                            <h1 className="f-28 my-wallet flex upper mtn em-200">Be your own bank.

                                <span className="reg pos-rel">®</span>

                            </h1>

                        </div>

                        <div className="visible-xs">

                            <div className="heavy flex-column flex-align-end right-align center-mobile flex-center-mobile main-balance">

                                <span className="f-20">Total Balance</span>
                            </div>

                            <div className="pointer dropdown">

                                <div className="fork-warn mr-10 flex-center flex-end">

                                    <span className="f-10"></span>
                                </div>

                                <span>

                                    <img src={spinner} alt=""/>

                                    <span>N/A</span>

                                    <span>$0.00</span>

                                    <span></span>

                                </span>

                            </div>

                        </div>

                        <div className="flex flex-center-mobile">


                            <button className="btn button-default button-short-wide type-h5 mrm">

                                <i className="mrs media-middle icon-send"></i>

                                <span className="em-300">Send</span>
                            </button>


                            <div className="btn-group">

                                <button className="btn button-default button-short-wide type-h5 pos-rel">

                                    <i className="mrs media-middle icon-receive"></i>

                                    <span className="em-300">Request</span>
                                </button>

                            </div>


                        </div>

                    </div>


                    <div className="hidden-xs">

                        <div className="heavy flex-column flex-align-end right-align center-mobile flex-center-mobile main-balance">

                            <span className="f-20">Total Balance</span>


                            <div className="pointer dropdown">

                                <div className="flex-row flex-center f-20 em-200 dropdown-toggle">

                                    <span></span>

                                    <span>
                                        <img src={spinner} alt=""/>

                                        <span>N/A</span>

                                        <span>$0.00</span>

                                        <span></span>

                                    </span>

                                    <img className="ml-5 arrow" src={selectArrow} alt=""/>

                                </div>

                                <ul className="dropdown-menu-right pbn dropdown-menu">

                                    <li className="flex-row flex-center flex-end f-20 em-200">

                                        <span></span>
                                        
                                        <span>
                                            <img className="ml-5 arrow" src={selectArrow} alt=""/>
                                        </span>
                                    </li>



                                    <li className="flex-row flex-end mb-5">

                                        <span className="mr-10">0 BTC</span>

                                        {/* TODO: take up here*/}

                                    </li>


                                </ul>

                            </div>


                        </div>

                        <div className="mvn f-20 em-200 lh1 ng-hide">

                        </div>

                    </div>

                </div>

            </div>


            <div className="right-container flex flex-column">

            </div>

        </div>
    )

}