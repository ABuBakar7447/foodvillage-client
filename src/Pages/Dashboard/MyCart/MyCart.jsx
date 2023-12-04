import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import Title from "../../../Component/Title/Title";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = (cart.reduce((sum, item) => item.price + sum, 0)).toFixed(2);

    const handleDelete = product => {
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
                fetch(`https://tame-puce-seagull-toga.cyclic.app/carts/${product._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
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
                <title>MyCart</title>
            </Helmet>
            <Title heading={'My Cart'} subheading={'Wants More'}></Title>

            <div className="bg-white lg:px-24 lg:py-10 my-16 rounded text-black w-full">
                <div className="flex justify-between my-5 lg:text-[22px]">

                    <p>Total Item: {cart.length}</p>
                    <p>Total Cost: {total}</p>
                    <Link to='/dashboard/payment'>
                        <button className="btn border-none text-white bg-[#D1A054] btn-sm">Pay</button>
                    </Link>
                </div>

                <div>
                    <div className="">
                        <table className="table">
                            {/* head */}
                            <thead className="text-center bg-[#D1A054] text-white">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Food Image</th>
                                    <th>Food Name</th>
                                    <th> Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            <tbody className="text-center">
                                {
                                    cart.map((product, index) => <tr key={product._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {product.name}
                                        </td>
                                        <td>{product.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(product)}
                                                className="btn text-white bg-red-600 btn-square btn-sm btn-outline">
                                                <Icon icon="clarity:trash-solid" />
                                            </button>
                                        </th>
                                    </tr>)
                                }
                                {/* row 1 */}


                            </tbody>
                            {/* foot */}


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;