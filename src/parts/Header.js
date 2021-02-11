import React from 'react'
import BrandIcon from 'parts/IconText'
import Button from 'elements/Button'

export default function Header(props) {

    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? " active" : "";
    }
    
    if (props.isCentered)
    return (
            <header className="spacing-sm detail checkout-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            <span className="text-header">Va</span>canza.
                        </Button>
                    </nav>
                </div>
            </header>
    );

    if (props.isDetailPage)
    return (
        <header className="detail" >
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <BrandIcon />
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link-detail" type="link" href="/">
                                        Home
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link-detail" type="link" href="/browse-by">
                                        Browse By
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link-detail" type="link" href="/stories">
                                        Story
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link-detail" type="link" href="/agents">
                                        Agents
                            </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
    );

        return (
            <header className="">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <BrandIcon />
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/">
                                        Home
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/browse-by">
                                        Browse By
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/stories">
                                        Story
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/")}`}>
                                    <Button className="nav-link" type="link" href="/agents">
                                        Agents
                            </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )

}


