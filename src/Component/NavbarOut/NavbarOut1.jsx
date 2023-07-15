import React , {useState} from 'react';
import { useLocation, NavLink,Link } from 'react-router-dom';
import { List , X} from 'react-bootstrap-icons'
import './NavbarOut.css'
export default function NavbarOut() {
const [isClose , setClose]=useState(false)
const location = useLocation();
  return (
    <nav className='Navbar'>
      <div className="nav-inner ">
        <div className="my-list" >
      <div className="logo">
        <Link to="/"> <h3>  {' '} Euphoria <sub style={{fontSize:'8px'}}>Keep it Classy</sub> </h3></Link>
      </div>

<div className="list">
  <h4 onClick={()=>setClose(!isClose)}> {isClose? <X/> :<List />  } </h4>
</div>
</div>

      <div className="links my-row d-none-first">
      <div className='above' >
        <Link to="/sign_in"  className={`my-btn ${window.location.pathname === '/sign_in' ? 'active' : ''}`} aria-current="page"> Sign in</Link>
      </div>
      
      <div className='above' >
        <Link to="/sign_up" className={`my-btn ${window.location.pathname === '/sign_up' ? 'active' : ''}`} aria-current="page"> Sign up</Link>
      </div>
      </div>

      <div className={`links my-column insmall d-none-saconde ${isClose?`animate`:`noneHight`}`}>
      <div className='above' style={{marginTop:'4rem'}} >
        <Link to="/sign_in"  className={`my-btn ${window.location.pathname === '/sign_in' ? 'active' : ''}`} aria-current="page"> Sign in</Link>
      </div>
      
      <div className='above' >
        <Link to="/sign_up" className={`my-btn ${window.location.pathname === '/sign_up' ? 'active' : ''}`} aria-current="page"> Sign up</Link>
      </div>
      </div>


      </div>
    </nav>
  )
}
