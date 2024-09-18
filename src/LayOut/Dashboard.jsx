import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { TbTransactionDollar } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

const Dashboard = () => {
     const {user,logOut} = useContext(AuthContext)  
     const location = useLocation()  
     const navigate = useNavigate()
     const form = location.state?.status?.pathName||'/'
     const signOut = () => {
          logOut()
          .then(()=>{
               navigate(form,{replace:true})
          })
          .catch((error)=>{
               console.log(error);
          })
           
     };
    return (
        <div>
            {/* Navbar */}
            <div className="navbar  bg-base-100 max-w-7xl shadow-lg mx-auto">
                <div className="navbar bg-base-100 max-w-7xl  shadow-lg mx-auto">
               
                    <div className="flex-1">
                        <Link to={'/'} className=" animate-spin ">
                            <img src="https://i.ibb.co.com/4VDc55j/305708784-514923217301661-1311194014409716321-n-1.png" alt="Logo" />
                        </Link>
                        <div className="ml-3">
                        <Link to={'/dashboard'} className="text-3xl font-bold">Dashboard</Link>
                     </div>
                    </div>
                     
                    <div className="flex-none gap-2">
                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        className=""
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} title={user?.displayName} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              
                                <li onClick={signOut} className="btn bg-[#6ea963]"><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="  lg:w-64 lg:min-h-screen text-white bg-[#6eb661] pt-6 border-2 space-y-3">
                    <Link 
                        className={"btn flex items-center text-lg gap-2 bg-[#fdfdfd] hover:bg-[#6ea963] w-full"}>
                         <TbTransactionDollar />
                        transactions
                    </Link>
                    <Link to={'/dashboard/manageMenu'}
                        className={" btn flex items-center gap-2 lg:text-lg bg-[#fdfdfd]  hover:bg-[#6ea963] w-full"}>
                         <AiOutlineProduct />
                        Manage Menu
                    </Link>
                    <Link
                        className={"btn flex items-center gap-2 text-lg bg-[#fdfdfd] hover:bg-[#6ea963] w-full"}>
                         <FaComments />
                        Manage Testimonials
                    </Link>
                    <div className="pt-20">
                        <Link to={'/'} className="flex btn text-white animate-pulse bg-[#45a856] gap-3 items-center justify-center text-center mb-4"><FaArrowLeft />
                            Back to home
                        </Link>
                    </div>
                </div>

                {/* Main content area where nested routes will be rendered */}
                <div className="flex-grow p-6 bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;