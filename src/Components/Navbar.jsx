import IMG from "../assets/img/pngegg.png";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const handlelogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            {/* <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
                NETFLIX
            </h1> */}
            {}
            <NavLink to={"/"}>
                <img className="width-[57px] h-[56px]" src={IMG} alt="" />
            </NavLink>
            {user?.email ? (
                <div>
                    <NavLink to={"/account"}>
                        <button className="text-white pr-4 ">Account</button>
                    </NavLink>

                    <button
                        onClick={handlelogout}
                        className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white "
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div>
                    <NavLink to={"/login"}>
                        <button className="text-white pr-4 ">Sign In</button>
                    </NavLink>
                    <NavLink to={"/signup"}>
                        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
