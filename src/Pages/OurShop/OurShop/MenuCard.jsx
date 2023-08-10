

const MenuCard = ({item}) => {
    const {name, image, recipe, price}=item;
    return (
        <div>
            <div className="card w-96 shadow-xl bg-[#20242c]">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-black text-white absolute right-0 mt-4 mr-5 px-3 rounded">${price}</p>
                <div className="card-body h-[228px] flex items-center text-center flex-col">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="mt-2 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Food</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;