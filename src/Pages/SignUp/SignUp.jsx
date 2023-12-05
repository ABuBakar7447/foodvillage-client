import img from '../../assets/others/authentication2.png'
import img1 from '../../assets/others/authentication.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialSignup from '../SocialSignup/SocialSignup';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createuser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIN = data => {
        // console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name, data.photourl)
                    .then(() => {
                        const userdata = { name: data.name, email: data.email }
                        fetch('https://foodvillage-server.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userdata)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Account created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error)
                    });

            })
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  md:p-24" style={{ backgroundImage: `url(${img1})` }}>
                        <div className=" text-center lg:text-left">
                            <img src={img} alt="" className='mt-16 md:mt-0' />
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
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/
                                            })} />
                                    {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p role="alert">Minimum 6 character is required</p>}
                                    {errors.password?.type === 'maxLength' && <p role="alert">Not more than 20 character.</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert">One capital letter, one special symobol, one small letter, any number</p>}
                                </div>



                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                                </div>
                            </form>

                            <p className='text-[#D1A054] text-center'>Already have an account? Then, <Link to='/login' className='underline font-bold'>Sign IN</Link></p>

                            <SocialSignup></SocialSignup>
                        </div>

                        
                    </div>

                    
                </div>

                
            </div>
        </div>
    );
};

export default SignUp;