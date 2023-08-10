
import MenuItem from "../../../Component/MenuItem/MenuItem";
import Title from "../../../Component/Title/Title";
import useMenu from "../../../hooks/useMenu";


const PopulerMenu = () => {
    
    const [menu] = useMenu();
    const popuarItems = menu.filter(items=> items.category==='popular')
    
    return (
        <div className="my-12 p-5">
            <Title heading={"Check It Out"} subheading={"From Our Menu"}></Title>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                
                    {
                        popuarItems.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                    }
                
            </div>
        </div>
    );
};

export default PopulerMenu;