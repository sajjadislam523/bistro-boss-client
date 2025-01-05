import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import authImg from "../assets/others/authentication2.png";
import useAuth from "../Hooks/useAuth.jsx";
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password).then((res) => {
            const loggedUser = res.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    // create user entry in the database
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                    };
                    axiosPublic.post("/users", userInfo).then((res) => {
                        if (res.data.insertedId) {
                            console.log("User added to the database");
                            Swal.fire({
                                title: "User created successfully",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate("/");
                        }
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    };

    return (
        <>
            <Helmet>
                <title>Register - Bistro Boss</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen px-8 py-12 bg-gray-100 bg-no-repeat bg-cover font-inter md:flex-row bg-authBg">
                <div className="flex flex-col items-center justify-center w-full p-6 md:w-1/2 md:rounded-lg">
                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        Register
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-4/5 gap-6"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            {...register("name", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && <span>This field is required</span>}
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="name"
                            {...register("photoURL", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && <span>Photo URL is required</span>}
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            {...register("email", { required: true })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && <span>This field is required</span>}
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                                pattern:
                                    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,12}$/,
                            })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.password?.type === "required" && (
                            <span className="text-red-600">
                                This field is required
                            </span>
                        )}
                        {errors.password?.type === "minLength" && (
                            <span className="text-red-600">
                                At least 6 character required
                            </span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="text-red-600">
                                Password must be less than 12 characters
                            </span>
                        )}
                        {errors.password?.type === "pattern" && (
                            <span className="text-red-600">
                                Password must have at least one uppercase, one
                                lowercase, one special character and one number.
                            </span>
                        )}
                        <input
                            type="submit"
                            className="w-full p-3 text-white rounded-md bg-[#D1A054B3] hover:shadow-lg"
                            value="Register"
                        />
                    </form>

                    <div className="mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="mt-4">
                        <p className="mb-2 text-sm text-center text-gray-500">
                            Or sign in with
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="p-2 text-xl text-gray-600 rounded-full hover:bg-gray-300">
                                <CiFacebook />
                            </button>
                            <button className="p-2 text-xl text-gray-600 rounded-full hover:bg-gray-300">
                                <FaGoogle />
                            </button>
                            <button className="p-2 text-xl text-gray-600 rounded-full hover:bg-gray-300">
                                <FaGithub />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 md:block">
                    <img
                        src={authImg}
                        alt="People in a cafe"
                        className="w-3/4 mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Register;
