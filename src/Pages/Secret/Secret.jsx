import { useForm } from "react-hook-form";
import Cover from "../../Component/Cover/Cover";
import img from '../../assets/contact/banner.jpg'
import Title from "../../Component/Title/Title";
import { Icon } from "@iconify/react";

const Secret = () => {


    const { register, handleSubmit } = useForm();

    const onsubmit = data => {
        console.log(data);


    }
    return (
        <div className="pb-10">
            <div>
                <Cover img={img} heading={'Contact Us'} subheading={'Contact Us – We are here to answer your questions, provide support, and welcome collaboration opportunities. Reach out and let us start a conversation.'}></Cover>
            </div>


            <Title heading={'Visit Us'} subheading={'Our Location'}></Title>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-12">
                <div className="bg-white w-1/3 m-5 h-40">
                    <div className="bg-[#BB8506] h-10 flex justify-center items-center">
                        <Icon className="w-8 h-6 text-black" icon="mingcute:phone-fill" />
                    </div>
                    <div className="mx-4 mb-2 bg-gray-300 h-24 text-center text-black flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">Phone</p>
                        <p>01889551270</p>
                    </div>
                </div>


                <div className="bg-white w-1/3 m-5 h-40">
                    <div className="bg-[#BB8506] h-10 flex justify-center items-center">
                        <Icon className="w-8 h-6 text-black" icon="mdi:address-marker-outline" />
                    </div>
                    <div className="mx-4 mb-2 bg-gray-300 h-24 text-center text-black flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">Address</p>
                        <p>House 2/23</p>
                    </div>
                </div>


                <div className="bg-white w-1/3 m-5 h-40">
                    <div className="bg-[#BB8506] h-10 flex justify-center items-center">
                        <Icon className="w-8 h-6 text-black" icon="octicon:clock-16" />
                    </div>
                    <div className="mx-4 mb-2 bg-gray-300 h-24 text-center text-black flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">WorkHOur</p>
                        <p>9.00 am to 9.00 pm</p>
                    </div>
                </div>


            </div>

            <Title heading={'Send us a message'} subheading={'Contact Form'}></Title>


            <div className=" p-12 m-20 bg-gray-300 font-semibold">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <label className="form-control mr-2  w-full lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text text-black">Name</span>
                            </div>
                            <input type="text" {...register("likedmost")} placeholder="Type here" className="bg-white text-black input input-bordered w-full" />
                        </label>

                        <label className="form-control  w-full lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text text-black">Email</span>
                            </div>
                            <input type="text" {...register("likedmost")} placeholder="Type here" className="bg-white text-black input input-bordered w-full" />
                        </label>

                    </div>

                    <label className="form-control mt-5 w-full">
                        <div className="label">
                            <span className="label-text text-black">Phone</span>
                        </div>
                        <input type="text" {...register("suggestion")} placeholder="Type here" className="bg-white text-black input input-bordered w-full" />
                    </label>


                    <label className="form-control mt-5">
                        <div className="label">
                            <span className="label-text text-black">Write the message.</span>
                        </div>
                        <textarea {...register("thoughts")} className="bg-white text-black textarea textarea-bordered h-24" placeholder="message"></textarea>

                    </label>

                    <input className="mt-5 w-28 lg:w-36 hover:bg-slate-700 hover:text-white btn btn-outline bg-slate-400 text-black border-[#BB8506] border-0 border-b-4" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Secret;