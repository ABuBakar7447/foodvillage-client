import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        console.log(data)

        const formdata = new FormData ();
        formdata.append('image', data.image[0])


        
        fetch(img_hosting_url,{
            method: 'POST',
            body: formdata
        })

        .then(res => res.json())
        .then(imgresponse =>{
            console.log(data,imgresponse)

            if(imgresponse.success){
                const imgURL = imgresponse.data.display_url;

                const {name, recipe, price, category} = data;

                const menuItem = {name, recipe, price:parseFloat(price), category, image: imgURL}

                console.log(menuItem)

                axiosSecure.post('/menuItems', menuItem)
                .then(data =>{
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Item has been added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })



            }
        })
    };
    

    return (
        <div className="w-full">
            <Helmet>
                <title>AddItems</title>
            </Helmet>

            <Title heading={"What's New"} subheading={"Add An Iteme"}></Title>

            <div className="p-8 m-8 bg-gray-200 font-semibold">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text text-black">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Type Recipe Name" 
                        {...register("name", {required: true, maxLength: 120})}
                        className="input input-bordered w-full" />
                    </div>

                    <div className="flex mt-2">
                        <div className="form-control w-full">
                            
                            <label className="label">
                                <span className="label-text text-black">Category*</span>
                            </label>

                            <select defaultValue='Pick One'  {...register("category", { required: true })} className="select select-bordered">

                                <option disabled>Pick One</option>
                                <option className="font-semibold">salad</option>
                                <option className="font-semibold">pizza</option>
                                <option className="font-semibold">soup</option>
                                <option className="font-semibold">dessert</option>
                                <option className="font-semibold">drinks</option>

                            </select>

                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text text-black">Price*</span>
                            </label>
                            <input type="number" placeholder="Type Price" 
                            {...register("price", { required: true })}
                            className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text text-black">Recipe Details*</span>
                        </label>

                        <textarea {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Type Recipe Details"></textarea>
                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-black">Item Image*</span>
                        </label>
                        <input type="file" 
                        {...register("image", { required: true })}
                        className="file-input bg-slate-600 file-input-bordered w-full max-w-xs" />
                    </div>

                    <input type="submit" className="mt-4 btn hover:bg-slate-700 hover:text-white" value="Add Item" />


                </form>
            </div>
        </div>
    );
};

export default AddItems;