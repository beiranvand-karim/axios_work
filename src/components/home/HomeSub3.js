import React from 'react';
import './HomeSub3.scss';
import nyTimes from '../../assets/img/nytimes.png';
import homeAnalyze from '../../assets/img/home-analyze.png';
import homeInnovate from '../../assets/img/home-innovate.png';
import homeBuy from '../../assets/img/home-buy.png';
import homeBtc from '../../assets/img/home-btc.png';
import homeBuild from '../../assets/img/home-build.png';


export default function HomeSub3() {

    return (


        <div className="HomeSub3 bg-white first">

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

    )

}