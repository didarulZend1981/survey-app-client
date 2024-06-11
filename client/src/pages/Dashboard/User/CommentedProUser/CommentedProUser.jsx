import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import CommentPro from "./CommentPro";


const CommentedProUser = () => {


  const {user} =useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: coment = [] } = useQuery({
    queryKey: ['participate/surveys-Coment/',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/participate/surveys-Coment/${user.email}`);
        return data;
    }
    
})
  
  return (
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">

      
      {   coment?.length>0 &&

          
                coment.map(coment=>
                  
                    <CommentPro
                    key={coment._id}
                    comentCard={coment}
                    >


                    </CommentPro>

                    
                    
                        

                          
                      )
              }
    </div>
  );
};

export default CommentedProUser;