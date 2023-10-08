import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import pp from '../assets/pp.jpg';
import { logout } from "../REDUX/userSlice";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiCircleForest as Forest } from 'react-icons/gi'
function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const deleteSession = () => {
        signOut(auth).then(() => {
            dispatch(logout());
            navigate('/login');
        }).catch((error) => {
            toast.error(error.message);
        });
    }
    return (
        <>
            <header className="bg-mainGreen 730:justify-between  px-4 h-[50px] flex items-center justify-around">
                <div>
                    <Link to='/'>
                        <strong className="flex text-xl items-center gap-x-2">
                            <Forest size={25} className="inline-block text-2xl" />
                            FireGuard
                        </strong>
                    </Link>
                </div>

                <nav className="flex-1 730:hidden  px-8 flex items-center">
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <Link className="  transition-all duration-300" to={'/'}>
                                Where to camp?
                            </Link>
                        </li>
                        <li>
                            <Link to='/statistics' className="  transition-all duration-300">
                                Statistics
                            </Link>
                        </li>
                        <li>
                            <Link className=" transition-all duration-300">
                                Community
                            </Link>
                        </li>
                        <li>
                            <Link className="  transition-all duration-300">
                                Earn Points
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <div>
                                <img onClick={() => navigate('/profile')} className="w-[40px] h-[40px] rounded-full cursor-pointer" src={pp} />
                            </div>
                            <button onClick={deleteSession} className="border-2 bg-mainGray hover:bg-gray-300  transition-all hover:text-black duration-300 border-white rounded-lg py-1 px-2">Sign Out</button>
                        </div>
                    ) : (
                        <Link className="border-2 hover:bg-slate-200 transition-all hover:text-black duration-300 border-white rounded-lg p-2" to='/login'>Sign in</Link>
                    )}
                </div>
            </header>
            <ToastContainer />
        </>
    )
}

export default Navbar
