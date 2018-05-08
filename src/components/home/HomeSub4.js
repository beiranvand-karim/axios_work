import React from 'react';
import newCityGraphic from '../../assets/img/new-city-graphic.png';
import playButton from '../../assets/img/play-button.png';
import './HomeSub4.scss';

export default function HomeSub4() {

    return (


        <div className="HomeSub4 bg-grey pvvl">

            <div className="flex-row flex-column-mobile flex-center-mobile flex-justify-mobile display-block-tablet container pvvl">

                <div className="flex-column prvl flex-1 center-text-mobile">

                    <h2 className="em-100 lh1 type-mlrg ls-title uppercase dark-blue">
                        We're living in a digital world
                    </h2>

                    <p className="em-200 medium-blue type-h5 mtm">
                        It's time money caught up. Digital assets, like bitcoin and ether, allow users to transact directly without any third-party intermediary.
                    </p>

                </div>

                <div className="flex-1 bg-ultralight-blue pos-rel">

                    <div className="hidden-xs">
                        <img src={newCityGraphic} alt=""/>
                    </div>

                    <div className="pos-abs pos-res-mobile">
                        <div>

                            <video src="">
                                <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.mp4" type="video/mp4" />
                                <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.webm" type="video/webm"/>
                                <source src="https://storage.googleapis.com/bc_public_assets/video/legacy-what-is-bitcoin-TEMP.ogv" type="video/ogg" />
                            </video>

                        </div>
                    </div>

                    <div className="pointer flex-center flex-justify">

                        <img src={playButton} alt=""/>
                        <span className="em-300 uppercase type-p center-text-mobile plm">See How It Works</span>
                    </div>


                </div>

            </div>

        </div>

    )

}