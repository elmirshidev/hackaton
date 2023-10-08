import { doc, getDoc } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../REDUX/userSlice';
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const loginUserNormal = async (e) => {
    e.preventDefault();
    // setLoader(true);
    try {
      const docRef = doc(db, "users", emailRef.current.value);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data().password === passwordRef.current.value) {
          signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
              // Signed in 
              // const user = userCredential.user;
              // console.log(user);
              // ...
              dispatch(login({
                fullName: docSnap.data().fullName,
                email: docSnap.data().email,
              }));
              setLoader(false);
              navigate('/');
            })

        } else {
          toast.warn('Wrong password');
          setLoader(false);
        }
      } else {
        toast.warn('User does not exist');
        setLoader(false);
      }
    } catch (error) {
      toast.error(error.message);
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
        <input ref={emailRef} className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='email' placeholder='Your email' />
        <input ref={passwordRef} className='w-[50%] rounded-md caret-mainGreen caret-2 p-1 outline-0  ring-1 ring-mainGreen' required type='password' placeholder='Password' />
        <button onClick={(e) => loginUserNormal(e)} className='w-[30%] rounded-lg py-1 transition-all duration-300 hover:bg-fourthGreen hover:text-white border-2 border-secondGreen'>Sign in</button>
        <hr className='w-[200px]' />
        <div>
          <Link className='text-blue-400 transition-all duration-300 hover:text-blue-500'>Or sign in with Google</Link>
        </div>
        <div>
          <Link to={'/register'} className='text-pink-400 transition-all duration-300 hover:text-pink-500'>Don't have an accaunt? Register</Link>
        </div>
      </form>
      <ToastContainer />
    </main>
  )
}

export default Login
