import React from 'react';
import { Link } from 'react-router-dom';
import CurrentDeadLine from '../../components/CurrentDate/CurrentDeadLine';
import CurrentDate from '../../components/CurrentDate/CurrentDate';

const SurveysPageCard = ({PageCard}) => {
  const {_id,Description,Title,category,createDate,deadline,image,totalVotes,yesVotes,noVotes}=PageCard;

  const today = new Date();
  
  const isExpired=today>new Date(deadline);

  const dayC = String(today.getDate()).padStart(2, '0');
  const monthC = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const yearC = today.getFullYear();
  
  const todyDead = `${yearC}-${monthC}-${dayC}`;
  return (
    <div>

          <div>
          <div className="font-poppins">


         <div className="card bg-base-100 shadow-md border">
              <figure>
                    <img src={image} alt={Title} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">

                  <h2 className="card-title text-base font-medium ">
                      <span className="uppercase text-[#23BE0A]">Name</span>:
                      <span>{Title}</span>
                  </h2>

                   <div className="flex">
                      <p className="w-[120px]"><span className="text-[#23BE0A]">Category</span>: {category}</p>
                  </div>

                  <p className="text-base text-justify"><span className="text-[#23BE0A]">Description</span> : 
                     {Description}
                  </p>

                  <div className="flex justify-between">
                      <div><span className="rounded-tl-lg rounded-tr-lg  font-semibold uppercase">Status</span>: End of vote</div>
                      <div><span className="rounded-tl-lg rounded-tr-lg  font-semibold uppercase">Totall Vote</span>:{totalVotes}</div>
                  </div>


                  <div class="mt-5">
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

  

    <div className="uppercase vote  border-solid border-1 border-[#c4b7b7] text-center bg-zinc-900 text-yellow-200 rounded-xl">

      
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
       
        <p>Yes:{yesVotes}</p>
        <p className="text-white">no:{totalVotes-yesVotes}</p>
        <p>Totall:{totalVotes}</p>
      </div>
    </div>
    
    
    
    <div className="card-actions justify-end">
      <button className="btn btn-error"><Link to={`../surveydetails/${_id}`}>Details</Link></button>
    </div>
  </div>




</div>



*/}
























    </div>


          </div>








          {/* <div>


          <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} className="w-[200px]" alt="Album"/></figure>
        <div className="card-body">
        <h2 className="card-title">
          {Title}</h2>
        <p>{Description}</p>
        <p>vote Start:{createDate}</p>
        <p>Vote Deadline:{deadline}</p>

       

        <div>
          <p>YES VOTE:{yesVotes}</p>
          <p>NO VOTE:{totalVotes-yesVotes}</p>
          <p>TOTAL VOTE:{totalVotes}</p>
         </div>

         {  isExpired?<>vonte end {todyDead}</>:<>vote continiu</>  }

       
           <button className="btn btn-primary"> <Link to={`../surveydetails/${_id}`}>Voting Continue</Link></button>



       </div>
         
        
        
        </div>




          </div> */}
      
          
        

        
        
      
    </div>
  );
};

export default SurveysPageCard;