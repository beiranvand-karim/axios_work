import React from 'react';
// import whiteBlockChain from '../assets/img/white-blockchain-f1208a2b904ce045df3239b1922104bd3fc6a7c1.svg';
// import blueLogo from '../assets/img/blue-logo-ea5f627851cb67fcdb31b3907dd0f7ddcd7ea4cf.svg';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import NewLogIn from "./NewLogIn";
import './SignUp.scss';

class SignUp extends React.Component {

    render() {

        return <Router>

            <div className="new-login-component overflow-scroll flex-justify flex-center">

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
                                        Create your Wallet
                                    </span>

                                        <span className="f-24 lh1 ng-hide" style={{display: 'none'}}>Logged out</span>

                                        <span>
                                         <Link to="/log-in">Login</Link>
                                            &nbsp;
                                        <span>or</span>


                                    </span>

                                    </div>

                                    <p className="alt-font f-16">Sign up for a free wallet below</p>

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

                                            <label htmlFor="" className="Password">Password</label>

                                            <div>

                                                <input className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" type="text"/>

                                                <div className="help-block mbn alt-font f-14">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="group mb-15">

                                        <div className="item">

                                            <label htmlFor="" className="Password">New Password</label>

                                            <div>

                                                <input className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" type="text"/>

                                                <div className="help-block mbn alt-font f-14">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="group mb-15">

                                        <div className="item">

                                            <label htmlFor="" className="Password">Confirm Password</label>

                                            <div>

                                                <input className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" type="text"/>

                                                <div className="help-block mbn alt-font f-14">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="group mb-20">

                                        <div className="item check">

                                            <input type="checkbox" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"/>

                                            <label className="em-300 mbn mls right-align" htmlFor="">
                                                <a href="">Terms of Service</a>
                                                I have read and agree to the
                                            </label>
                                        </div>
                                    </div>

                                    <div className="group full mt-15">

                                        <button className="button-primary button-heavy ladda-button">

                                        <span>

                                            <span className="ladda-label">Continue</span>

                                            <span className="ladda-spinner">
                                                <div className="spinner">

                                                </div>
                                            </span>
                                        </span>

                                        </button>

                                    </div>

                                </fieldset>

                            </form>

                        </div>

                    </div>

                </div>

                <div className="flex-row flex-center flex-column-mobile flex-between bc-logo-footer width-100 width-100-tablet">



                </div>

                <Switch>
                    <Route path="/log-in" component={NewLogIn} />
                </Switch>

            </div>
        </Router>

    }

}

export default SignUp;
