import React from 'react';
import useRole from '../../../hooks/useRole';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaHome } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaCommentDollar } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { FaLayerGroup } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

const Sidebar = () => {
  const [role, isLoading] = useRole()
  console.log("role of this site",role);
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content uppercase">
      {/* Sidebar content here */}
    
            
            <h2 className='w-full border-2 p-5 text-center font-poppins text-[20px] mb-5 mt-5'>Survey App</h2>

      {
            user && role==="admin" ? <>

            
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/dashboard/admin/users"><MdManageAccounts /> Manage users</Link></li>
                <li><Link to="/dashboard/admin/surveys"><FaLayerGroup /> Manage surveys Status</Link></li>
      
                <li><Link to="/dashboard/user/paymentHistory"><MdPayments /> Payment</Link></li>
                <li><Link to="/dashboard/admin/responses"><MdManageAccounts /> responses of surveys</Link></li>
            </> : <>

           {user && role ==="surveyor" ?<>
           
           <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/dashboard/surveyAdd"><IoMdAddCircle /> ADD a survey</Link></li>
            <li><Link to="/dashboard/surveyor/allupdate"><MdManageAccounts /> update survey</Link></li>
            <li><Link to="/dashboard/surveyor/surveys"><MdManageAccounts /> responses of surveys</Link></li>
            <li><Link to="/dashboard/surveyor/feedbacks"><VscFeedback />feedbacks</Link></li>
           
           </>:<>{

            user && role === "pro-user"?<>
            
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/dashboard/user/surveys"><LuPartyPopper /> Participate in surveys</Link></li>
      
              <li><Link to="/dashboard/user/my-reports"><BiSolidReport /> Reported surveys.</Link></li>
              <li><Link to="/dashboard/user/comments"><FaCommentDollar />Commented on surveys.</Link></li>
              <li><Link to="/dashboard/user/pro/paymentHistory"><MdPayments /> Payment History</Link></li>
            
            </>:<>

            {user && role === "user"?<>
            
              
              <li><Link to="/"><FaHome /> Home</Link></li>
              <li><Link to="/dashboard/user/surveys"><LuPartyPopper /> Participate in surveys</Link></li>
      
             <li><Link to="/dashboard/user/my-reports"><BiSolidReport /> Reported surveys.</Link></li>
     
            
            </>:<></>}
           
            </>

           }</>}


            </>
        }

     {/* surveyor
      <li><Link to="/dashboard/surveyAdd">ADD QUESTION</Link></li>
      <li><Link to="/dashboard/surveyor/surveys">Manage surveys</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard/surveyor/feedbacks">feedbacks</Link></li>
  
      admin
      <li><Link to="/dashboard/admin/users">Manage users</Link></li>
      <li><Link to="/dashboard/admin/surveys">Manage surveys Status</Link></li>
      
      <li><Link to="/dashboard/user/paymentHistory">Payment</Link></li>
      

     
     
      user
      <li><Link to="/dashboard/user/surveys">Participate in surveys</Link></li>
      
      <li><Link to="/dashboard/user/my-reports">Reported surveys.</Link></li>
      <li><Link to="/dashboard/user/comments">Commented on surveys.</Link></li>
     
       */}
      

      {
            user ? <>
                <div className='mt-10 text-center border-2 p-5 uppercase font-poppins text-[20px]'>
                <p>role: {role}</p>
                <p>name: {user?.displayName}</p>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </div>
                
            </> : <>
            <a className="btn"><Link to="/login">Login</Link></a>
            </>
        }

    </ul>
  
  </div>
</div>
  );
};

export default Sidebar;