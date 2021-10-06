import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    function clickHndler() {
        console.log("contact button");
    }
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Web development and website promotions</h1>
                <Typed
                    className="typed-text"
                    strings={['Web Design', 'Web development','Social Media marketing']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="./Contact" className="btn-main-offer" onClick={clickHndler}>Contact me</a>
            </div>
        </div>

    )
}

export default Header;
