import React from 'react';
import './AboutTop.scss';


export  default function AboutTop() {

    return (

        <div className="banner flex-center flex-justify flex-column center">

            <h1 className="em-100 white uppercase lm-title lh1 lh1-tablet mtl">

            </h1>

            <p className="em-300 light-blue type-h5 ptm container-xs mbml hidden-xs">
                Blockchain is the world's leading software platform for digital assets. Offering the largest production blockchain platform in the world, we are using new technology to build a radically better financial system. Our software has powered over 100M transactions and empowered users in 140 countries across the globe to transact quickly and without costly intermediaries. We also offer tools for developers and real time transaction data for users to analyze the burgeoning digital economy.
            </p>

            <p className="em-300 light-blue type-h5 ptm container-xs mbml visible-xs">
                Blockchain is the world's leading software platform for digital assets.
            </p>
        </div>
    )

}