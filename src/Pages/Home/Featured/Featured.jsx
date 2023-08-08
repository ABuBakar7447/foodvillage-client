import Title from "../../../Component/Title/Title";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured pt-8 my-12 bg-fixed">
            <Title heading={"Check It Out"} subheading={"From Our Menu"}></Title>

            <div className="md:flex bg-slate-500 bg-opacity-5 justify-center items-center pb-12 px-12 space-x-2 ">
                <div className="md:w-1/2 md:p-16">
                    <img src={img} alt="" />
                </div>
                <div className="md:w-1/2 text-center font-bold">
                    <p className="text-white">Indulge in a culinary journey at FoodVillage Shop - where flavors come alive! Discover a world of delectable delights that tantalize your taste buds and bring joy to your plate.</p>
                    

                    <button className="mt-2 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Food</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;