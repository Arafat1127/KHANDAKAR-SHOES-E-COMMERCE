import React, { useContext, useState, useEffect } from 'react';
import logo from "../../../assets/images/shoe-logo.png";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import { motion } from 'framer-motion';


const Header = () => {
    const { name } = useContext(AuthContext);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();
    // Condition to show the second navbar
    const showSecondNavbar = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/men-products' || location.pathname === '/women-products' || location.pathname === '/children-products' || location.pathname === '/accessories';

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = (
        <React.Fragment>
            <li className='text-white font-bold'>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li className='text-white font-bold'>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li className='text-white font-bold'>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li className='text-white font-bold'>
                <NavLink to='/logIn'>Log In</NavLink>
            </li>
            <li className='text-white font-bold'>
                <NavLink to='/orders'>
                    <svg className="w-6 h-6 cart-count text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>
                </NavLink>
            </li>
        </React.Fragment>
    );

    return (
        <div>
            {/* First Navbar */}
            <div className="navbar h-[100px]  w-full bg-gray-900 z-50 shadow-md justify-between">
                <div className="navbar-start justify-between w-full lg:justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn border-none bg-orange-500 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* For small devices */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img className='w-[180px] h-[auto] md:w-[320px] object-contain overflow-hidden' src={logo} alt="" />
                    </Link>
                </div>
                {/* For large devices */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                    <div className="dropdown dropdown-end mx-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">{name}</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Second Navbar (Fixed After Scroll) */}
            {showSecondNavbar && (
                <div className={`flex justify-evenly items-center fixed  left-0 z-50 bg-white w-full shadow-md py-[10px] ${scrolling ? 'top-0' : 'top-[100px]'}`}>
                    <motion.div className='w-[800px] flex justify-evenly items-center font-bold'>
                        <div
                            className=''
                            onMouseEnter={() => setHoveredItem('men')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/men-products" className='text-black cursor-pointer'>
                                MEN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'men' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('women')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/women-products" className=''>
                                WOMEN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'women' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('children')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/children-products" className=''>
                                CHILDREN
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'children' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                        <div
                            className='text-black'
                            onMouseEnter={() => setHoveredItem('accessories')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link to="/accessories" className=''>
                                ACCESSORIES
                            </Link>
                            <div
                                className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'accessories' ? 'w-10/12' : 'w-0'}`}
                            ></div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Header;





// import React, { useContext, useState } from 'react';
// import logo from "../../../assets/images/shoe-logo.png";
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../../context/UserContext';
// import { motion } from 'framer-motion';

// const Header = () => {
//     const { name } = useContext(AuthContext);
//     const [hoveredItem, setHoveredItem] = useState(null);
//     const location = useLocation();
//     const showSecondNavbar = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/men-products' || location.pathname === '/women-products' || location.pathname === '/children-products' || location.pathname === '/accessories';
//     const menuItems = (
//         <React.Fragment>
//             <li className='text-white font-bold'>
//                 <NavLink to='/home'>Home</NavLink>
//             </li>
//             <li className='text-white  font-bold'>
//                 <NavLink to='/about'>About</NavLink>
//             </li>
//             <li className='text-white  font-bold'>
//                 <NavLink to='/contact'>Contact</NavLink>
//             </li>
//             <li className='text-white  font-bold'>
//                 <NavLink to='/logIn'>Log In</NavLink>
//             </li>
//             <li className='text-white  font-bold'>
//                 <NavLink to='/orders'>
//                     <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
//                     </svg>
//                 </NavLink>
//             </li>
//         </React.Fragment>
//     );

//     return (
//         <div>
//             <div className="navbar h-[100px] fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md justify-between ">
//                 <div className="navbar-start justify-between w-full lg:justify-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn border-none bg-orange-500 lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         {/* For small devices */}
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {menuItems}
//                         </ul>
//                     </div>
//                     <Link to="/" className="">
//                         <img className='w-[180px] h-[auto]  md:w-[320px] object-contain overflow-hidden' src={logo} alt="" />
//                     </Link>
//                 </div>
//                 {/* For large devices */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">{menuItems}</ul>

//                     <div className="dropdown dropdown-end">
//                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                             <div className="w-10 rounded-full">
//                                 <img
//                                     alt="Tailwind CSS Navbar component"
//                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//                             </div>
//                         </div>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li>
//                                 <a className="justify-between">
//                                     Profile
//                                     <span className="badge">{name}</span>
//                                 </a>
//                             </li>
//                             <li><a>Settings</a></li>
//                             <li><a>Logout</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             {showSecondNavbar && (
//                 <div className=''>
//                     <div className='flex justify-evenly items-center fixed top-[100px] left-0 z-50 bg-white w-full shadow-md py-[10px] '>
//                         <motion.div className='w-[800px] flex justify-evenly items-center font-bold'>
//                             <div
//                                 className=''
//                                 onMouseEnter={() => setHoveredItem('men')}
//                                 onMouseLeave={() => setHoveredItem(null)}
//                             >
//                                 <Link to="/men-products" className='text-black cursor-pointer'>
//                                     MEN
//                                 </Link>
//                                 <div
//                                     className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'men' ? 'w-10/12' : 'w-0'
//                                         }`}
//                                 ></div>
//                             </div>
//                             <div
//                                 className='text-black'
//                                 onMouseEnter={() => setHoveredItem('women')}
//                                 onMouseLeave={() => setHoveredItem(null)}
//                             >
//                                 <Link to="/women-products" className=''>
//                                     WOMEN
//                                 </Link>
//                                 <div
//                                     className={`border-t-2 border-red-500 rounded-xl  transition-all duration-300 ease-in-out ${hoveredItem === 'women' ? 'w-10/12' : 'w-0'
//                                         }`}
//                                 ></div>
//                             </div>
//                             <div
//                                 className='text-black'
//                                 onMouseEnter={() => setHoveredItem('children')}
//                                 onMouseLeave={() => setHoveredItem(null)}
//                             >
//                                 <Link to="/children-products" className=''>
//                                     CHILDREN
//                                 </Link>
//                                 <div
//                                     className={`border-t-2 border-red-500 rounded-xl transition-all duration-300 ease-in-out ${hoveredItem === 'children' ? 'w-10/12' : 'w-0'
//                                         }`}
//                                 ></div>
//                             </div>
//                             <div
//                                 className='text-black'
//                                 onMouseEnter={() => setHoveredItem('accessories')}
//                                 onMouseLeave={() => setHoveredItem(null)}
//                             >
//                                 <Link to="/accessories" className=''>
//                                     ACCESSORIES
//                                 </Link>
//                                 <div
//                                     className={`border-t-2 border-red-500 rounded-xl  transition-all duration-300 ease-in-out ${hoveredItem === 'accessories' ? 'w-10/12' : 'w-0'
//                                         }`}
//                                 ></div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default Header;

