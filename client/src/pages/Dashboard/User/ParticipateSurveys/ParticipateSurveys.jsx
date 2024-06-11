import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ParticipateSurvesRow from "../../../../components/Dashboard/Sidebar/TableRows/ParticipateSurvesRow";



const ParticipateSurveys = () => {
 const {user} =useAuth();
//  const [surveys, setSurveys] = useState([]);
//   useEffect(() => {
//  const fetchSurveys = async () => {
//  try {
        
//         const response = await axios.get('http://localhost:5000/participate/surveys/didarul1981@gmail.com');
//         setSurveys(response.data);
//       } catch (err) {
//         console.error(err);
//      }



//     };

//     fetchSurveys();
//   },);


  
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: surveys = [] } = useQuery({
    queryKey: ['participate/surveys',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/participate/surveys/${user.email}`);
        return data;
    }
    
})





console.log("login -------------------",surveys)


  return (
    <div>
        <h2>Participate in surveys {surveys.length}</h2>
        
        <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Title</th>
        <th>Image</th>
        <th>Deadline</th>
        <th>Yes</th>
        <th>No</th>
        <th>Total</th>
       
      </tr>
    </thead>
    <tbody>
                  {
                    
                  
                    surveys.map((partipale,index) => (
                    
                      <ParticipateSurvesRow
                      key={partipale?._id}// Unique key for React's reconciliation
                      serialNumber={index + 1} // Serial number starting from 1
                      partipale={partipale}
                     
                      ></ParticipateSurvesRow>
                   
                  ))}
                </tbody>
  </table>



    </div>
  );
};

export default ParticipateSurveys;