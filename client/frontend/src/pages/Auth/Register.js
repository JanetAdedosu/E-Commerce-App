import React ,{useState} from 'react'
import Layout from "../../components/Layout/Layout"
import axios from "axios"
import{useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address,setAddress] = useState("")

    const navigate =useNavigate();

    //form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name,email,address,phone,password);
        // toast.success('Registration Successful')
        try{
            const res = await axios.post(
              '/api/v1/auth/register',
                {name,email,password,address,phone}
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate ("/login");
            }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error);
            toast.error("Something went wrong")
        }
    };

  return (
    <Layout title="Register Ecommerce App">
      <h1>Register Page</h1>
      <form onSubmit ={handleSubmit}>
    <div className="mb-3">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleName"  
      placeholder="Enter Your Name" required/>
    </div>
    <div className="mb-3">
     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" 
     placeholder ="Enter Your Email" required/>
   </div>

   <div className="mb-3">
     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"
     placeholder="Enter Your Password" required/>
   </div>

   <div className="mb-3">
     <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone1" 
     placeholder = "Enter Your Phone Number" required/>
   </div>

   <div className="mb-3">
     <input type="address" value= {address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress1" 
     placeholder ="Enter Your Address" required/>
   </div>

    {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div> */}
   <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </Layout>
    
  )
 }

export default Register