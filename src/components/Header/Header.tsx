import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ROTES } from "../../routes/constants";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  
    };

    return (
        <>
            <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                    <Link to={ROTES.HOME} className='hover:text-[#46515e] text-[#46515e] block font-bold text-[20px]'>MOVIES DB</Link>
                    <button onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.5 7a1 1 0 000 2h15a1 1 0 100-2h-15zM2.5 11a1 1 0 000 2h15a1 1 0 100-2h-15zM2.5 15a1 1 0 000 2h15a1 1 0 100-2h-15z" />
                            </svg>
                        )}
                    </button>
                    <div className={`${isMenuOpen ? "block" : "hidden"} lg:block`}>
                        <ul className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li><NavLink to={ROTES.HOME} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>HOME</NavLink></li>
                            <li><NavLink to={ROTES.POPULAR} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>POPULAR</NavLink></li>
                            <li><NavLink to={ROTES.RATED} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>TOP RATED</NavLink></li>
                            <li><NavLink to={ROTES.PLAYING} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>NOW PLAYING</NavLink></li>
                            <li><NavLink to={ROTES.FAVORITE} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>MY FAVORITES</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
