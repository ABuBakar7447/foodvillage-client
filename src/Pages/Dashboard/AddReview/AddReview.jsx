import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Title from "../../../Component/Title/Title";


const AddReview = () => {
    const [axiosSecure] = useAxiosSecure();
    const [rating, setRating] = useState(3);
    const { user } = useAuth();

    const { register, handleSubmit } = useForm();

    const onsubmit = data => {
        console.log(data);

        const review = {
            name: user.displayName,
            foodname: data.likedmost,
            suggestion: data.suggestion,
            details: data.thoughts,
            rating: rating
        }

        console.log(review)

        axiosSecure.post('/reviews', review)
            .then(data => {
                if (data.data.insertedId) {
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

    return (
        <div className="w-full p-12 m-8">

            <Helmet>
                <title>Add Review</title>
            </Helmet>

            <Title heading={'Sharing is Caring'} subheading={'Add Review'}></Title>
            <div className=" p-12 m-8 bg-gray-200 font-semibold">
                <div className="flex flex-col justify-center items-center">

                    <p className="text-black font-serif text-3xl">Rate Our Service</p>
                    <Rating
                        className=""
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                </div>

                <div className="">
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <label className="form-control mt-5 w-full ">
                            <div className="label">
                                <span className="label-text text-black">Which recipe you liked most?</span>
                            </div>
                            <input type="text" {...register("likedmost")} placeholder="Type here" className="bg-white text-black input input-bordered w-full" />
                        </label>

                        <label className="form-control mt-5 w-full">
                            <div className="label">
                                <span className="label-text text-black">Do you have any suggestion for us?</span>
                            </div>
                            <input type="text" {...register("suggestion")} placeholder="Type here" className="bg-white text-black input input-bordered w-full" />
                        </label>


                        <label className="form-control mt-5">
                            <div className="label">
                                <span className="label-text text-black">Kindly express your thoughts in a short way.</span>
                            </div>
                            <textarea {...register("thoughts")} className="bg-white text-black textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                        </label>

                        <input className="mt-5 w-36 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-300 text-black border-[#BB8506] border-0 border-b-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;