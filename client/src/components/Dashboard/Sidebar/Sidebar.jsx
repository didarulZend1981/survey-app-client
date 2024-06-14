import React from 'react';
import useRole from '../../../hooks/useRole';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    


      {
            user && role==="admin" ? <>

            <h2>role-admin</h2>
                 <li><Link to="/dashboard/admin/users">Manage users</Link></li>
                  <li><Link to="/dashboard/admin/surveys">Manage surveys Status</Link></li>
      
                  <li><Link to="/dashboard/user/paymentHistory">Payment</Link></li>
           
            </> : <>

           {user && role ==="surveyor" ?<>
           <h2>role-surveyor</h2>
            <li><Link to="/dashboard/surveyAdd">ADD QUESTION</Link></li>
            <li><Link to="/dashboard/surveyor/surveys">Manage surveys</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard/surveyor/feedbacks">feedbacks</Link></li>
           
           </>:<>{

            user && role === "pro-user"?<>
            <h2>role-pro-user</h2>
            <li><Link to="/dashboard/user/surveys">Participate in surveys</Link></li>
      
              <li><Link to="/dashboard/user/my-reports">Reported surveys.</Link></li>
              <li><Link to="/dashboard/user/comments">Commented on surveys.</Link></li>
              <li><Link to="/dashboard/user/pro/paymentHistory">Payment History</Link></li>
            
            </>:<>

            {user && role === "user"?<>
            
              <h2>role-user</h2>
            <li><Link to="/dashboard/user/surveys">Participate in surveys</Link></li>
      
             <li><Link to="/dashboard/user/my-reports">Reported surveys.</Link></li>
     
            
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
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
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