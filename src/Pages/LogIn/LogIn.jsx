import img from '../../assets/others/authentication2.png'
import img1 from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const LogIn = () => {

    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Successfully Logged In',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })

    }

    const handleCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  md:p-24" style={{ backgroundImage: `url(${img1})` }}>
                    <div className=" text-center lg:text-left">
                        <img src={img} alt="" className='mt-16 md:mt-0' />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm">

                        <h1 className="text-4xl font-bold text-center">Sign In</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="bg-white input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="bg-white input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" placeholder="Enter the Captcha" className="bg-white input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} type="submit" value="Login" className="btn bg-[#D1A054] text-white font-bold hover:bg-slate-300 hover:text-black border-0" />
                            </div>
                        </form>

                        <p className='text-[#D1A054] text-center'>New Here? Create a new account, <Link to='/signup' className='underline font-bold'>Sign UP</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;