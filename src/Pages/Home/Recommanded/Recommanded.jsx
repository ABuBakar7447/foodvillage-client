import Title from "../../../Component/Title/Title";
import useMenu from "../../../hooks/useMenu";


const Recommanded = () => {
    const [menu] = useMenu();
    const recommands = menu.filter(items => items.category === 'offered');
    
    return (
        <div className="my-12">
            <Title heading={"Should Try"} subheading={"Our Recommends"}></Title>

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
                {
                    recommands.slice(1, 4).map(item =>
                        <div key={item._id}>

                            <div className="card w-96 shadow-xl bg-[#20242c]">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body h-[228px] flex items-center text-center flex-col">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.recipe}</p>
                                    <div className="card-actions justify-end">
                                        <button className="mt-2 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Food</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Recommanded;