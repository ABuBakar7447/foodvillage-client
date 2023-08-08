import { useEffect, useState } from "react";
import Title from "../../../Component/Title/Title";


const Recommanded = () => {
    const [menu, setmenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(items => items.category === 'offered');
                setmenu(popularMenu)
            })
    }, [])
    return (
        <div>
            <Title heading={"Should Try"} subheading={"Our Recommandes"}></Title>
            
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
                {
                    menu.slice(1, 4).map(item =>
                        <div key={item._id}>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body h-[228px] flex items-center text-center flex-col">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.recipe}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline bg-slate-200 text-black border-yellow-600 border-0
                                         border-b-4">Order Food</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Recommanded;