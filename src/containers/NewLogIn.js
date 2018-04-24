import React from 'react';
import spinner from '../assets/wallet/img/spinner-8de10c3e9fd9f1c447099e6d23b5c24931c019da.gif';
import './NewLogIn.scss';

export default class NewLogIn extends React.Component {

    render() {

        return <div className="new-login-component overflow-scroll flex-justify flex-center">

            <div className="flex-center flex-justify flex-column">

                <div className="flex flex-justify">

                    <div className="alert-in-app">

                        {/*alerts*/}

                    </div>

                </div>

                <div className="login-box mhs">


                    <div>

                        <header>

                            <hgroup>

                                <div className="flex-between flex-center flex-wrap mb-10">

                                    <span className="f-24 lh1 capitalize exclaim">
                                        Welcome back
                                    </span>

                                    <span className="f-24 lh1 ng-hide" style={{display: 'none'}}>Logged out</span>

                                    <span>
                                        <span>or</span>
                                        &nbsp;

                                        <a href="">Sign Up</a>

                                    </span>

                                </div>

                                <p className="alt-font f-16">Sign in to your wallet below</p>

                            </hgroup>

                        </header>

                        <form action="">

                            <div className="browser-detection">

                                <p className="text-warning ng-hide">

                                </p>

                                <p className="text-danger ng-hide">

                                </p>
                            </div>

                            <fieldset>


                                <div className="group mb-15">

                                    <div className="item">

                                        <label htmlFor="UID_input">Wallet ID</label>

                                        <div>


                                            <input className="form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required" type="text"/>

                                            <div style={{display: 'none'}} className="help-block mbn alt-font f-14 ng-hide">

                                                <span>
                                                </span>
                                            </div>

                                            <div className="help-block mbn alt-font f-14 hidden-xs">

                                                <span>
                                                    Find the login link in your email, e.g.
                                                    <i>blockchain.info/wallet/1111-222-333...</i>
                                                    The series of numbers and dashes at the end of the link is your Wallet ID.
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="group mb-15">

                                    <div className="item">

                                        <label htmlFor="" className="Password">Password</label>

                                        <div>

                                            <input className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" type="text"/>

                                            <div className="help-block mbn alt-font f-14">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{display: 'none'}} className="group mb-15 ng-hide">

                                    <div className="item">

                                        <label htmlFor="">

                                            <span>Yubikey Code</span>
                                            <span>Email Code</span>
                                            <span>This method of two factor authentication is not supported</span>
                                            <span>Google Authenticator</span>
                                            <span>SMS Code</span>

                                        </label>

                                        <div>

                                            <input className="form-control ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text"/>

                                            <div className="help-block mbn alt-font f-14">

                                                <span>

                                                </span>

                                            </div>

                                            <p className="form-control-static ng-hide">

                                                <img src={spinner} alt="spinner"/>

                                                <a href="">Resend</a>

                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <div className="group full mt-15">

                                    <button className="button-primary button-heavy ladda-button">

                                        <span>

                                            <span className="ladda-label">Log in</span>

                                            <span className="ladda-spinner">
                                                <div className="spinner">

                                                </div>
                                            </span>
                                        </span>

                                    </button>

                                </div>

                            </fieldset>

                        </form>

                        <div className="ptl flex-between">

                            <div>

                                <a href="">
                                    Log in via Mobile
                                </a>

                            </div>

                            <div>
                                <span>Having some trouble?</span>
                                &nbsp;
                                <a href="">View Options</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex-row flex-center flex-column-mobile flex-between bc-logo-footer width-100 width-100-tablet">



            </div>

        </div>
    }

}