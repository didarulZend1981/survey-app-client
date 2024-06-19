import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
// import useAuthHook from "../../hooks/useAuthHook";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {


  const {googleLogin,setLoading} =useAuth();
  const axiosPublic = useAxiosPublic();
    

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location?.state || "/";
  
  // const from = location.state?.from?.pathname || "/";
 

//  const handleGoogleSignIn = async () => {
//   try {
//     await googleLogin()

//     navigate('/')
//     toast.success('Signup Successful')
//   } catch (err) {
//     console.log(err)
//     toast.error(err.message)
//   }
// }


 const handleGoogleSignIn = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
                
                role: 'user',
                status: 'Verified',
            }
            axiosPublic.post('/user', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

  return (
    <div className="w-4/5 mx-auto mb-4">
     



       <button onClick={handleGoogleSignIn} className="btn outline-white  w-full  hover:bg-sky-200"> <FcGoogle /> Google</button>


           
     {/* <button onClick={()=>handleSocialLogin(FacebookLogin)} className="btn btn-outline btn-primary"> Facebook</button> */}
    </div>
  );
};

export default SocialLogin;