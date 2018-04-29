import React from 'react';
import './HomeSub1.scss';
import playButton from '../../assets/img/play-button.png'

export default function HomeSub1() {

    return (

        <div className="HomeSub1 banner flex-center flex-justify flex-column center full-height">

            <div className="pos-abs">
                <div>
                    <video>
                        {/*<source src="https://storage.googleapis.com/bc_public_assets/video/blockchain-ad.mp4" type="video/mp4" />*/}
                        {/*<source src="https://storage.googleapis.com/bc_public_assets/video/blockchain-ad.webm" type="video/webm" />*/}
                        {/*<source src="https://storage.googleapis.com/bc_public_assets/video/blockchain-ad.ogv" type="video/ogg" />*/}
                    </video>
                </div>
            </div>

            <h1>
                The World Is Now
                <br/>
                Open For Business
            </h1>

            <p className="first">
                We are on a mission to build a more open, accessible, and fair financial future, one piece of software at a time. Our technology is revolutionizing the financial services industry by empowering millions across the globe to authenticate and transact immediately and without costly intermediaries.
            </p>

            <p className="second">
                We are on a mission to build a more open, accessible, and fair financial future, one piece of software at a time.
            </p>

            <div className="play-banner">

                <img className="play-button ptm-mobile" src={playButton} alt=""/>
                <p className="em-500 primary uppercase type-p mbn deskonly-mlm ptm-mobile">See How</p>
            </div>

        </div>

    )

}