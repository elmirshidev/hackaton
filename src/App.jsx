import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../firebase"
import { useDispatch } from "react-redux"
import { login, logout } from "./REDUX/userSlice"
import { doc, getDoc } from "firebase/firestore"
import Profile from "./pages/Profile"
import { useEffect, useState } from "react"
import Statistics from "./pages/Statistics"
function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        const { events } = await res.json();
        setData(events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 120000);

    return () => clearInterval(intervalId);
  }, []);
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let makeAuth = async () => {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch(login({
            fullName: docSnap.data().fullName,
            email: docSnap.data().email,
          }));
        } 
      } 

      makeAuth();

    } else {
      console.log(2)
    }
  });
  return (
    <main className='App'>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>

      </Router>

    </main>
  )
}

export default App
