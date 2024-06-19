import { useParams } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const FBack = () => {
  const {id} = useParams();

  const {user} =useAuth();
  
const axiosPublic = useAxiosPublic();
  const { refetch, data: feedB = [] } = useQuery({
    queryKey: ['feedback/${id}'],
    queryFn: async() => {
            const { data } = await axiosPublic.get(`feedback/${id}`);
            return data;
        }
        
    })

    const {_id,feedback,surveyId,email,Title} =feedB 

    





  return (
    <div className="w-[200px] mx-auto border-3 mt-[50px]">

        <div className="card w-96 bg-base-100 shadow-xl border-2">
          <div className="card-body font-poppins">
            <h2 className="card-title">Unpublish</h2>
            <p>Survey Title:{Title}</p>
            <p>FeedBack:{feedback}</p>
            <div className="card-actions justify-end">
            <p>email:{email}</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default FBack;