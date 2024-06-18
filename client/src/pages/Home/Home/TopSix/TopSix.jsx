import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import TopCard from "./TopCard";


const TopSix = () => {
  const axiosSecure = useAxiosPublic();
  const { refetch, data: voteColllection = [] } = useQuery({
    queryKey: ['vote/collection'],
    queryFn: async() => {
            const { data } = await axiosSecure.get(`/vote/collection`);
            return data;
        }
        
    })
console.log(voteColllection);

  return (
    <div>
          <div className="text-center mt-10 mb-10">
          <h3 className="text-2xl text-orange-700 font-bold uppercase border-b-[3px] w-[400px] mx-auto pb-2"> most voted surveys of {voteColllection.length}</h3>
          
          
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">

                
          {   voteColllection?.length>0 &&
            voteColllection.map(topCa=>
              

                
                      <TopCard
                        key={topCa._id}
                        catCard={topCa}
                      
                      >


                      </TopCard>

                      
                  )
          }
                    
                    
          </div>
    </div>
  );
};

export default TopSix;