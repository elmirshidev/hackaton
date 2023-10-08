import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, provider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../REDUX/userSlice';
import { Oval } from 'react-loader-spinner';
function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repeatPasswordRef = useRef(null);


    const createUserNormal = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== repeatPasswordRef.current.value) {
            toast.warn('Passwords do not match');
            setLoader(false);
            return;
        }
        setLoader(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            await setDoc(doc(db, "users", emailRef.current.value), {
                fullName: fullNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });

            dispatch(login({
                fullName: fullNameRef.current.value,
                email: emailRef.current.value,
            }));

            setLoader(false);
            navigate('/');
        } catch (err) {
            toast.error(err.message);
            setLoader(false);
        }
    }

    if (loader) {
        return (
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        )
    }

    return (
        <main className='flex h-[100vh]  justify-center items-center'>
            <form className='flex w-[600px] items-center flex-col gap-y-4'>
                <input
                    ref={fullNameRef}
                    className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='text' placeholder='Full Name' />
                <input
                    ref={emailRef}
                    className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='email' placeholder='Your email' />
                <input
                    ref={passwordRef}
                    className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='password' placeholder='Password' />
                <input
                    ref={repeatPasswordRef}
                    className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='password' placeholder='Repeat Password' />
                <button onClick={(e) => createUserNormal(e)} className='w-[30%]   rounded-lg py-1 transition-all duration-300 hover:bg-fourthGreen hover:text-white border-2 border-secondGreen'>Register</button>
                <hr className='w-[200px]' />
                <div>
                    <Link className='text-blue-400 transition-all duration-300 hover:text-blue-500'>Or register with Google</Link>
                </div>
                <div>
                    <Link to={'/login'} className='text-pink-400 transition-all duration-300 hover:text-pink-500'>Already have an accaunt? Login</Link>
                </div>
            </form>
            <ToastContainer />
        </main>
    )
}

export default Register
