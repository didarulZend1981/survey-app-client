import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import CommonCard from "../../../../components/CurrentDate/CommonCard/CommonCard";


const CommentPro = ({comentCard}) => {
  const {_id,vote,comments,SurveyID}=comentCard;


  const axiosPublic = useAxiosPublic();
  const { refetch, data: commentR = [] } = useQuery({
    queryKey: [`surveyor/${_id}`],
   
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${SurveyID}`);
            return data;
        }
        
    })
    const { Title,Description,deadline,image,totalVotes,yesVotes} =commentR


  return (
    <div>
      
      <CommonCard

    Title={Title}
    Description={Description}
    deadline={deadline}
    image={image}
    totalVotes={totalVotes}
    yesVotes={yesVotes}
    inapp=""
    comment={comments}
   

/>



    </div>
  );
};

export default CommentPro;