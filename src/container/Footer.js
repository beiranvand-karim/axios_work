import React from 'react';
import {Link} from "react-router-dom";
import img from '../assets/images/bc-name-and-logo-dark-blue.svg';
import facebook from '../assets/img/facebook-footer-logo.svg';
import twitter from '../assets/img/twitter-footer-logo.svg';
import apple from '../assets/img/apple-footer-logo.svg';
import android from '../assets/img/android-footer-logo.svg';
import linkedin from '../assets/img/linkedin-footer-logo.svg';
import './Footer.scss';

class Footer extends React.Component {
    render(){
        return(

            <div>
                <footer>

                    <div className="flex-container">

                        <div className="footer-logo">

                            <img src={img} alt="" />

                        </div>

                        <div>
                            <h6>Products</h6>

                            <ol>

                                <li>
                                    <a href="/">Wallet</a>
                                </li>
                                <li>
                                    <a href="/">API</a>
                                </li>
                                <li>
                                    <a href="/">Business</a>
                                </li>
                                <li>
                                    <a href="/">Thunder</a>
                                </li>
                                <li>
                                    <a href="/">Research</a>
                                </li>
                                <li>
                                    <a href="/">Explorer</a>
                                </li>
                                <li>
                                    <a href="/">Charts</a>
                                </li>
                                <li>
                                    <a href="/">Markets</a>
                                </li>
                                <li>
                                    <a href="/">Stats</a>
                                </li>

                            </ol>
                        </div>

                        <div>

                            <h6>Company</h6>

                            <ol>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <a href="/">Team</a>
                                </li>
                                <li>
                                    <a href="/">Careers</a>
                                </li>
                                <li>
                                    <a href="/">Interviewing</a>
                                </li>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">Press</a>
                                </li>

                            </ol>
                        </div>

                        <div>

                            <h6>Support</h6>

                            <ol>

                                <li>
                                    <a href="/">Help Center</a>
                                </li>
                                <li>
                                    <a href="/">Tutorials</a>
                                </li>
                                <li>
                                    <a href="/">Learning Portal</a>
                                </li>
                                <li>
                                    <a href="/">Status</a>
                                </li>

                            </ol>
                        </div>

                    </div>

                    <div className="flex-container">

                        <div className="copyright">

                            <span>©&nbsp;2018 Blockchain Luxembourg S.A. All Rights Reserved.</span>

                            <a href="/" target="_blank">Privacy</a>
                            <a href="/" target="_blank">Terms</a>
                            <a href="/" rel="noopener noreferrer" target="_blank">Law Enforcement Guide</a>
                            <a href="/" target="_blank">Advertise</a>

                        </div>

                        <div className="social-media">

                            <a href="https://play.google.com/store/apps/details?id=piuk.blockchain.android&amp;hl=en" rel="noreferrer nofollow" >
                                <img alt="Android App Icon" src={android} />
                            </a>

                            <a href="https://itunes.apple.com/us/app/blockchain-bitcoin-wallet/id493253309?mt=8" rel="noreferrer nofollow">
                                <img alt="iOS App Icon" src={apple} />
                            </a>

                            <a href="https://twitter.com/blockchain" rel="noreferrer nofollow">
                                <img alt="Twitter Icon" src={twitter} />
                            </a>

                            <a href="https://www.linkedin.com/company/blockchain" rel="noreferrer nofollow">
                                <img alt="LinkedIn Icon" src={linkedin} />
                            </a>

                            <a href="https://www.facebook.com/blockchain/" rel="noreferrer nofollow">
                                <img alt="Facebook Icon" src={facebook} />
                            </a>

                        </div>

                    </div>
                </footer>
            </div>

        )
    }
}
export default Footer;
