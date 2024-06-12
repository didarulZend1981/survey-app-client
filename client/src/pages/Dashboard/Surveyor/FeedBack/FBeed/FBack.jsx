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
    <div>
      <h2> Unpublish</h2>
      <div>
      <p>FeedBack:{feedback}</p>
        <p>email:{email}</p>
        <p>Title:{Title}</p>

      </div>
    </div>
  );
};

export default FBack;