import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge,
    validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import authImg from "../assets/others/authentication2.png";
import SocialLogin from "../Components/SocialLogin.jsx";
import useAuth from "../Hooks/useAuth.jsx";

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const captchaRef = useRef(null);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidation = () => {
        const value = captchaRef.current.value;
        if (!validateCaptcha(value)) {
            alert("Invalid captcha. Please try again");
            return false;
        }
        return true;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!handleValidation()) return;

        signIn(email, password).then((res) => {
            const user = res.user;
            console.log(user);
            Swal.fire({
                title: "User logged is successfully",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
                icon: "success",
                toast: true,
                position: "top-end",
                timer: 2000,
                timerProgressBar: true,
            });
            navigate(from, { replace: true });
        });

        // console.log(email, password);
    };

    return (
        <>
            <Helmet>
                <title>Login - Bistro Boss</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen px-8 py-12 bg-gray-100 bg-no-repeat bg-cover font-inter md:flex-row bg-authBg">
                <div className="hidden w-1/2 md:block">
                    <img
                        src={authImg}
                        alt="People in a cafe"
                        className="w-3/4 mx-auto"
                    />
                </div>

                <div className="flex flex-col items-center justify-center w-full p-6 md:w-1/2 md:rounded-lg">
                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        Login
                    </h1>
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col w-4/5 gap-6"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <div>
                            <label className="label">
                                <LoadCanvasTemplate />{" "}
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                name="captcha"
                                ref={captchaRef}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-sm text-gray-500"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            type="submit"
                            className="w-full p-3 text-white rounded-md bg-[#D1A054B3] hover:shadow-lg"
                            value="Sign In"
                        />
                    </form>

                    <div className="mt-6 text-sm text-gray-600">
                        New here?{" "}
                        <Link
                            to="/register"
                            className="text-blue-500 hover:underline"
                        >
                            Create a New Account
                        </Link>
                    </div>

                    <div className="mt-4">
                        <p className="mb-2 text-sm text-center text-gray-500">
                            Or sign in with
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
