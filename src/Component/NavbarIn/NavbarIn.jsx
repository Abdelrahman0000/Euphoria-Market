import React , {useState} from 'react';
import { useLocation, NavLink,Link } from 'react-router-dom';
import { List , X,Heart,Person,Cart} from 'react-bootstrap-icons'
import './NavbarIn.css'
export default function NavbarIn() {
const [isClose , setClose]=useState(false)
const location = useLocation();
  return (
    <nav className='NavbarIn'>
      <div className="nav-inner ">
        <div className="all-list" >
      <div className="logo">
        <Link to="/"> <h3>  {' '} Euphoria <sub style={{fontSize:'8px'}}>Keep it Classy</sub> </h3></Link>
      </div>

<div className="list">
  <h4 onClick={()=>setClose(!isClose)}> {isClose? <X/> :<List />  } </h4>
</div>
</div>

      <div className="links my-row d-none-first">
     
      <ul className='my-row'>
          <li>
           <h6> <NavLink to="/">Shop</NavLink> </h6>
          </li>
          <li>
          <h6>  <NavLink to="/men">Men</NavLink> </h6>
          </li>
          <li>
          <h6> <NavLink to="/women">Women</NavLink> </h6>
          </li>

          <li>
          <h6>  <NavLink to="/combos">Combos</NavLink> </h6>
          </li>
          <li>
          <h6> <NavLink to="/joggers">Joggers</NavLink> </h6>
          </li>


        </ul>

<div className="icons">
<NavLink to='/favorite'> <Heart /> </NavLink>
<NavLink to='/profile'> <Person /> </NavLink>
<NavLink to='/cart'> <Cart /> </NavLink>



</div>

      </div>

      <div className={`links my-column insmall d-none-saconde ${isClose?`animate`:`noneHight`}`}>
      <ul className='my-row'>
          <li>
           <h6> <NavLink to="/">Shop</NavLink> </h6>
          </li>
          <li>
          <h6>  <NavLink to="/men">Men</NavLink> </h6>
          </li>
          <li>
          <h6> <NavLink to="/women">Women</NavLink> </h6>
          </li>

          <li>
          <h6>  <NavLink to="/combos">Combos</NavLink> </h6>
          </li>
          <li>
          <h6> <NavLink to="/joggers">Joggers</NavLink> </h6>
          </li>


        </ul>

<div className="icons">
<NavLink to='/favorite'> <Heart /> </NavLink>
<NavLink to='/profile'> <Person /> </NavLink>
<NavLink to='/cart'> <Cart /> </NavLink>



</div>

      </div>


      </div>
    </nav>
  )
}
