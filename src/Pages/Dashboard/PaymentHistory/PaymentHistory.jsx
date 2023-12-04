import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";


const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data = [] } = useQuery({
        queryKey: ['payment-history', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return res.data;
        }
    })

    
    return (
        <div className="w-full p-5">
            <Helmet>
                <title>Payment History</title>
            </Helmet>

            <Title heading={'Payment'} subheading={'History'}></Title>
            <div className="bg-white  my-16 rounded text-black w-full">
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead className="text-center bg-[#D1A054] text-white">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Food</th>
                            <th>Price</th>
                            <th>Transection Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((item, index)=>
                                <tr key={item._id}>
                                <th>{index+1}</th>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item.itemNames.map((food,index)=><p key={index}><span className="text-blue-700">{index+1}.</span> {food}</p>)
                                    }
                                </td>
                                <td className="text-blue-600">{item.price}</td>
                                <td className="text-green-700">{item.transectionID}</td>
                                <td>{item.date}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default PaymentHistory;