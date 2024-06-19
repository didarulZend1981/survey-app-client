import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Payment from "../Dashboard/Payment/Payment";
import Swal from "sweetalert2";
import { CiBadgeDollar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const MembarShip = () => {
  const {user} =useAuth();
  const navigate = useNavigate()

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
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[250px]">
      <form className="card-body">
        <h2 className="flex text-[20px]">PRO USER <span className="flex"><CiBadgeDollar  className="ml-2 mt-1 "/> 12/yearly</span></h2>
        <div className="form-control mt-6">
          <div>
            <table>
              <tr><td><FaArrowRight /></td><td> report inappropriate surveys</td></tr>
              <tr><td><FaArrowRight /></td><td>Commented on surveys</td></tr>
            </table>
          </div>

          {/* <Payment></Payment> */}

          <button className="text-[18px] mt-5 btn  bg-sky-500/50 hover:bg-sky-500/100 text-[white]">
           

            <Link to="/payment">PRO-USER</Link>
            
            </button>
        </div>
      </form>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[250px]">
      <form className="card-body">
        <h2 className="flex text-[20px]">User Member</h2>
        <div className="form-control mt-6">
        <div>
            <table>
              <tr><td><FaArrowRight /></td><td> report inappropriate surveys</td></tr>
             </table>
          </div>

            <button className="uppercase text-[18px] mt-12 btn  bg-sky-500/50 hover:bg-sky-500/100 text-[white]"  onClick={() => freeMembar()} >Free User</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default MembarShip;