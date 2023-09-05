import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";
import { isError, useQuery } from "@tanstack/react-query";


const Allusers = () => {
    // const [users, setUser] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUser(data);
    //             setLoading(false)
    //         })
    // }, [])

    

    const {refetch, data: users = []} = useQuery({
        queryKey:['user'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/user');
            return res.json();
        }

    })

    const handleAdmin = user => {
        console.log(user)
    }


    const handleDelete = user => {
        console.log(user)
    }

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>All Users</title>
            </Helmet>

            <Title heading={'How many'} subheading={'Manage ALL Users'}></Title>

            <div className="overflow-x-auto bg-white lg:px-24 lg:py-10 my-16 rounded text-black w-full">
                <div className="flex justify-center my-5 lg:text-[22px]">

                    <p>Total User: {users.length}</p>
                    
                </div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ?
                                        'Admin'
                                        :
                                        <button onClick={() => handleAdmin(user)}
                                            className="btn text-white bg-[#D1A054] btn-square btn-sm btn-outline">
                                            <Icon icon="fa6-solid:user-shield" />
                                        </button>}

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)}
                                        className="btn text-white bg-red-600 btn-square btn-sm btn-outline">
                                        <Icon icon="clarity:trash-solid" />
                                    </button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;