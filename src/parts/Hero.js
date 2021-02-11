import React from 'react'

import banner from 'assets/images/hero-banner.jpg'
import imgHero from 'assets/images/img-hero.png'
import imgFrame from 'assets/images/img-hero-frame.jpg'
import Button from 'elements/Button';

function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <section className="">
            {/* <div className="banner" style={{ backgroundImage: `url(${banner})` }} > */}
            <div className="banner">
                <img style={{ width: "100%", height: "100%"}} src={banner} alt="" />
            </div>
            <div className="container pt-5 ">
                <div className="row align-items-center hero-img" style={{marginTop: "200px"}}>
                    <div className="col-auto pr-4 hero-text" style={{ width: 530 }}>
                        <h1 className=" line-height-1 mb-3 text-white">
                            Time to forget work, <br />
                                and Start Holiday
                            </h1>
                        <p className="mb-4 font-weight-light text-gray-300 w-75" style={{ lineHeight: "170%" }}>
                            We provide what you need to enjoy your holiday with family. Time
                            to make another memorable moments.
                            </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                            </Button>
                    </div>
                    <div className="col-6 pl-5 wrap-hero-img">
                        <div className="wrap-hero" style={{ width: 520, height: 410 }}>
                            
                                
                            <img
                                src={imgHero}
                                alt="Room With couches"
                                className="img-fluid position-absolute"
                                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />

                            
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Hero
