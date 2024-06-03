import { useEffect, useState } from 'react';
  import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
 
  import { Link, useLocation, useNavigate } from 'react-router-dom';

  import Swal from 'sweetalert2'

import { CiLogin } from "react-icons/ci";
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  
  const [disabled, setDisabled] = useState(true);
  const { signIn ,loading, setLoading,} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
      loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
          .then(result => {
            console.log("login then",result);
              const user = result.user;
              console.log("login then",user);
              Swal.fire({
                  title: 'User Login Successful.',
                  showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                  }
              });
              navigate(from, { replace: true });
          })
  }

  const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
      }
      else {
          setDisabled(true)
      }
  }

     

      return (
          
              <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col md:flex-row-reverse">
                      
                      <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                     
                      <div className='mb-1 mt-4 text-center'>
          <h1 className='my-1 text-2xl font-bold flex mx-auto w-[100px]'><CiLogin className='mt-1 mr-2'></CiLogin> Login</h1>
        
        </div>
                      <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                              
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                               
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">

                                <input 
                                
                                disabled={disabled} 
                                className="btn btn-primary" 
                                type="submit" 
                                value="Login" 
                                
                                ></input>



                            
                                
                            
                            </div>
                        </form>
                        <div className='w-96 mx-auto'><small>New Here? <Link to="/signup">Create an account</Link> </small></div>
                         
                         <div><SocialLogin></SocialLogin></div>
                         
                          
                      </div>
                  </div>
              </div>
  );
};

export default Login;