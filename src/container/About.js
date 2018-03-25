import React from 'react';
import aboutWallet from '../assets/img/about_wallet.png';
import aboutTx from '../assets/img/about_tx.png';
import aboutGlobe from '../assets/img/about_globe.png';
import aboutMate from '../assets/img/about_mate.png';
import aboutTxs from '../assets/img/about_txs.png';
import aboutBulb from '../assets/img/about_bulb.png';
import aboutMoney from '../assets/img/about_money.png';
import lightSpeed from '../assets/img/investors/lightspeed.svg';
import GV from '../assets/img/investors/GV.svg';
import lakeStar from '../assets/img/investors/Lakestar.svg';
import virgin from '../assets/img/investors/virgin.svg';
import mosaicVentures from '../assets/img/investors/mosaic-ventures.svg';
import nokota from '../assets/img/investors/Nokota.svg';
import digitalCurrencyGroup from '../assets/img/investors/Digital-Currency-Group.svg';
import prudenceHolding from '../assets/img/investors/prudence-holding.svg';
import wicklowCapital from '../assets/img/investors/wicklow-capital.svg';
import futurePerfectVentures from '../assets/img/investors/future-perfect-ventures.svg';
import './About.scss';

export default function About() {
    return (

        <div className="wrapper">

            <div className="by-the-numbers bg-white">
                <div className="container">

                    <div className="flex-center flex-justify">
                        <h2 className="pvm em-100 type-mlrg">BLOCKCHAIN BY THE NUMBERS</h2>
                    </div>

                    <div className="container">

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutWallet} alt="" />

                            </div>

                            <div>

                  <span className="num">
                    <span className="num">15</span>,000,000+
                  </span>

                                <br />

                                <span>WALLETS</span>
                            </div>
                        </div>

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutTx} alt="" />

                            </div>

                            <div>

                  <span className="num">
                    <span className="num">16</span>,000,000+
                  </span>

                                <br />

                                <span>DAILY TRANSACTIONS</span>
                            </div>
                        </div>

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutGlobe} alt="" />

                            </div>

                            <div>

                                <span className="num">140</span>

                                <br />

                                <span>COUNTRIES SERVED</span>
                            </div>
                        </div>

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutMate} alt="" />

                            </div>

                            <div>

                                <span className="num">10,000+</span>

                                <br />

                                <span>CLUB MATE BOTTLES CONSUMED</span>
                            </div>
                        </div>

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutTxs} alt="" />

                            </div>

                            <div>

                                <span className="num">100,000,000+</span>

                                <br />

                                <span>TRANSACTIONS POWERED</span>
                            </div>
                        </div>

                        <div className="number flex-center col-md-4 col-sm-6">

                            <div>

                                <img src={aboutBulb} alt="" />

                            </div>

                            <div>

                                <span className="num">FIRST</span>

                                <br />

                                <span>LEADING EDGE RESEARCH</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="investment-info flex-center">

                <div className="container">

                    <div className="col-md-3 flex-center flex-row raised">
                        <img src={aboutMoney} alt="" />

                        <div className="flex-column pll">
                            <span className="amount">$70,000,000</span>
                            <span>amount-raised
                  <br />
                </span>

                            <p className="em-200 pts">From the leading investors in Silicon Valley, Wall Street, and London.</p>

                        </div>
                    </div>

                    <div className="investor-logos col-md-7 col-sm-12 col-xs-12">

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={lightSpeed} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={GV} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={lakeStar} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={virgin} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={virgin} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={mosaicVentures} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={nokota} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={digitalCurrencyGroup} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={prudenceHolding} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={wicklowCapital} alt="" />
                            </a>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-6">

                            <a rel="noreferrer nofollow" href="http://lsvp.com/">
                                <img src={futurePerfectVentures} alt="" />
                            </a>
                        </div>

                    </div>

                    <div className="col-md-2 investor-names">

                        <div className="center flex-column pvl">

                            <a className="dark-blue em-300" href="https://www.linkedin.com/in/rogerver" rel="noopener noreferrer">Roger Ver</a>
                            <a className="dark-blue em-300" href="https://www.linkedin.com/in/rogerver" rel="noopener noreferrer">Sir Richard Branson</a>
                            <a className="dark-blue em-300" href="https://www.linkedin.com/in/rogerver" rel="noopener noreferrer">Rafael Corrales</a>
                            <a className="dark-blue em-300" href="https://www.linkedin.com/in/rogerver" rel="noopener noreferrer">Amit Jhawar</a>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )

}
