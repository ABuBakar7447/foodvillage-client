import { useEffect, useState } from "react";
import Title from "../../../Component/Title/Title";
import MenuItem from "../../../Component/MenuItem/MenuItem";


const Offered = () => {
    const [menu, setmenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popuarItems = data.filter(items=> items.category==='offered');
           setmenu(popuarItems) 
        })
    },[])
    return (
        <div className="my-12 p-5">
            <Title heading={"Check It Out"} subheading={"TODAY'S OFFER"}></Title>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                
                    {
                        menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                    }
                
            </div>
        </div>
    );
};

export default Offered;