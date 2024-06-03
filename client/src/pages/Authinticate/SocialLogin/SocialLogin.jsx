import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
// import useAuthHook from "../../hooks/useAuthHook";
import useAuth from "../../../hooks/useAuth";



const SocialLogin = () => {


  const {googleLogin,FacebookLogin,setLoading} =useAuth();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location?.state || "/";
  
  // const from = location.state?.from?.pathname || "/";
 

 const handleGoogleSignIn = async () => {
  try {
    await googleLogin()

    navigate('/')
    toast.success('Signup Successful')
  } catch (err) {
    console.log(err)
    toast.error(err.message)
  }
}

  return (
    <div className="w-4/5 mx-auto mb-4">
     

       <button onClick={()=>handleGoogleSignIn()} className="btn btn-outline btn-primary w-full"> Google</button>


           
     {/* <button onClick={()=>handleSocialLogin(FacebookLogin)} className="btn btn-outline btn-primary"> Facebook</button> */}
    </div>
  );
};

export default SocialLogin;