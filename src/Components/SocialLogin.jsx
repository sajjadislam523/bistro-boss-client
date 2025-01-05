import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn().then((res) => {
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
                console.log(res.data);
                // Redirect to dashboard or home page
                navigate("/");
            });
        });
    };
    return (
        <div>
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center gap-2 btn"
                >
                    <FaGoogle /> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
