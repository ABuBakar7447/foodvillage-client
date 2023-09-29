import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";
import useMenu from "../../../hooks/useMenu";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/menuitems/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                        }
                    })
            }




        })
    }
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>ManageItems</title>
            </Helmet>
            <Title heading={'Hurry Up'} subheading={'Manage All Items'} ></Title>

            <div>
                <div className="overflow-x-auto bg-white lg:px-16 lg:py-10 my-16 rounded text-black w-full">
                    <div className="flex justify-center my-5 lg:text-[22px]">

                        <p>Total Items: {menu.length}</p>

                    </div>
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <th>
                                    <button
                                        className="btn text-white bg-[#D1A054] btn-square btn-sm btn-outline">
                                        <Icon icon="clarity:note-line" />
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)}
                                        className="btn text-white bg-red-600 btn-square btn-sm btn-outline">
                                        <Icon icon="clarity:trash-solid" />
                                    </button>
                                </th>
                            </tr>)}



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;