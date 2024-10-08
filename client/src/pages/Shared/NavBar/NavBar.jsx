import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useRole from "../../../hooks/useRole";
import img1 from '../../../assets/logo.png';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role, isLoading] = useRole()
  console.log("never-----check",user);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

  const navItems =<>
       
          <li><Link to="/">Home</Link></li>
          <li><Link to="/surveysPages">All Surveys</Link></li>
          {/* <li><Link to="/surveys">Surveys</Link></li> */}
          {
            user && role && <li><Link to="/dashboard/adminHome">ADMIN</Link></li>
          }
          <li><Link to="/membarShip">PRICE Page</Link></li>
          {/* <li><Link to="/dashboard/payment">PRO-USER</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>

          
          </>
  return (
    <div>
      
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-[black]  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Survey App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  
  {
            user ? <>
                <span>{user?.displayName}</span>
                <span><img src={user?.photoURL} className="w-[20px]"></img></span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : 
            
            <>
            <a className="btn"><Link to="/login">Login</Link></a>
            </>
        }
   
  </div>
</div>
    </div>
  );
};

export default NavBar;