import img from '../../assets/others/authentication2.png'
import img1 from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';



const LogIn = () => {
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

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
                        <img src={img} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm">

                        <h1 className="text-4xl font-bold text-center">Sign In</h1>
                        <form className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="bg-white input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="bg-white input input-bordered" />

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;