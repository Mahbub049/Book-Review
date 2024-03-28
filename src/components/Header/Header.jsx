import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const list = 
    <>
        <li className="mr-4 text-lg"><NavLink to={"/"}>Home</NavLink></li>
        <li className="mr-4 text-lg"><NavLink to={"/listed"}>Listed Books</NavLink></li>
        <li className="mr-4 text-lg"><NavLink to={"/pages"}>Pages to Read</NavLink></li>
        <li className="mr-4 text-lg"><NavLink to={"/blogs"}>Blog</NavLink></li>
        <li className="mr-4 text-lg"><NavLink to={"/faq"}>Contact Us and FAQ</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 my-[52px]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                    {list}
                </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-[28px] font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {list}
                </ul>
            </div>
            <div className="navbar-end  font-semibold">
                <a className="btn text-lg text-white bg-[#23BE0A] mr-4">Sign In</a>
                <a className="btn text-lg text-white bg-[#59C6D2]">Sign Up</a>
            </div>
            </div>
    );
};

export default Header;