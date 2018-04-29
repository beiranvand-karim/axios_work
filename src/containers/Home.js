import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import AboutPage from './AboutPage';
import WalletHome from './WalletHome';
import Wallet from "./Wallet";
import NewLogIn from "./NewLogIn";
import SignUp from "./SignUp";
import homeArrow from '../assets/img/home-arrow.png';
import homeMerchant1 from '../assets/img/home-merchant1.jpg';
import homeMerchant2 from '../assets/img/home-merchant2.jpg';
import nyTimes from '../assets/img/nytimes.png';
import homeAnalyze from '../assets/img/home-analyze.png';
import homeInnovate from '../assets/img/home-innovate.png';
import homeBuy from '../assets/img/home-buy.png';
import homeBtc from '../assets/img/home-btc.png';
import homeBuild from '../assets/img/home-build.png';
import newCityGraphic from '../assets/img/new-city-graphic.png';
import playButton from '../assets/img/play-button.png';
import HomeSub1 from "../components/home/HomeSub1";
import HomeSub2 from "../components/home/HomeSub2";
import './Home.scss';

class Home extends React.Component {
    render(){
        return(

            <Router>

                <div className="wrapper home-component">

                    <HomeSub1 />
                    <HomeSub2 />

                    <div className="bg-white first">

                        <div className="container home-middle prn pln">


                            <div className="col-md-8 bg-white">

                                <div className="offering">

                                    <span>
                                        Blockchain is the world's leading software platform for digital assets. Offering the largest production block chain platform in the world, we are using new technology to build a radically better financial system.
                                    </span>
                                </div>

                                <div className="offering-icons">

                                    <div className="col-md-6">

                                        <a href="">

                                            <div>

                                                <img src={homeAnalyze} alt=""/>
                                                <div>

                                                    <p className="uppercase em-300">Analyze</p>
                                                    <span>#1 resource for analyzing the block chain</span>

                                                </div>

                                            </div>
                                        </a>

                                        <a href="">

                                            <div>

                                                <img src={homeInnovate} alt=""/>
                                                <div>

                                                    <p className="uppercase em-300">Analyze</p>
                                                    <span>#1 resource for analyzing the block chain</span>

                                                </div>

                                            </div>
                                        </a>

                                        <a href="">

                                            <div>

                                                <img src={homeBuy} alt=""/>
                                                <div>

                                                    <p className="uppercase em-300">Analyze</p>
                                                    <span>#1 resource for analyzing the block chain</span>

                                                </div>

                                            </div>
                                        </a>

                                    </div>

                                    <div className="col-md-6">


                                        <a href="">

                                            <div>

                                                <img src={homeBtc} alt=""/>
                                                <div>

                                                    <p className="uppercase em-300">Analyze</p>
                                                    <span>#1 resource for analyzing the block chain</span>

                                                </div>

                                            </div>
                                        </a>

                                        <a href="">

                                            <div>

                                                <img src={homeBuild} alt=""/>
                                                <div>

                                                    <p className="uppercase em-300">Analyze</p>
                                                    <span>#1 resource for analyzing the block chain</span>

                                                </div>

                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 bg-ultralight-blue">

                                <div className="references-slider">

                                    <div className="quotations">

                                        <div className="active">
                                            “Blockchain is the early leader...
                                            <br/>
                                            They are actually making the entire ecosystem.”
                                        </div>

                                    </div>

                                    <div className="nav">


                                        <span>

                                            <span className="arrow">

                                            </span>

                                            <div>

                                                <a className="active" href="http://dealbook.nytimes.com/2014/10/06/blockchain-is-latest-bitcoin-start-up-to-lure-big-investment/?_r=0">

                                                    <img src={nyTimes} alt=""/>
                                                    
                                                </a>
                                            </div>

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-grey pvvl">

                        <div className="flex-row flex-column-mobile flex-center-mobile flex-justify-mobile display-block-tablet container pvvl">

                            <div className="flex-column prvl flex-1 center-text-mobile">

                                <h2 className="em-100 lh1 type-mlrg ls-title uppercase dark-blue">
                                    We're living in a digital world
                                </h2>

                                <p className="em-200 medium-blue type-h5 mtm">
                                    It's time money caught up. Digital assets, like bitcoin and ether, allow users to transact directly without any third-party intermediary.
                                </p>

                            </div>

                            <div className="flex-1 bg-ultralight-blue pos-rel">

                                <div className="hidden-xs">
                                    <img src={newCityGraphic} alt=""/>
                                </div>

                                <div className="pos-abs pos-res-mobile">
                                    <div>

                                        <video src="">
                                            <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.mp4" type="video/mp4" />
                                            <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.webm" type="video/webm"/>
                                            <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.ogv" type="video/ogg" />
                                        </video>

                                    </div>
                                </div>

                                <div className="pointer flex-center flex-justify">

                                    <img src={playButton} alt=""/>
                                    <span className="em-300 uppercase type-p center-text-mobile plm">See How It Works</span>
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="bg-white second">


                        <div className="first container mbml">

                            <p className="em-200 medium-blue type-h5 ptvl merchant-copy">

                                Millions of users and hundreds of thousands of merchants use digital assets. Here’s what it means for a few of them.

                            </p>

                        </div>

                        <div className="second container">

                            <div className="merchant flex-column col-md-6 prn">

                                <img src={homeMerchant1} alt=""/>

                                <div className="merchant-label bg-dark-blue flex-row flex-between">

                                    <div>
                                        <span>THE UNCOMMONS</span>

                                        <span>NEW YORK, NY</span>

                                    </div>

                                    <div>

                                        <a href="">
                                            WHY WE USE BITCOIN

                                            <img src={homeArrow} alt=""/>
                                            
                                        </a>
                                    </div>

                                </div>

                            </div>

                            <div className="merchant flex-column col-md-6 prn">

                                <img src={homeMerchant2} alt=""/>

                                <div className="merchant-label bg-dark-blue flex-row flex-between">

                                    <div>
                                        <span>THE UNCOMMONS</span>

                                        <span>NEW YORK, NY</span>

                                    </div>

                                    <div>

                                        <a href="">
                                            WHY WE USE BITCOIN

                                            <img src={homeArrow} alt=""/>

                                        </a>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="third pvvl">

                            <div className="pvvl flex-center flex-column center">

                                <h2 className="em-100 lh1 type-mlrg ls-title uppercase dark-blue">
                                    Get The World
                                    <span>’</span>
                                    s Most
                                    <br/>
                                    Popular Digital Currency Wallet
                                </h2>

                                <p className="em-200 medium-blue type-h4">Simple. Seamless. Secure.</p>

                                <a className="button-primary mtl wallet-button-alt" href="">Get A Free Wallet</a>

                                <span>

                                <span className="medium-blue hover-underline">or</span>
                                    &nbsp;
                                    <a className="primary uppercase" href="">Login</a>

                            </span>

                            </div>

                        </div>


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