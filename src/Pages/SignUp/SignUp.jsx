import img from '../../assets/others/authentication2.png'
import img1 from '../../assets/others/authentication.png'
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignIN = data => {
        console.log(data)
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  md:p-24" style={{ backgroundImage: `url(${img1})` }}>
                        <div className=" text-center lg:text-left">
                            <img src={img} alt="" />
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm">

                            <h1 className="text-4xl font-bold text-center">Sign Up</h1>

                            <form onSubmit={handleSubmit(handleSignIN)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="bg-white input input-bordered"
                                        {...register("name", { required: true })} />

                                    {errors.name && <span>You must write your name</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">PhotoUrl</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" className="bg-white input input-bordered"
                                        {...register("photourl", { required: true })} />

                                    {errors.photourl && <span>You must enter the photourl</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="bg-white input input-bordered"
                                        {...register("email", { required: true })} />

                                    {errors.email && <span>You must write your email</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="bg-white input input-bordered"
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength:6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/ 
                                            })} />
                                    {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p role="alert">Minimum 6 character is required</p>}
                                    {errors.password?.type === 'maxLength' && <p role="alert">Not more than 20 character.</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert">One capital letter, one special symobol, one small letter, any number</p>}
                                </div>



                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;