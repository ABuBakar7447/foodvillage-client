import Cover from "../../../Component/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import MenuBanner from "../MenuBanner/MenuBanner";
import Offered from "../Offered/Offered";
import { Helmet } from 'react-helmet-async';

import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'
import MenuItem from "../../../Component/MenuItem/MenuItem";



const OurMenu = () => {
    const [menu, loading] = useMenu();
    const dessertItem = menu.filter(item=>item.category==='dessert')
    const saladItem = menu.filter(item=>item.category==='salad')
    const pizzaItem = menu.filter(item=>item.category==='pizza')
    const soupItem = menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu Page</title>
            </Helmet>
            <MenuBanner></MenuBanner>
            <Offered></Offered>

            <div>
                <Cover img={img1} heading={"Dessert"}></Cover>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  dessertItem.map(dessert=><MenuItem key={dessert._id} item={dessert}></MenuItem>)  
                }
                </div>
            </div>
        </div>
    );
};

export default OurMenu;