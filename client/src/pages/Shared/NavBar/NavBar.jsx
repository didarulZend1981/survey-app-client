import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useRole from "../../../hooks/useRole";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role] = useRole();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 uppercase">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#0056b3]  font-semibold text-[15px]" // Active color
              : "hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 uppercase">
        <NavLink
          to="/surveysPages"
          className={({ isActive }) =>
            isActive
              ? "text-[#0056b3] block font-semibold text-[15px]"
              : "hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
          }
        >
          All Surveys
        </NavLink>
      </li>
      {user && role && (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive
                ? "text-[#0056b3] block font-semibold text-[15px]"
                : "hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
            }
          >
            ADMIN
          </NavLink>
        </li>
      )}
      <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 uppercase">
        <NavLink
          to="/membarShip"
          className={({ isActive }) =>
            isActive
              ? "text-[#0056b3] block font-semibold text-[15px]"
              : "hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
          }
        >
          PRICE Page
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 max-w-screen-xl bg-white text-black">
      <div className="navbar-start">
        {/* Hamburger Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-blue-900 font-bold">Survey Nest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <span>{user?.displayName}</span>
            <span>
              <img src={user?.photoURL} alt="User" className="w-[20px] ml-2" />
            </span>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost ml-4 text-[#007bff]"
            >
              LogOut
            </button>
          </>
        ) : (
          ["login", "signup"].map((text, index) => (
            <NavLink
              key={index}
              to={`/${text}`}
              className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bfd] bg-[#007bfd] transition-all ease-in-out duration-300 uppercase"
              : "px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 text-[#007bff] block font-semibold text-[15px] uppercase"
          }
        >


            



              {text}
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default NavBar;







// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useRole from "../../../hooks/useRole";
// import img1 from '../../../assets/logo.png';

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [role, isLoading] = useRole()
 
//   const handleLogOut = () => {
//     logOut()
//         .then(() => { })
//         .catch(error => console.log(error));
// }





//   const navItems =<>
       
//           <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to="/"><a href='javascript:void(0)' class='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a></Link></li>
//           <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to="/surveysPages"><a href='javascript:void(0)' class='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>All Surveys</a></Link></li>
//           {/* <li><Link to="/surveys">Surveys</Link></li> */}
//           {
//             user && role && <li><Link to="/dashboard/adminHome">ADMIN</Link></li>
//           }
//           <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to="/membarShip"><a  href='javascript:void(0)' class='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>PRICE Page</a></Link></li>
//           {/* <li><Link to="/dashboard/payment">PRO-USER</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/signup">SignUp</Link></li>
//  */}
          
//           </>
//   return (



//     <div>

















      
// <div className="navbar fixed z-10  max-w-screen-xl bg-white text-white">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn  lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="text-[black]  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         {navItems}
//       </ul>
//     </div>
//     <a className="btn text-xl">Survey App</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//     {navItems}
//     </ul>
//   </div>
//   <div className="navbar-end">
  
//   {
//             user ? <>
//                 <span>{user?.displayName}</span>
//                 <span><img src={user?.photoURL} className="w-[20px]"></img></span>
//                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
//             </> : 
            
//             <>
//            {['login', 'signup'].map((text, index) => (
//   <Link
//     key={index}
//     to={`/${text}`}
//     className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
//   >
//     {text}
//   </Link>
// ))}
            
//             </>
//         }
   
//   </div>
// </div>
//     </div>
//   );
// };

// export default NavBar;