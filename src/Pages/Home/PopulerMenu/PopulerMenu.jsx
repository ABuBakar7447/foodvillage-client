import { useEffect, useState } from "react";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import Title from "../../../Component/Title/Title";


const PopulerMenu = () => {
    const [menu, setmenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popuarItems = data.filter(items=> items.category==='popular');
           setmenu(popuarItems) 
        })
    },[])
    return (
        <div className="my-12">
            <Title heading={"Check It Out"} subheading={"From Our Menu"}></Title>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                
                    {
                        menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                    }
                
            </div>
        </div>
    );
};

export default PopulerMenu;