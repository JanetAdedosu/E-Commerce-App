import React,{useState, useEffect} from 'react'
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
       const interval = setInterval(() => {
         setCount((preValue) => --preValue )
       },1000)
       count === 0 && navigate('/login',{
        state: location.pathname
       });
       return () => clearInterval(interval)
    },[count,navigate, location])
  return (
    <>
      <div class="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}>
        <h1 className="Text-center">redirecting to you in {count} seconds</h1>
       <strong role="status"></strong>
      <div class="spinner-border ms-auto" aria-hidden="true">
      </div>
      </div>

    </>
  )
}

export default Spinner