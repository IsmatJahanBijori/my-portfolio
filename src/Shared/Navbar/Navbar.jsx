import React, { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { BsMenuUp } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-slate-300 shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <NavLink to='/'>
                        <h2 className="text-2xl text-[#64CCC5] font-bold">PORTFOLIO</h2>
                    </NavLink>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <GiCrossMark />
                            ) : (
                                <BsMenuUp />
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-800 font-semibold">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600 font-semibold">
                                <NavLink to='/projectDetails'>Projects</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600 font-semibold">
                                <NavLink to='/about'>About Me</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600 font-semibold">
                                <NavLink to="/contact">Contact with me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;