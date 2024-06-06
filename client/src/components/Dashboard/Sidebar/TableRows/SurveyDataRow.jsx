import { Link } from "react-router-dom";


const SurveyDataRow = ({survey,refetch,serialNumber}) => {
  console.log(survey);
  const {_id,Title,deadline,image} =survey
  return (
    
       <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              <td>{deadline}</td>
              <td><img src={image} className="w-[50px]"/></td>
              <td> 
                
                 
                <Link to={`/dashboard/surveyor/update/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                update
                                            </button>
                                        </Link>
                
                
                || <Link to={`/dashboard/surveyor/surveys/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                View
                                            </button>
                                        </Link></td>
       </tr>
    
  );
};

export default SurveyDataRow;