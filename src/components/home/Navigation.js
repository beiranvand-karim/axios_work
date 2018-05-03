import React from 'react';
import './Navigation.scss';
import whiteBlockchain from '../../assets/img/white-blockchain.svg';

export default function Navigation() {

    return (

        <nav className="navigation">

            <ul className="igation">

                <li className="first">

                    <a href="">
                        <img src={whiteBlockchain} alt=""/>
                    </a>
                    <button>
                        <span>

                        </span>
                    </button>
                    <button>

                    </button>
                </li>

                <li className="with-children">
                    <a href="">Wallet</a>
                    <ul>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </li>
                <li className="with-children">

                    <a href="">DATA</a>
                    <ul>
                        <li>
                            <a href="">Charts</a>
                        </li>
                        <li>
                            <a href="">Stats</a>
                        </li>
                        <li>
                            <a href="">Markets</a>
                        </li>
                    </ul>
                </li>
                <li className="with-children">

                    <a href="">API</a>
                    <ul>
                        <li>
                            <a href="">Business</a>
                        </li>
                    </ul>
                </li>
                <li className="with-children">
                    <a href="">About</a>
                    <ul>

                        <li>
                            <a href="">Team</a>
                        </li>

                        <li>
                            <a href="">Careers</a>
                        </li>

                        <li>
                            <a href="">Press</a>
                        </li>

                        <li>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                </li>

                <li className="flex-space">

                </li>

                <li>
                    <form action="">
                        <input className="search-bar" placeholder="block, hash, transaction, etc..." name="search" type="text"/>
                    </form>
                </li>

                <li className="last">
                    <a className="wallet-button" href="" target="_blank">Get A Free Wallet</a>
                </li>

            </ul>
        </nav>
    )

}