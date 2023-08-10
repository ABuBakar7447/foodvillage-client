
import useMenu from "../../../hooks/useMenu";
import MenuBanner from "../MenuBanner/MenuBanner";
import Offered from "../Offered/Offered";
import { Helmet } from 'react-helmet-async';

import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'

import MenuCategory from "./MenuCategory";



const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu Page</title>
            </Helmet>
            <MenuBanner></MenuBanner>
            <Offered></Offered>

            {/* dessert food item show in menu page */}
            <MenuCategory item={dessert} img={img1} heading={"dessert"} subheading={"Indulge in decadence with our irresistible desserts, meticulously crafted to tantalize your taste buds, whether it's the velvety chocolate mousse or the classic creamy cheesecake, each bite is a journey of sweet bliss."}></MenuCategory>




            {/* Salad food item show in menu page */}
            <MenuCategory item={salad} img={img3} heading={"salad"} subheading={"Elevate your palate with our vibrant salads, thoughtfully curated with crisp garden greens, farm-fresh vegetables, and delectable dressings, creating a refreshing medley of tastes that celebrates health and taste in every forkful."}></MenuCategory>




            {/* Pizza food item show in menu page */}
            <MenuCategory item={pizza} img={img2} heading={"pizza"} subheading={"Indulge in our mouthwatering pizzas, expertly crafted with a perfect blend of premium cheeses, savory toppings, and our signature hand-tossed crust, delivering a delightful burst of flavors in every bite."}></MenuCategory>




            {/* Soup food item show in menu page */}
            <MenuCategory item={soup} img={img4} heading={"soup"} subheading={"Warm your soul with our comforting soups, made from scratch daily using wholesome ingredients, ensuring a rich and satisfying bowl that brings comfort and nourishment with every spoonful."}></MenuCategory>





        </div>
    );
};

export default OurMenu;