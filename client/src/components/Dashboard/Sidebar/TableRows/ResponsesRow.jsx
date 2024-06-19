import { Link } from "react-router-dom";
import CurrentDeadLine from "../../../CurrentDate/CurrentDeadLine";
import { FaStreetView } from "react-icons/fa";


const ResponsesRow = ({survey,refetch,serialNumber}) => {
  const {_id,Title,deadline,image,email,status,totalVotes,yesVotes} =survey
  return (
    <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              
              <td><CurrentDeadLine date={deadline}/></td>
              <td>{email}</td>
              <td><img src={image} className="w-[50px]"/></td>
              <td>{status}</td>
              <td>{totalVotes-yesVotes}</td>
              <td>{yesVotes}</td>
              <td>{totalVotes}</td>
              <td>
              <Link to={`/dashboard/surveyor/surveys/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-sm bg-orange-500">
                                               <FaStreetView />
                                            </button>
                                        </Link></td>

              
      </tr>
  );
};

export default ResponsesRow;