import { Link } from "react-router-dom";


const StatusSurveyDataRow = ({survey,refetch,serialNumber}) => {
  console.log(survey);
  const {_id,Title,deadline,image,email,status} =survey

  return (
    
       <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              <td>{deadline}</td>
              <td>{email}</td>
              <td><img src={image} className="w-[50px]"/></td>
              <td> 
                
        {
            status ? <>
                        <label>Publish</label>
                    </> : 
            
                    <>
                         <label>Unpublish</label>
                    </>
        }
               
                
                
               </td>
       </tr>
    
  );
};

export default StatusSurveyDataRow;