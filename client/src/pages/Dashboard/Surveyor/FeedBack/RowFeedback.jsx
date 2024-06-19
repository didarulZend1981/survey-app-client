import React from 'react';
import { Link } from 'react-router-dom';
import { FaStreetView } from "react-icons/fa";
const RowFeedback = ({feedB,refetch,serialNumber}) => {
     console.log(feedB)
     const {_id,feedback,surveyId,email,Title} =feedB

  return (
    <tr>
          <td>{serialNumber}</td> 
          <td>{feedback}</td>
          <td>{email}</td>
          <td>{Title}</td> 
          
          <td><Link to={`/dashboard/surveyor/feedback/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaStreetView />
                                            </button>
                                        </Link></td>
              
              
    </tr>
  );
};

export default RowFeedback;