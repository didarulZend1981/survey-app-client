import React from 'react';

const SuryDataRow = ({survey,refetch,serialNumber}) => {
  return (
   
      <tr>
              <td>{serialNumber}</td>
              <td>{survey?.email}</td>
              <td>{survey?.userName}</td>
              <td>{survey?.vote==1?<>yes</>:<>no</>}</td>
              <td>{survey?.inapp==""?<>--</>:<>{survey?.inapp}</>}</td>
              <td>{survey?.comments==""?<>--</>:<>{survey?.comments}</>}</td>
            <td></td>
              
           
                 
               
                
                
               
       </tr>
    
  );
};

export default SuryDataRow;