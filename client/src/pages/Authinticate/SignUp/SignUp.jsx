


import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import SocialLogin from "../SocialLogin/SocialLogin";
import { MdAppRegistration } from "react-icons/md";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile,setLoading } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    console.log(from);

  const onSubmit = data => {
    


      console.log("didar check",data);
      createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: 'user',
                            status: 'Verified',
                        }
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });
                                }
                            })


                    })
                    // .catch(error => console.log(error))
                    .catch(error => toast.error(err.message))
            })
  };
 




// const onSubmit = async data => {
//    console.log("onSubmit------",data)

  

//     try {

        
//         setLoading(true)
//       // 1. Upload image and get image url
//       const image_url = await imageUpload(data.photoURL)
//       console.log(image_url)
//       //2. User Registration
//       const result = await createUser(data.email, data.password)
//       console.log(result)

//       // 3. Save username and photo in firebase
//       await updateUserProfile(data.name, image_url)
//       reset();


//       Swal.fire({
//                                   position: 'top-end',
//                                   icon: 'success',
//                                   title: 'User created successfully.',
//                                   showConfirmButton: false,
//                                   timer: 1500
//                               });
                           
//       navigate('/')
//     //   toast.success('Signup Successful')
//     } catch (err) {
//       console.log(err)
//       //toast.error(err.message)

//       Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'User note  success.',
//         showConfirmButton: false,
//         timer: 1500
//     });
 
//     }
//   }


return (
    <div className="pt-18">
        <Helmet>
        <title>Survey App || SignUp</title>
        
      </Helmet>
      <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className='mb-1 mt-4 text-center'>
          <h1 className='my-1 text-2xl font-bold flex mx-auto w-[100px]'><MdAppRegistration className='mt-1 mr-2'></MdAppRegistration> SignUp</h1>
        
        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                             
                               
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                              
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                               
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                               
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#1da1f2] text-white hover:bg-[#3488bd]" type="submit" value="Sign Up" />
                            </div>
                            
                            <p className="text-center"><small className="w-[200px] mx-auto">Already have an account <Link to="/login"><span className="text-[red]">Login</span></Link></small></p>

                        </form>
                                
                        
                       
                      
                        <SocialLogin></SocialLogin>
                    
                    </div>


                </div>
            </div>
                        
    </div>
  );
};

export default SignUp;