import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const AddReview = () => {
    const [axiosSecure] = useAxiosSecure();
    const [rating, setRating] = useState(3);
    const {user} = useAuth();

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
        <div className="w-full p-12">
            <div className="flex justify-center items-center">
                <Rating
                    className=""
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                    isRequired
                />
            </div>

            <div className="p-16">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <label className="form-control m-5 w-full ">
                        <div className="label">
                            <span className="label-text">Which recipe you liked most?</span>
                        </div>
                        <input type="text" {...register("likedmost")} placeholder="Type here" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control m-5 w-full">
                        <div className="label">
                            <span className="label-text">Do you have any suggestion for us?</span>
                        </div>
                        <input type="text" {...register("suggestion")} placeholder="Type here" className="input input-bordered w-full" />
                    </label>


                    <label className="form-control m-5">
                        <div className="label">
                            <span className="label-text">Kindly express your thoughts in a short way.</span>
                        </div>
                        <textarea {...register("thoughts")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>

                    <input className="btn w-36" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;