import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Featured from "../Featured/Featured";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Poster from "../Poster/Poster";
import Recommanded from "../Recommanded/Recommanded";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <OrderOnline></OrderOnline>
           <Poster></Poster>
           <PopulerMenu></PopulerMenu>
           <CallUs></CallUs>
           <Recommanded></Recommanded>
           <Featured></Featured>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;