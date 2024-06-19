import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SurveyDataRow from "../../../../components/Dashboard/Sidebar/TableRows/SurveyDataRow";
import AllUpdateRow from "../../../../components/Dashboard/Sidebar/TableRows/AllUpdateRow";


const AllUpdate = () => {
  const {user} =useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: SurveyAll = [] } = useQuery({
    queryKey: ['surveyor',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/surveyor?email=${user.email}`);
        return data;
    }
    
})
  return (
    <div>
      <SectionTitle subHeading="All Update" heading={SurveyAll.length}></SectionTitle>
      {/* <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Surveys</h2>
                <h2 className="text-3xl">Total Surveys:didar {SurveyAll.length}</h2>
      </div> */}
      
      <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>Yes</th>
        <th>No</th>
        <th>Total</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                  {
                    
                  
                  SurveyAll.map((survey,index) => (
                    
                    
                    <AllUpdateRow
                      key={survey?._id}// Unique key for React's reconciliation
                      serialNumber={index + 1} // Serial number starting from 1
                      survey={survey}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
  </table>
     
      
    </div>
  );
};

export default AllUpdate;