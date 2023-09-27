import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";
import { useForm } from 'react-hook-form';


const AddItems = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);

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

                            <select  {...register("category", { required: true })} className="select select-bordered">

                                <option disabled selected>Pick one</option>
                                <option className="font-semibold">Salad</option>
                                <option className="font-semibold">Pizza</option>
                                <option className="font-semibold">Soup</option>
                                <option className="font-semibold">Dessert</option>
                                <option className="font-semibold">Drinks</option>

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