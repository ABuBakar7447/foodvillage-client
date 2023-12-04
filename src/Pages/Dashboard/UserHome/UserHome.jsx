import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
    const { user, loading } = useAuth();
    const [menu] = useMenu();
    const [axiosSecure] = useAxiosSecure()
    
    const {data:stats=[]} = useQuery({
        queryKey:['user-dashboard-stats',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user-dashboard-stats?email=${user?.email}`)
            return res.data;
        }
    })

    

    
    
    const totalquntity = stats[1]?((stats[1].reduce((sum, item) => item.quantity + sum, 0))):0;

    
    
    return (
        <div className="w-full p-10 m-0">
            <Helmet>
                <title>User Dashboard</title>
            </Helmet>

            <Title heading={`Hi ${user.displayName}`} subheading={'Welcome Back'}></Title>
            <div>
                <div className="flex items-center justify-center my-16">

                    <div className="w-1/4 w- h-24 bg-[#BB34F5] ml-2 rounded">

                        <div className="flex justify-evenly items-center">
                            <Icon className="w-10 h-10 text-white" icon="ion:wallet" />
                            <div className="text-white m-2 text-xl text-center">
                                <p>{menu.length}</p>
                                <p>Menu</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 h-24 bg-[#D3A256] ml-2 rounded">
                        <div className="flex justify-evenly items-center">
                            <Icon className="w-10 h-10 text-white" icon="icon-park-twotone:shop" />
                            <div className="text-white m-2 text-xl text-center">
                                <p>{totalquntity}</p>
                                <p>Shop</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 h-24 bg-[#FE4880] ml-2 rounded ">
                        <div className="flex justify-evenly items-center">
                            <Icon className="w-10 h-10 text-white" icon="gg:phone" />
                            <div className="text-white m-2 text-xl text-center">
                                <p>3</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>


            <div className="flex">
                <div className="avatar w-1/2 h-96 bg-[#FFEDD5] flex flex-col justify-center items-center rounded-sm">
                    <div className="w-32 rounded-full border-2 border-yellow-600">
                        <img src={user.photoURL} />
                        
                    </div>
                    <p className="mt-5 text-black">{user.displayName}</p>
                </div>

                

                <div className="w-1/2 ">
                    <div className="bg-[#FEF9C3] h-96 flex flex-col justify-center items-center text-black">
                        <div>
                        <p className="text-2xl font-serif my-2">Your Activites</p>
                        <p className="">Booking: {stats[0]?.length}</p>
                        <p className="">Reviews:</p>
                        <p className="">Order: {totalquntity}</p>
                        
                        <p className="">Payment: {stats[1]?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;