import { Link } from "react-router-dom";


const AllUpdateRow = ({survey,refetch,serialNumber}) => {
  const {_id,Title,deadline,image,totalVotes,yesVotes} =survey
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
              <td>{yesVotes}</td>
              <td>{totalVotes-yesVotes}</td>
              <td>{totalVotes}</td>
              <td><img src={image} className="w-[50px]"/></td>
              <td> 
                
                 
                <Link to={`/dashboard/surveyor/update/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                               update
                                            </button>
                                        </Link>
                
                
                {/* || <Link to={`/dashboard/surveyor/surveys/${_id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                View
                                            </button>
                                        </Link> */}
                                        
                                        </td>
       </tr>
  );
};

export default AllUpdateRow;