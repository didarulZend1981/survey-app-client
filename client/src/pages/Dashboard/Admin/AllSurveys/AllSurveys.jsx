import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import StatusSurveyDataRow from "../../../../components/Dashboard/Sidebar/TableRows/StatusSurveyDataRow";


const AllSurveys = () => {

  const {user} =useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: SurveyAll = [] } = useQuery({
      queryKey: ['all/surveyor'],
      queryFn: async() => {
          const { data } = await axiosSecure.get(`/all/surveyor`);
          return data;
      }
      
  })


  return (
    <div>
      <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Surveys</h2>
                <h2 className="text-3xl">Total Surveys: {SurveyAll.length}</h2>
      </div>

      <table>
      <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>email</th>
        <th>Image</th>
        
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
                  {
                    
                  
                  SurveyAll.map((survey,index) => (
                    
                    <StatusSurveyDataRow
                      key={survey?._id}// Unique key for React's reconciliation
                      serialNumber={index + 1} // Serial number starting from 1
                      survey={survey}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
  </table>
      </table>
    </div>
  );
};

export default AllSurveys;