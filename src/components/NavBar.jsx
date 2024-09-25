import './Css/Nav.css'
import { IsLoginValue } from './IsLogin';
import { ContextValues } from './Provider'
import { IoMdCart } from "react-icons/io";
import Modal from './Modal';
import { Outlet, Link, NavLink } from 'react-router-dom';
function NavBar(){
    const {setisOpen,state,isOpen}=ContextValues()
    const {User,setUser}=IsLoginValue()
    const TotalItem=state.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0,
      );
    return(
        <div>
            {isOpen && <Modal/>}
            <div className="NavBar">
                <div className='Container'>
                    <div className="NavItem">
                        <div className="Logo">
                            <p>
                                EcoShop
                            </p>
                        </div>
                        <div className="Options">
                            <div className="Cart" onClick={()=>setisOpen(true)}>
                                <span> <IoMdCart /> <span className='items'>{TotalItem}</span></span>
                                <p>
                                    Cart
                                </p>
                            </div>
                            
                            <ul>
                                {User===true? 
                                <>
                                <li>
                                    <NavLink to={'/Account'}> Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'}> <button onClick={()=>setUser(false)}>Log Out</button> </NavLink>
                                </li>
                                </> :
                                
                                <li>
                                    <button onClick={()=>setUser(true)}>Login</button>
                                </li>
                                }
                            </ul> 

                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default NavBar