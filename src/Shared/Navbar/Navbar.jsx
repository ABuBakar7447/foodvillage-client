import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from '@iconify/react';
import useCart from "../../hooks/useCart";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogout = () => {
        logout()
            .then = (() => { })
                .catch(error => console.log(error))
    }

    const naboptions =
        <>
            <li><Link to='/' className="mt-2">Home</Link></li>
            <li><Link to='/menu' className="mt-2"> Menu</Link></li>
            <li><Link to='/shop/salad' className="mt-2">Our Shop</Link></li>
            <li><Link to='/secret' className="mt-2">Secret</Link></li>


            {
                user?.email ?
                    <>

                        <li><Link to='' className="mt-2" onClick={handleLogout}>LogOut</Link></li>

                    </>
                    :
                    <>
                        <li><Link to='/login' className="mt-2">Sign IN</Link></li>
                    </>
            }
            <li>
                <Link to='/' className="">

                    {user?.photoURL ?
                        <>
                            <div className="avatar">
                                <div className="w-9 h-9 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <Icon className="w-7 h-7 mt-1" icon="iconamoon:profile-fill" />
                        </>}

                </Link>
            </li>

            <li>
                <Link to='/dashboard/mycart' className="flex mt-2">
                    
                        <Icon className="w-5 h-5" icon="mdi:cart" />
                        <div className=" badge badge-secondary">+{cart?.length || 0}</div>
                    
                </Link>
            </li>


        </>
    return (
        <div>
            <div className="navbar fixed z-10 opacity-80 max-w-screen-xl mx-auto text-[#A6ADBA] font-bold bg-[#0d0e12]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {naboptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Village</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {naboptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;