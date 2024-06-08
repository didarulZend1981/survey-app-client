import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const TopCard = ({catCard}) => {
  const {_id,vote}=catCard;





 
  const { user, logOut } = useAuth();
  const [role, isLoading] = useRole()
  console.log("role--------------------email--",role)
  const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: ['surveyor/${id}'],
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${_id}`);
            return data;
        }
        
    })

    const { data: yesVote = [] } = useQuery({
      queryKey: ['vote/collect/${id}'],
      queryFn: async() => {
              const { data } = await axiosPublic.get(`/vote/collect/${_id}`);
              return data;
          }
          
      })
  
    const {Title,Description,deadline,createDate,category,image} = surySngle;
   
    console.log("---------------------",yesVote);
  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Title}</h2>
    <p>{Description}</p>
    <p>{deadline}</p>
    <p>{createDate}</p>
    <p>{category}</p>
    <p>Totall Vote:{vote}</p>
    <p>Yes Vote:{yesVote?.length}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default TopCard;