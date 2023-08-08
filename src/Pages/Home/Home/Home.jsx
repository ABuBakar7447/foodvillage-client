import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Poster from "../Poster/Poster";


const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <OrderOnline></OrderOnline>
           <Poster></Poster>
           <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Home;