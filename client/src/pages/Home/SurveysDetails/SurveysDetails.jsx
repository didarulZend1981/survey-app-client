import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import CurrentDate from "../../../components/CurrentDate/CurrentDate";
import Swal from "sweetalert2";




const SurveysDetails = () => {
  const {id} = useParams();
  const { user, logOut } = useAuth();
  const [role, isLoading] = useRole()
 
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
   
  //  const dateString = today.toDateString();

    console.log("number of vote---------",surySngle)
  

   const today = new Date();
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
      }

           console.log(surveyItem);

           
           const currentDate = new Date();
            const toda = formatDat(currentDate);

            

    }
  return (
    <div>
      <h2 className="py-24 text-center">Single page-{id}</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Survey</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      


<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div className="card card-compact w-96 bg-base-100 shadow-xl">
  
<form onSubmit={handleSubmit(onSubmit)} className="card-body">
    <h2 className="card-title">{Title}</h2>
    <p>{   Description  }</p>
        {formattedDate}
    
<label>
       
        </label>
    <div>
          <label>
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
                       
               
            
          {  todyDead>deadline?<>vote continiu</>:<>vonte end</>  }


          {  todyDead>deadline?<>vote continiu</>:<>
          
          
          <div>

              <p>Yes Vote:{yesVotes}</p>
              <p>No Vote:{totalVotes-yesVotes}</p>
              <p>Total Vote:{totalVotes}</p>
          </div>
          
          
          </>  }
             
          totalVotes,yesVotes
                    {user ? 

                    <><div className="card-actions justify-end">
                    <button className="btn btn-primary">{  todyDead>deadline?<>vote continiu</>:<>vonte end</>  }</button>
                  </div></>:

                  <>
                    <a className="btn"><Link to="/login">Login</Link></a>
                  </>
                  }
    
    </form>
 
</div>
      
      </div>


    </div>
  );
};

export default SurveysDetails;