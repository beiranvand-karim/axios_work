import React from 'react';
import whiteBlockChain from '../assets/img/white-blockchain-f1208a2b904ce045df3239b1922104bd3fc6a7c1.svg';
import blueLogo from '../assets/img/blue-logo-ea5f627851cb67fcdb31b3907dd0f7ddcd7ea4cf.svg';

class SignUp extends React.Component {

    render() {
        return <div className="login-pg">

            <div className="wrapper">

                <nav className="logo opaque" role="navigation">

                    <ul className="navigation">

                        <li>
                            <a className="bc-logo" href="https://blockchain.com" />
                            <img src={whiteBlockChain} alt=""/>
                        </li>

                        <li className="flex-space"></li>
                    </ul>
                </nav>
            </div>

            <div className="overflow-scroll flex-justify flex-center">

                <div className="flex-center flex-justify flex-column">

                    <div className="flex flex-justify">

                        <div className="alert-in-app">

                        </div>
                    </div>

                    <div className="login-box mhs">

                        <div className="create-wallet">

                            <header>

                                <hgroup>
                                    <div className="flex-between flex-center flex-wrap mb-10">

                                        <span className="f-24 lh1">Create your Wallet</span>

                                        <span>
                                            <span>or</span>&nbsp;
                                            <a href="">
                                                <span>Login</span>
                                            </a>

                                        </span>

                                    </div>
                                    <p className="alt-font f-16">Sign up for a free wallet below</p>
                                </hgroup>
                            </header>
                        </div>

                        <form action="" className="bc-form form-horizontal mt-30 ng-pristine ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength ng-valid-is-valid">

                            <div className="browser-detection">

                                <p className="text-warning ng-hide"></p>
                                <p className="text-danger ng-hide"></p>

                            </div>

                            <fieldset>

                                <div className="group mb-20 has-error">

                                </div>

                                <div className="group mb-20">

                                </div>

                                <div className="group mb-20 has-error">

                                </div>

                                <div className="group mb-20">

                                </div>

                                <div className="group mb-15 full">

                                </div>

                            </fieldset>


                        </form>
                    </div>
                </div>

                <div className="flex-row flex-center flex-column-mobile flex-between bc-logo-footer width-100 width-100-tablet">

                    <div className="wrapper ph-35 width-100">

                        <div className="flex-row flex-center flex-between flex-column-mobile">

                            <div className="flex-row flex-center flex-column-mobile em-300">

                                <img src={blueLogo} alt=""/>

                                <a className="upper white ml-40" href="">Data</a>
                                <a className="upper white ml-40" href="">About</a>
                                <a className="upper white ml-40" href="">Blog</a>
                                <a className="upper white ml-40" href="">Support</a>

                            </div>

                            <li className="dropup dropdown">

                                <a href="">
                                    <span className="white upper f-12">English</span>

                                    <i className="white icon-down_arrow f-8 ml-5"></i>
                                </a>



                                <ul className="languages_select dropdown-menu-right dropdown-menu">


                                    <li className="lang in languages">
                                        <a href="">Bulgarian</a>
                                    </li>

                                    <li className="lang in languages">
                                        <a href="">Bulgarian</a>
                                    </li>

                                    <li className="lang in languages">
                                        <a href="">Bulgarian</a>
                                    </li>

                                    <li className="lang in languages">
                                        <a href="">Bulgarian</a>
                                    </li>

                                </ul>


                            </li>
                        </div>

                    </div>

                    <div className="versions f-12">

                        <a href="https://github.com/blockchain/My-Wallet-V3-Frontend/releases" target="_blank">v1.33.3  </a>
                        <a href="https://github.com/blockchain/My-Wallet-V3/releases">(MyWallet v3.43.1)</a>
                    </div>


                </div>
            </div>
        </div>
    }

}

export default SignUp;
