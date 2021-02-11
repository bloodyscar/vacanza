import React from 'react'

import Button from 'elements/Button'
import IconText from './IconText'

export default function Footer() {
    return (
        <>
        <footer className="foot">
            <div className="container">
                <div className="row">
                    <div class="col-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable
                    </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2" style={{color: "white"}}>For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/properties">Start Booking a room</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2" style={{color: "white"}}>Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/careers">Our Careers</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} type="link" href="/terms">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2" style={{color: "white"}}>Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <Button style={{color: "white"}} isExternal type="link" href="tel:+622122081996">+6221 - 2208 - 1996</Button>
                            </li>
                            <li className="list-group" style={{ marginTop: "5px"}}>
                                <span>Staycation. Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="col text-center copyrights">
            Coprright 2020 • All right reserved • Staycation
        </div>
        </>
    );
}
