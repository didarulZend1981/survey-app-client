import { Link } from "react-router-dom";


const SurveyDataRow = ({survey,refetch,serialNumber}) => {
  console.log(survey);
  const {_id,Title,deadline,image} =survey
  const parts = deadline.split('-');
  // Rearrange the parts in the desired format 'dd/mm/yyyy'
  const fdeadline = `${parts[2]}-${parts[1]}-${parts[0]}`;

  // const Cparts = data.create_date.split('-');
  // // Rearrange the parts in the desired format 'dd/mm/yyyy'
  // const Cdeadline = `${Cparts[2]}-${Cparts[1]}-${Cparts[0]}`;
  return (
    
       <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              <td>{fdeadline}</td>
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