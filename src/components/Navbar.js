import React from 'react';
import image1 from '../image1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = ()=> {
    //const logo = {
    //    width: "100px",
    //    height: "100px"
    //}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={image1}  alt=""
        /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./AboutMe">about me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./Services">services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./HowWork">how work</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./Portfolio">portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./Contact">contacts</a>
            </li>
            
            </ul>
            
        </div>

    </div>
        </nav>
    )
}

export default Navbar;

