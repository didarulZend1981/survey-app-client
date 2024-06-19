import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import CurrentDate from "../../../components/CurrentDate/CurrentDate";
import Swal from "sweetalert2";
import CurrentDeadLine from "../../../components/CurrentDate/CurrentDeadLine";




const SurveysDetails = () => {
  const {id} = useParams();
  const { user, logOut } = useAuth();
  const [role, isLoading] = useRole()
  const navigate = useNavigate();
 
  console.log("role--------------------email--",role)
  const axiosPublic = useAxiosPublic();
 
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: ['surveyor/${id}'],
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${id}`);
            return data;
        }
        
    })
  
    const {Title,Description,deadline,createDate,category,image,totalVotes,yesVotes} = surySngle;

 

      const {  data: voteSngle = [] } = useQuery({
        queryKey: ['vote/${id}'],
        queryFn: async() => {
                const { data } = await axiosPublic.get(`/vote/${id}`);
                return data;
            }
            
        })




   
  //  const dateString = today.toDateString();

    console.log("number of vote---------",surySngle)
  

   const today = new Date();
   const isExpired=today>new Date(deadline);
  //  console.log(isExpired);
   const day = String(today.getDate()).padStart(2, '0');
   const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
   const year = today.getFullYear();
 
   const formattedDate = `${day}-${month}-${year}`;

   const dayC = String(today.getDate()).padStart(2, '0');
    const monthC = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yearC = today.getFullYear();
    
    const todyDead = `${yearC}-${monthC}-${dayC}`;


  //  const parts = deadline.split('-');
  //  // Rearrange the parts in the desired format 'dd/mm/yyyy'
  //  const fdeadline = `${parts[2]}-${parts[1]}-${parts[0]}`;
 
  //  const Cparts = createDate.split('-');
  //  // Rearrange the parts in the desired format 'dd/mm/yyyy'
  //  const Cdeadline = `${Cparts[2]}-${Cparts[1]}-${Cparts[0]}`;

  //  deadline
      

    
    console.log(surySngle);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

      console.log("",data)
      const vote= data.vote=="yes"?1:0;
      
              const surveyItem = {
                Description: Description,
                SurveyID:id,
                Title: Title,
                deadline: deadline,
                createDate: createDate,
                category: category,
                status: 1,
                image: image,
                vote:vote,
               
                email:user?.email,
                userName:user?.displayName,
                comments:data.comments,
                inapp:data.inapp,
                votingDate:formattedDate,
                
           }

           console.log(surveyItem)
           const menuRes = await axiosPublic.post('/serveyVoting', surveyItem);
     
     
      
      
      
      console.log("submite valuecheck------------",surveyItem)
      if(menuRes.data.insertedId){
          // show success popup
          reset();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${Title} is your vote.`,
              showConfirmButton: false,
              timer: 1500
            });

            navigate('/dashboard/user/surveys')



      }

           console.log(surveyItem);

           
           const currentDate = new Date();
            const toda = formatDat(currentDate);

            

    }
    console.log("voting count---",voteSngle)
  return (
    <div className="font-poppins">
      <h2 className="py-20 text-center"></h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-10">
    
      



    <div className="card card-compact  bg-base-100 shadow-xl">
      
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{   Description  }</p>
       
            
        
        <div>
        <label className="mr-2">answer:-</label>
              <label className="mr-2">
                <input type="radio" value='no' {...register('vote', { required: 'vote is required' })} />
                No
              </label>
              <label>
                <input type="radio" value='yes' {...register('vote', { required: 'vote is required' })} />
              yes
              </label>
              
              
            </div>

          
            <div>
          
            
              
            </div>

            
            {

            
              user && role=="pro-user" ? 
                  
                  <>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">comments</span>
                  </label>
                  <textarea {...register('comments')} className="textarea textarea-bordered h-24" placeholder="comments"></textarea>
              </div>
              </>
                  :<>
                  
                  
                  </>

            }
            

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Report inappropriate</span>
                            </label>
                            <textarea {...register('inapp')} className="textarea textarea-bordered h-24" placeholder="comments"></textarea>
                        </div>


                        {/* <input type="date" value={deadline} {...register('deadline')}  /> */}

                            {/* {deadline>formattedDate} */}
                          
                            <div className="flex justify-center p-2 font-light text-[10px]">
          
          <p>Start: <CurrentDate date={createDate}></CurrentDate></p>
          
          
          <p className="text-black">deadline: <CurrentDeadLine date={deadline}/>
          </p>
          <p>vote: {  isExpired?<>end</>:<>continiu</>  }</p>
        </div>
                
        
        
        {  isExpired?<>
          
              
              <div className="flex justify-center p-2 font-light">
          
            <p>Yes:{yesVotes}</p>
            <p className="text-black">no:{totalVotes-yesVotes}</p>
            <p>Totall:{totalVotes}</p>
          </div>
              
              </>:<>vote continiu</>  }
              

              {/* {  todyDead>deadline?<>vote continiu</>:<>
              
              
              
              
              
              </>  } */}
                
            
                        {user ? 

                        <><div className="card-actions justify-end">


    {  isExpired?
    <><button className="btn btn-primary" disabled >vonte end</button></>

    :<><button className="btn btn-primary">voting</button></>  }
                        





                      </div></>:

                      <>
                        <a className="btn"><Link to="/login">Login</Link></a>
                      </>
            }
        
        </form>
    
    </div>


    <div className="card card-compact  bg-base-100 shadow-xl  border-1">
        <h2 className="text-center text-[20px]">Title:{Title}</h2>
        <p className="ml-5 mr-5 warp text-[15px] mt-2">Description:{Description}</p>
        
      <div className="flex justify-center gap-3 uppercase text-[12px] mt-5 mb-5">
        
          <p>Start: <CurrentDate date={createDate}></CurrentDate></p>
          
          
          <p className="text-black">deadline: <CurrentDeadLine date={deadline}/>
          </p>
          <p>vote: {  isExpired?<>end</>:<>continiu</>  }</p>
        
      </div> 
          
        
    <div className="overflow-x-auto">
    

                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>vote</th>
                            <th>Report</th>
                            <th>comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  voteSngle?.length>0 &&
                            voteSngle.map((voter, index) => <tr key={voter._id}>
                                <th>{index + 1}</th>
                                <th>{voter.userName}</th>
                                <th>{voter.email}</th>
                                <th>{voter.vote==1?"yes":"no"}</th>
                                <th>{voter.inapp}</th>
                                <th>{voter.comments}</th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
    </div>





      
      </div>


    </div>
  );
};

export default SurveysDetails;