import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


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

              </tr>
    
  );
};

export default ParticipateSurvesRow;