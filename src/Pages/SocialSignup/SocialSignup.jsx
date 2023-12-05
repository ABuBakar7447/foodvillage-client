import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialSignup = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const userdata = { name: loggedInUser.displayName, email: loggedInUser.email }
                        fetch('https://foodvillage-server.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userdata)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, { replace: true });
                            })
                
            })
    }

    return (
        <div>
            <div className="divider h-[2px] bg-gray-400 my-5"></div>
            <div className="flex justify-center text-center">
                <button onClick={handleGoogleSignUp} className="btn btn-circle btn-outline my-3">
                    <Icon icon="devicon:google" />
                </button>
            </div>
        </div>
    );
};

export default SocialSignup;