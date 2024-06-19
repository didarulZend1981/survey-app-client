import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaStreetView } from "react-icons/fa";


const ParticipateSurvesRow = ({partipale,serialNumber}) => {
  const {_id,SurveyID } =partipale
  

  const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: [`surveyor/${_id}`],
   
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${SurveyID}`);
            return data;
        }
        
    })


    
    const { Title,deadline,image,totalVotes,yesVotes} =surySngle


  return (
  
            <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              <td><img src={image} className="w-[50px]" alt="" /></td>
              <td>{deadline}</td>
              <td>{yesVotes}</td>
              <td>{totalVotes-yesVotes}</td>
              <td>{totalVotes}</td>
              <Link to={`/dashboard/surveyor/surveys/${SurveyID}`}>
              
                                            <button 
                                                className="mt-2 btn btn-ghost btn-sm bg-orange-500">
                                               <FaStreetView />
                                            </button>
                                        </Link>
              </tr>
    
  );
};

export default ParticipateSurvesRow;