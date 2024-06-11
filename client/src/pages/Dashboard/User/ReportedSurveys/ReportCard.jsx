import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import CommonCard from "../../../../components/CurrentDate/CommonCard/CommonCard";


const ReportCard = ({reportCard}) => {
  const {_id,inapp,SurveyID}=reportCard;


  const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: [`surveyor/${_id}`],
   
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${SurveyID}`);
            return data;
        }
        
    })
    const { Title,Description,deadline,image,totalVotes,yesVotes} =surySngle
  return (
    <div>







<CommonCard

    Title={Title}
    Description={Description}
    deadline={deadline}
    image={image}
    totalVotes={totalVotes}
    yesVotes={yesVotes}
    inapp={inapp}

>


</CommonCard>
    </div>
  );
};

export default ReportCard;