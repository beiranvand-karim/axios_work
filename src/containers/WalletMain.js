import React from 'react';



export default function WalletMain(){

    return (


        <div className="main-container">


            // top


            <div className="top-view">

                <div className="flex-center flex-between height-100 width-100-mobile">

                    <div className="flex-column flex-center-mobile width-100-mobile">


                        <div className="flex-baseline heavy hidden-xs">


                            <h1 className="f-28 my-wallet flex upper mtn em-200">

                                Be your own bank.

                                <span className="reg pos-rel">®</span>

                            </h1>
                        </div>


                        <div className="visible-xs">

                        </div>


                        <div className="flex flex-center-mobile">

                            <button className="btn button-default button-short-wide type-h5 mrm">

                                <i className="mrs media-middle icon-send">

                                </i>


                                <span className="em-300">Send</span>


                            </button>

                            <div className="btn-group">

                                <button className="btn button-default button-short-wide type-h5 pos-rel">

                                    <i className="mrs media-middle icon-receive"></i>

                                    <span className="em-300">Request</span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            // bottom

            <div className="right-container flex flex-column">

            </div>

        </div>

    )
}