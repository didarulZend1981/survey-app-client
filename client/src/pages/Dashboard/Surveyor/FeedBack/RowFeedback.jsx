import React from 'react';
import { Link } from 'react-router-dom';

const RowFeedback = ({feedB,refetch,serialNumber}) => {
     console.log(feedB)
     const {_id,feedback,surveyId,email,Title} =feedB

  return (
    <tr>
          <td>{serialNumber}</td> 
          <td>{feedback}</td>
          <td>{email}</td>
          <td>{Title}</td> 
          <td>unpublish</td>
          <td><Link to={`/dashboard/surveyor/feedback/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                View
                                            </button>
                                        </Link></td>
              
              
    </tr>
  );
};

export default RowFeedback;