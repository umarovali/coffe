import React from 'react';
import Links from "./Link/Links";
import Logo from "../../assets/images/Logo.png";
import LogoIcon from "../../assets/images/Logo_icon.png";

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_left_right">
                    <img className='header_logo' src={Logo} alt="" />

                    <nav>
                        <ul className="header_right">
                            <Links link={"/"} text={"home"} />
                            <Links link={"/about-us"} text={"ABOUT US"} />
                            <Links link={"/create"} text={"Create your plan"} />
                        </ul>
                    </nav>
                </div>
            </div>
            <img className='logo_icon' src={LogoIcon} alt="" />
        </header>
    )
}
