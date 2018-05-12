import React from 'react';
import './EtherTransactions.scss';
import TransactionFeed from "./TransactionFeed";

export  default function EtherTransactions() {

    return (

        <div className="transactions">

            <div className="filter-bar flex-center hidden-md hidden-lg">

            </div>

            <div className="filter-bar flex-center hidden-xs hidden-sm">

                <div className="flex-between width-100">

                    <div className="first flex-row flex-center">

                        <div className="filter-buttons">

                            <a href="" className="black em-500 upper">All</a>

                            <a href="" className="black em-500 upper">Sent</a>

                            <a href="" className="black em-500 upper active">Received</a>

                        </div>
                    </div>

                    <div className="second flex-center flex-end">

                        <a href="">
                            <span>Export Private Key</span>
                        </a>

                        <div className="dropdown ng-hide">

                        </div>

                        <div className="filter-search input-group width-60">

                            <input type="text"/>
                            <i className="ti-search">

                            </i>
                        </div>

                    </div>


                </div>

            </div>

            <TransactionFeed />

        </div>
    )

}