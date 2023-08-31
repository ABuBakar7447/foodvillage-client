import { NavLink, Outlet } from "react-router-dom";
import { Icon } from '@iconify/react';
import useCart from "../../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="drawer lg:drawer-open uppercase font-semibold">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/userhome'><Icon icon="ion:home" /> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><Icon icon="simple-line-icons:calender" /> Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/payment'><Icon icon="zondicons:wallet" /> Payment History</NavLink></li>


                        <li><NavLink to='/dashboard/mycart' className="content">
                            <Icon icon="mdi:cart" />
                            My Cart <span className=" badge badge-secondary">+{cart?.length || 0}</span>
                            
                        </NavLink></li>


                        <li><NavLink to='/dashboard/review'><Icon icon="material-symbols:rate-review-rounded" /> Add Review</NavLink></li>
                        <li><NavLink to='/dashboard/booking'><Icon icon="uim:calender" /> My Booking</NavLink></li>

                        <div className="divider h-[2px] bg-black"></div>

                        <li><NavLink to='/'><Icon icon="ion:home" /> Home</NavLink></li>
                        <li><NavLink to='/menu'><Icon icon="ion:menu" /> Menu</NavLink></li>
                        <li><NavLink to='/'><Icon icon="solar:cart-bold" /> Shop</NavLink></li>
                        <li><NavLink to='/'><Icon icon="ep:message" /> Contact</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;