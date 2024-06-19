import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SuryDataRow from "../../../../components/Dashboard/Sidebar/TableRows/SuryDataRow";


const SingleSurvey = () => {
  const {id} = useParams();

  const {user} =useAuth();
  
const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: ['vote/${id}'],
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/vote/${id}`);
            return data;
        }
        
    })



    // const { refetch, data: surySngle = [] } = useQuery({
    //   queryKey: ['vote/collect/${id}'],
    //   queryFn: async() => {
    //           const { data } = await axiosPublic.get(`/vote/collect/${id}`);
    //           return data;
    //       }
          
    //   })

 console.log("---------------------------",surySngle[0]);
  console.log(id);
  return (
    <div>

      {surySngle.length==0?
      <>
      <div>
        <h2> vote not custing yet</h2>
      </div>
      
      
      </>:
      
          
      
      <>
      <SectionTitle subHeading={surySngle[0]?.Title} heading={surySngle.length}></SectionTitle>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>Serial No</th>
        <th>User Email</th>
        <th>User Name</th>
        <th>Vote</th>
        <th>Reported</th>
        <th>Commented</th>
      </tr>
    </thead>
    <tbody>
    {
                    
                  
                    surySngle.map((survey,index) => (
                      <SuryDataRow
                      
                        key={survey?._id}// Unique key for React's reconciliation
                        serialNumber={index + 1} // Serial number starting from 1
                        survey={survey}
                        refetch={refetch}
                      />
                    ))}
    </tbody>
  </table>
</div>
      
      
      
      </>}
      
    </div>
  );
};

export default SingleSurvey;