import React from 'react';
import homeArrow from '../../assets/img/home-arrow.png';
import homeMerchant1 from '../../assets/img/home-merchant1.jpg';
import homeMerchant2 from '../../assets/img/home-merchant2.jpg';
import './HomeSub5.scss';

export default function HomeSub5() {

    return (


        <div className="HomeSub5 bg-white second">


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

    )

}