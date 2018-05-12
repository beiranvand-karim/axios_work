import React from 'react';
import './TransactionFeed.scss';

export default function TransactionFeed() {

    return (

        <div className="transaction-feed overflow-scroll">

            <div className="flex-center flex-justify flex-column">

                <div className="flex-column flex-column tablet bg-footer-blue ng-hide">

                </div>

                <div className="flex-column mbl border-bottom black ph-25 center mtvl">

                    <div>

                        <i className="icon-tx h3 mrm">

                        </i>

                        <h3 className="em-300">Your Transactions</h3>

                    </div>

                    <p>Transactions occur when you receive and send ether</p>

                </div>

                <div className="flex flex-center-mobile">

                    <div className="btn-group">

                        <button className="btn button-default type-h5 pos-rel">

                            <i className="mrs media-middle icon-ExchangeTab">

                            </i>

                            <span className="em-300 upper">Get Ether</span>

                        </button>
                    </div>

                </div>

            </div>

            <div className="flex-center flex-justify flex-column mtl ng-hide">

            </div>

            <div className="row">

            </div>

            <div className="row mtm loading ng-hide">

            </div>

        </div>
    )

}