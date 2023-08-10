import { Link } from "react-router-dom";
import Cover from "../../../Component/Cover/Cover";
import MenuItem from "../../../Component/MenuItem/MenuItem";


const MenuCategory = ({item,img, heading, subheading}) => {
    return (
        <div className="my-12 p-5">
            <Cover img={img} heading={heading} subheading={subheading}></Cover>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                {
                    item.map(dessert => <MenuItem key={dessert._id} item={dessert}></MenuItem>)
                }
            </div>

            <div className="flex items-center flex-col">
                <Link to={`/shop/${heading}`}><button className="mt-2  hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Your Favourite Food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;