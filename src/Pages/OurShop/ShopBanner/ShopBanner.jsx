import Cover from "../../../Component/Cover/Cover";
import img from '../../../assets/shop/banner2.jpg';

const ShopBanner = () => {
    return (
        <div>
            <Cover img={img} heading={"Our Shop"} subheading={" Immerse yourself in a virtual feast of exquisite flavors, curated with passion and precision, and embark on a journey that celebrates the art of fine dining right from the comfort of your screen."}></Cover>
        </div>
    );
};

export default ShopBanner;