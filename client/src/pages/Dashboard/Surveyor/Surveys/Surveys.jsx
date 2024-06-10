import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import SurveyDataRow from "../../../../components/Dashboard/Sidebar/TableRows/SurveyDataRow";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Surveys = () => {
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
      <SectionTitle subHeading="All Surveys" heading={SurveyAll.length}></SectionTitle>
      {/* <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Surveys</h2>
                <h2 className="text-3xl">Total Surveys:didar {SurveyAll.length}</h2>
      </div> */}
      <table className="w-full">
      <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                  {
                    
                  
                  SurveyAll.map((survey,index) => (
                    
                    <SurveyDataRow
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

export default Surveys;