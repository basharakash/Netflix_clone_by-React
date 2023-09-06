import { NavLink, useNavigate } from "react-router-dom";
import IMG from "../assets/img/NBG.jpg";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src={IMG}
                    alt="/"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75  text-white">
                        <div className="max-w-[320px] mx-auto py-16 ">
                            <h1 className=" text-3xl font-bold ">Sign In</h1>
                            {error ? <p className="p-3 bg-red-400 my-3">{error}</p> : null}
                            <form
                                onSubmit={handleLogin}
                                className="w-full flex flex-col  py-4"
                            >
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="email or phone number"
                                    autoComplete="email"
                                    required
                                />
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="password"
                                    autoComplete="password"
                                    required
                                />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                                    {" "}
                                    Log In
                                </button>
                                <div className="flex justify-between  text-gray-600 items-center">
                                    <p>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                        />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-600 ">
                                        New to Netflix?
                                    </span>
                                    <NavLink to={"/signup"}>Sign Up</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
