import img from '../../../assets/home/chef-service.jpg'

const Poster = () => {
    return (
        
            <div className='my-12'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-11/12 md:w-3/4 bg-white text-black rounded p-14">
                            <h1 className="mb-5 text-4xl font-bold">FoodVillage</h1>
                            <p className="mb-5">Indulge your taste buds in a delectable adventure at FoodVillage - Where Taste Meets Tradition! 🍽️ Immerse yourself in a vibrant atmosphere filled with mouthwatering aromas and exquisite flavors from around the world.Embark on a culinary expedition as FoodVillage brings you an array of international cuisines that will transport you to different corners of the globe. From sizzling street food to gourmet creations, satisfy your cravings for diverse and authentic dishes.</p>
                            <button className="btn btn-outline bg-slate-200 text-black border-yellow-600 border-0 border-b-4">Visit Our Food</button>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Poster;