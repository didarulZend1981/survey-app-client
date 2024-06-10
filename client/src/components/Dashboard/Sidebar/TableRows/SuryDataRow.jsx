import React from 'react';

const SuryDataRow = ({survey,refetch,serialNumber}) => {
  return (
   
      <tr>
              <td>{serialNumber}</td>
              <td>{survey.email}</td>
              <td>{survey.vote}</td>
            <td></td>
              
           
                 
               
                
                
               
       </tr>
    
  );
};

export default SuryDataRow;