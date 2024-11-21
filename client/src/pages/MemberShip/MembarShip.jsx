import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Payment from "../Dashboard/Payment/Payment";
import Swal from "sweetalert2";
import { CiBadgeDollar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const MembarShip = () => {
  const {user} =useAuth();
  const navigate = useNavigate()


// const FeatureItem = ({ text }) => (
//       <li className="flex items-center text-sm text-gray-500">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="17"
//           className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
//           viewBox="0 0 24 24"
//         >
//           <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
//         </svg>
//         {text}
//       </li>
// );



  const FeatureItem = ({ text, defaultTicked }) => {
    return (
      <li className="flex items-center text-sm text-gray-500">
        <span
          className={`mr-3 fill-white rounded-full p-[3px] ${
            defaultTicked ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {defaultTicked ? "✔️" : "✖️"}
        </span>
        {text}
      </li>
    );
  };









  const freeMembar=()=>{
    
    user && Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you free Membar",
          showConfirmButton: false,
          timer: 1500
      });
    navigate("/dashboard/user/surveys");
  }
  return (
    <div className="font-poppins uppercase">
      <Helmet>
        <title>Survey App || MemBar Ship</title>
        
      </Helmet>
      <div className="hero min-h-screen bg-base-200">



     
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl font-bold mb-3">Choose a Subscription</h2>
          <p className="text-sm text-gray-500">Change your plan according to your needs</p>
        </div>

        

        <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto">
          {/* Card 1 */}
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="h-32 bg-gray-700 text-center p-4">
              <h3 className="text-2xl text-white mb-1">Free Member</h3>
             
            </div>
            <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <h3 className="text-2xl">Free</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <FeatureItem text="report inappropriate surveys" defaultTicked={true}/>
                <FeatureItem text="report inappropriate surveys" defaultTicked={false}/>
               
               
              </ul>


              <button
                type="button"
                className="w-full mt-8 px-5 mt-2 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full" onClick={() => freeMembar()}
              >
                FREE
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 relative">
           
            <div className="h-32 bg-blue-600 text-center p-4">
              <h3 className="text-2xl text-white mb-1">PRO Member</h3>
              <p className="text-xs text-white">yearly</p>
            </div>
            <div className="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
              <h3 className="text-2xl">$12</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <FeatureItem text="report inappropriate surveys" defaultTicked={true} />
                <FeatureItem text="ommented on surveys" defaultTicked={true} />
               
              </ul>
              <button
                type="button"
                className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full"
              >
               <Link to="/payment">PRO</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
  















































 




</div>
    </div>
  );
};

export default MembarShip;











 // <div className="hero-content flex-col lg:flex-row-reverse">
    
 //    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[250px]">
 //      <form className="card-body">
 //        <h2 className="flex text-[20px]">PRO USER <span className="flex"><CiBadgeDollar  className="ml-2 mt-1 "/> 12/yearly</span></h2>
 //        <div className="form-control mt-6">
 //          <div>
 //            <table>
 //              <tr><td><FaArrowRight /></td><td> report inappropriate surveys</td></tr>
 //              <tr><td><FaArrowRight /></td><td>Commented on surveys</td></tr>
 //            </table>
 //          </div>

 //          {/* <Payment></Payment> */}

 //          <button className="text-[18px] mt-5 btn  bg-sky-500/50 hover:bg-sky-500/100 text-[white]">
           

 //            <Link to="/payment">PRO-USER</Link>
            
 //            </button>
 //        </div>
 //      </form>
 //    </div>



    



 //    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[250px]">
 //      <form className="card-body">
 //        <h2 className="flex text-[20px]">User Member</h2>
 //        <div className="form-control mt-6">
 //        <div>
 //            <table>
 //              <tr><td><FaArrowRight /></td><td> report inappropriate surveys</td></tr>
 //             </table>
 //          </div>

 //            <button className="uppercase text-[18px] mt-12 btn  bg-sky-500/50 hover:bg-sky-500/100 text-[white]"  onClick={() => freeMembar()} >Free User</button>
 //        </div>
 //      </form>
 //    </div>






 //    </div>