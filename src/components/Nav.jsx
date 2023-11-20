import React from "react";
import { headerLogo, logitechHeaderLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={logitechHeaderLogo}
                        alt="Logo"
                        width={230}
                        height={80}
                    />
                </a>
                <ul className="flex-1 flex justify-end items-center gap-16 mr-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-white font-medium"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} width={25} height={25} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
