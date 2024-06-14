import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Payment from "../Dashboard/Payment/Payment";


const MembarShip = () => {
  const {user} =useAuth();
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <h2>PRO USER</h2>
        <div className="form-control mt-6">
          <div>
            <table>
              <tr><td></td><td> report inappropriate surveys</td></tr>
              <tr><td></td><td>Commented on surveys</td></tr>
            </table>
          </div>

          {/* <Payment></Payment> */}

          <button className="btn btn-primary"><li>
           

            <Link to="/payment">PRO-USER 12</Link>
            
            </li></button>
        </div>
      </form>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <h2>User Member</h2>
        <div className="form-control mt-6">
        <table>
        <labe>report inappropriate surveys</labe>
        
            </table>
          <button className="btn btn-primary">Free User</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default MembarShip;