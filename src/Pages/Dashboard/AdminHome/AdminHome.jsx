import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie} from 'recharts';
import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-dashboard-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-dashboard-stats');
            return res.data;
        }
    })


    const { data: chartdata = [] } = useQuery({
        queryKey: ['order-states'],
        queryFn: async () => {
            const res = await axiosSecure('/order-states');
            return res.data
        }
    })


    //barchart
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //piechart
    

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="w-full">
            <Helmet>
                <title>Admin DashBoard</title>
            </Helmet>

            <Title heading={'Welcome to'} subheading={'Admin Dashboard'}></Title>


            <div className="flex my-16">

                <div className="w-1/4 h-24 bg-[#BB34F5] ml-2 rounded">

                    <div className="flex justify-evenly items-center">
                        <Icon className="w-10 h-10 text-white" icon="ion:wallet" />
                        <div className="text-white m-2 text-xl text-center">
                            <p>{stats.revenues}</p>
                            <p>Revenue</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 h-24 bg-[#D3A256] ml-2 rounded">
                    <div className="flex justify-evenly items-center">
                        <Icon className="w-10 h-10 text-white" icon="bi:people-fill" />
                        <div className="text-white m-2 text-xl text-center">
                            <p>{stats.customer}</p>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 h-24 bg-[#FE4880] ml-2 rounded ">
                    <div className="flex justify-evenly items-center">
                        <Icon className="w-10 h-10 text-white" icon="mdi:food" />
                        <div className="text-white m-2 text-xl text-center">
                            <p>{stats.products}</p>
                            <p>Products</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 h-24 bg-[#6AAEFF] ml-2 rounded FE4880">
                    <div className="flex justify-evenly items-center">
                        <Icon className="w-10 h-10 text-white" icon="streamline:transfer-van-solid" />
                        <div className="text-white m-2 text-xl text-center">
                            <p>{stats.orders}</p>
                            <p>Orders</p>
                        </div>
                    </div>
                </div>


            </div>



            <div className="flex">

                {/* barchart */}
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartdata}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* Piechart */}
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={chartdata}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartdata.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;