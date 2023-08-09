import Cover from "../../../Component/Cover/Cover";
import img1 from '../../../assets/menu/banner3.jpg'

const MenuBanner = () => {
    return (
        <div>
            <Cover img={img1} heading={"Our Menu"} subheading={"Our menu offers a symphony of flavors, from artisanal sandwiches to exotic fusion dishes, ensuring an unforgettable gastronomic journey"}></Cover>
        </div>
    );
};

export default MenuBanner;