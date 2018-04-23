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
import aboutConvention from '../assets/img/about_convention.png';
import aboutDetails from '../assets/img/about_details.png';
import aboutEnduser from '../assets/img/about_enduser.png';
import aboutHuman from '../assets/img/about_human.png';
import aboutSecurity from '../assets/img/about_security.png';
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


            <div className="values bg-white">

                <div className="container">

                    <h3 className="center em-200">
                        Our collective desire to offer financial empowerment is driven by our values.
                        <br/>
                        They act as our organization's North Star.
                    </h3>

                    <div className="container">

                        <div className="value flex-center col-md-6">

                            <img src={aboutConvention} alt=""/>


                            <span className="pll em-200">
                                We challenge the status quo and transcend the boundaries of today to create an open financial future that supports the broadest global community possible. We've been told that getting to where we are today would be impossible so we decided we were just getting started.
                            </span>

                        </div>

                        <div className="value flex-center col-md-6">

                            <img src={aboutEnduser} alt=""/>


                            <span className="pll em-200">
                                Our customers should own their financial future so we empower them to "Be Your Own Bank". Our users come first.
                            </span>

                        </div>
                    </div>

                    <div className="container">

                        <div className="value flex-center col-md-6">

                            <img src={aboutHuman} alt=""/>


                            <span className="pll em-200">
                                We build connections with each other and our users by communicating frequently, authentically and openly and we build trust by doing what we say we'll do. We're big on accountability and high standards, but not on unnecessary rules.
                            </span>

                        </div>

                        <div className="value flex-center col-md-6">

                            <img src={aboutSecurity} alt=""/>


                            <span className="pll em-200">
                                Our users' security and privacy are critical to our success and we will not forsake them in service of our ambition.
                            </span>

                        </div>
                    </div>

                    <div className="container">

                        <div className="value flex-center col-md-6">

                            <img src={aboutDetails} alt=""/>


                            <span className="pll em-200">
                                We believe we cannot get the big things right if we don't get the little things right first. Sometimes that makes things harder. Luckily, we're ok with hard.
                            </span>

                        </div>

                    </div>
                </div>
            </div>


            <div className="meet">


                <div className="pvvl flex-center flex-column center">

                    <h3 className="em-100 lh1 type-mlrg ls-title uppercase dark-blue container-xs">
                        MEET THE PEOPLE WHO ARE
                        <br/>
                        MAKING IT ALL HAPPEN
                    </h3>

                    <a href="" className="button-primary mtl">
                        MEET THE TEAM
                    </a>
                </div>

            </div>

        </div>

    )

}
