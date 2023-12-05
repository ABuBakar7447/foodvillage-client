import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const MenuCard = ({item}) => {
    const {name, image, recipe, price, _id}=item;
    const {user} = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    
    const handleItem =(item)=>{
        console.log(item)
        if(user && user.email){
            const orderItem = {foodId:_id, name, image, recipe, price, email:user.email}
            fetch('https://foodvillage-server.vercel.app/carts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)

            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added to the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

        else{
            Swal.fire({
                title: 'Please login to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state:{from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 shadow-xl bg-[#20242c]">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <p className="bg-black text-white absolute right-0 mt-4 mr-5 px-3 rounded">${price}</p>
                <div className="card-body h-[228px] flex items-center text-center flex-col">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleItem(item)} className="mt-2 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-200 text-black border-[#BB8506] border-0 border-b-4">Order Food</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;