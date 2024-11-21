import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import CurrentDeadLine from "../../../../components/CurrentDate/CurrentDeadLine";
import CurrentDate from "../../../../components/CurrentDate/CurrentDate";
import { Link } from "react-router-dom";




const TopCard = ({catCard}) => {
  const {_id,vote}=catCard;





 
  const { user, logOut } = useAuth();
  const [role, isLoading] = useRole()
  console.log("role--------------------email--",role)
  const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: [`surveyor/${_id}`],
   
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${_id}`);
            return data;
        }
        
    })

    const { data: yesVote = [] } = useQuery({
      queryKey: [`vote/collect/${_id}`],
      queryFn: async() => {
              const { data } = await axiosPublic.get(`/vote/collect/${_id}`);
              return data;
          }
          
      })
  
    const {Title,Description,deadline,createDate,category,image} = surySngle;
   
    console.log("---------------------",yesVote);
    const today = new Date();
    const isExpired=today>new Date(deadline);

  return (
    <div className="font-poppins">




        <div className="card bg-base-100 shadow-md border">
                        <figure>
                            <img src={image} alt={Title} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title text-base font-medium "><span className="uppercase text-[#23BE0A]">Name</span>:<span>{Title}</span></h2>
                        
                        <div className="flex">
                                <p className="w-[120px]"><span className="text-[#23BE0A]">Category</span>: {category}</p>
                        </div>

                        <p className="text-base text-justify"><span className="text-[#23BE0A]">Description</span> : {Description}
                        </p>
                        
                        
      





 <div className="uppercase vote text-base border-solid border-1 border-[#c4b7b7] text-center  rounded-xl">

      
    <div className=" rounded-tl-lg rounded-tr-lg  font-semibold">
      Status
      </div>
      <div className="flex justify-center  text-[10px]">
       
        <p>Start: <CurrentDate date={createDate}></CurrentDate></p>
        
        
        <p className="">deadline: <CurrentDeadLine date={deadline}/></p>
        <p>vote: {  isExpired?<>end</>:<>continiu</>  }</p>
      </div>





      <div className="  font-semibold">
      Vote
      </div>
      <div className="flex justify-center  font-light">
       
        <p>Yes:{yesVote?.length}</p>
        <p className="">no:{vote-yesVote?.length}</p>
        <p>Totall:{vote}</p>
      </div>
    </div>







  <div class="mt-12">
            <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              <Link to={`../surveydetails/${_id}`}>Details</Link>
            </button>
          </div>


                        </div>

       </div>


{/*
        <div className="card lg:card-side bg-base-100 shadow-xl border">
 
        





  




  <div className="card-body">
    <h2 className="card-title">{Title}</h2>
   
    
    <div className="flex justify-between">

        <div className="image w-1/4 h-[50px] my-auto px-auto mr-2">
            <img src={image} className="rounded-lg"/>
        </div>


        <div className="description w-3/4 ml-2">
            <lable>Description:</lable>
            <p className="break-all font-light">{Description}</p>

        </div>

    </div>


    <p><lable>Category:</lable>{category}</p>

  

    <div className="uppercase vote  border-solid border-1 border-[#c4b7b7] text-center bg-zinc-900 rounded-xl">

      
    <div className="bg-red-400 rounded-tl-lg rounded-tr-lg p-2 font-semibold">
      Status
      </div>
      <div className="flex justify-center p-2 font-light text-[10px]">
       
        <p>Start: <CurrentDate date={createDate}></CurrentDate></p>
        
        
        <p className="text-white">deadline: <CurrentDeadLine date={deadline}/></p>
        <p>vote: {  isExpired?<>end</>:<>continiu</>  }</p>
      </div>





      <div className="bg-red-400  p-2 font-semibold">
      Vote
      </div>
      <div className="flex justify-center p-2 font-light">
       
        <p>Yes:{yesVote?.length}</p>
        <p className="text-white">no:{vote-yesVote?.length}</p>
        <p>Totall:{vote}</p>
      </div>
    </div>
    
    
    
    <div className="card-actions justify-end">
    <button className="btn btn-error"><Link to={`../surveydetails/${_id}`}>Details</Link></button>
    </div>
  </div>





</div>
*/}


    </div>
  );
};

export default TopCard;