import React,{useState} from 'react'
import './Signin.css'
import Back from '../../image/bg/bg1.png'
import {EyeSlashFill,EyeFill} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
   
<div className="signin">
<div className="my-row">
<div className="left">
    <img src={Back} alt="" />
</div>

<section className="right">
<h2>
Sign In Page
</h2>



<form action="">
    
 <div className="gogl-colection">
<Link className="gogl">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M20.5002 10.2219C20.5002 9.39973 20.4321 8.79973 20.2848 8.17752H10.7041V11.8886H16.3277C16.2144 12.8108 15.6022 14.1997 14.2416 15.133L14.2225 15.2572L17.2517 17.557L17.4616 17.5775C19.389 15.833 20.5002 13.2664 20.5002 10.2219" fill="#4285F4"/>
  <path d="M10.7027 20C13.4578 20 15.7708 19.1111 17.4602 17.5778L14.2402 15.1332C13.3785 15.7221 12.222 16.1332 10.7027 16.1332C8.0043 16.1332 5.71403 14.3888 4.89761 11.9777L4.77794 11.9877L1.62811 14.3766L1.58691 14.4888C3.26493 17.7555 6.71171 20 10.7027 20Z" fill="#34A853"/>
  <path d="M4.89914 11.9778C4.68372 11.3556 4.55904 10.6889 4.55904 10C4.55904 9.31107 4.68372 8.64444 4.8878 8.02222L4.8821 7.88971L1.69278 5.46245L1.58843 5.51109C0.896838 6.86666 0.5 8.3889 0.5 10C0.5 11.6111 0.896838 13.1333 1.58843 14.4888L4.89914 11.9778" fill="#FBBC05"/>
  <path d="M10.7028 3.86663C12.6189 3.86663 13.9114 4.67773 14.6484 5.35555L17.5283 2.59999C15.7596 0.988889 13.4579 0 10.7028 0C6.71174 0 3.26494 2.24442 1.58691 5.51105L4.88629 8.02218C5.71405 5.61109 8.00433 3.86663 10.7028 3.86663" fill="#EB4335"/>
</svg>
<span>Continue With Google</span>

</Link>


<Link className="gogl">
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M6.77767 20C4.46696 20 2.31298 19.1818 0.5 17.7701C2.03928 17.8914 4.75576 17.601 6.44541 15.6389C3.90363 15.497 2.75733 13.1237 2.60781 12.1095C2.82378 12.211 3.85379 12.3327 4.43524 12.0487C1.51136 11.1562 1.06281 8.03245 1.16248 7.07911C1.71071 7.54564 2.64104 7.70791 3.00652 7.66734C0.281995 5.29412 1.26216 1.72414 1.74394 0.953347C3.69916 4.25101 6.62943 6.1031 10.2546 6.20612C10.1862 5.84118 10.1501 5.46124 10.1501 5.07099C10.1501 2.27036 12.0096 0 14.3034 0C15.5018 0 16.5817 0.619786 17.3398 1.61116C18.1406 1.3827 19.3459 0.847885 19.9352 0.385396C19.6382 1.68357 18.7135 2.76651 18.1542 3.16789C18.1589 3.18155 18.1497 3.15418 18.1542 3.16789C18.6455 3.07742 19.9748 2.76641 20.5 2.33266C20.2403 3.06196 19.26 4.27455 18.4555 4.95341C18.6052 12.9896 13.5546 20 6.77767 20Z" fill="#47ACDF"/>
</svg>
<span>Continue With Twitter</span>

</Link>

</div>

<div className="container">
  <div className="line left-line"></div>
  <span>OR</span>
  <div className="line right-line"></div>
</div>



<label htmlFor="">
       <span> User name or email address </span>
<input type="email" placeholder=' Your Email' />
</label>

<label htmlFor="">
     <div className="my-row" style={{justifyContent:'space-between'}}>  <span> Password  </span>   <span onClick={togglePasswordVisibility} style={{cursor:'pointer'}}>
        {showPassword ? <EyeFill /> :<EyeSlashFill />   } Hide
      </span> </div>
       <input type={showPassword ? 'text' : 'password'} /> 

</label>

<div className="above">
<Link to='/' className="my-btn">Log In</Link>
</div>

</form>

</section>
</div>
</div>

  )
}