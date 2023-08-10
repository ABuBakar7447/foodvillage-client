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
    const [menu] = useMenu();
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const saladItem = menu.filter(item => item.category === 'salad')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const soupItem = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu Page</title>
            </Helmet>
            <MenuBanner></MenuBanner>
            <Offered></Offered>


            {/* dessert food item show in menu page */}
            <div className="my-12 p-5">
                <Cover img={img1} heading={"Dessert"} subheading={"Indulge in decadence with our irresistible desserts, meticulously crafted to tantalize your taste buds, whether it's the velvety chocolate mousse or the classic creamy cheesecake, each bite is a journey of sweet bliss."}></Cover>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {
                        dessertItem.map(dessert => <MenuItem key={dessert._id} item={dessert}></MenuItem>)
                    }
                </div>

                <div className="flex items-center flex-col">
                    <button className="mt-2  hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Your Favourite Food</button>
                </div>
            </div>


            {/* Salad food item show in menu page */}
            <div className="my-12 p-5">
                <Cover img={img3} heading={"Salad"} subheading={"Elevate your palate with our vibrant salads, thoughtfully curated with crisp garden greens, farm-fresh vegetables, and delectable dressings, creating a refreshing medley of tastes that celebrates health and taste in every forkful."}></Cover>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {
                        saladItem.map(dessert => <MenuItem key={dessert._id} item={dessert}></MenuItem>)
                    }
                </div>

                <div className="flex items-center flex-col">
                    <button className="mt-2  hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Your Favourite Food</button>
                </div>

                
            </div>



            {/* Pizza food item show in menu page */}
            <div className="my-12 p-5">
                <Cover img={img2} heading={"Pizza"} subheading={"Indulge in our mouthwatering pizzas, expertly crafted with a perfect blend of premium cheeses, savory toppings, and our signature hand-tossed crust, delivering a delightful burst of flavors in every bite."}></Cover>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {
                        pizzaItem.map(dessert => <MenuItem key={dessert._id} item={dessert}></MenuItem>)
                    }
                </div>

                <div className="flex items-center flex-col">
                    <button className="mt-2  hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Your Favourite Food</button>
                </div>

                
            </div>



            {/* Soup food item show in menu page */}
            <div className="my-12 p-5">
                <Cover img={img4} heading={"Soup"} subheading={"Warm your soul with our comforting soups, made from scratch daily using wholesome ingredients, ensuring a rich and satisfying bowl that brings comfort and nourishment with every spoonful."}></Cover>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {
                        soupItem.map(dessert => <MenuItem key={dessert._id} item={dessert}></MenuItem>)
                    }
                </div>

                <div className="flex items-center flex-col">
                    <button className="mt-2  hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Your Favourite Food</button>
                </div>

                
            </div>


        </div>
    );
};

export default OurMenu;