import React from 'react';
import { Link } from 'react-router-dom';

const SurveysPageCard = ({PageCard}) => {
  const {_id,Description,Title,category,createDate,deadline,image,totalVotes,yesVotes}=PageCard;

  const today = new Date();
  const dayC = String(today.getDate()).padStart(2, '0');
  const monthC = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const yearC = today.getFullYear();
  
  const todyDead = `${yearC}-${monthC}-${dayC}`;
  return (
    <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} className="w-[200px]" alt="Album"/></figure>
        <div className="card-body">
        <h2 className="card-title">
          {Title}</h2>
        <p>{Description}</p>
        <p>vote Start:{createDate}</p>
        <p>Vote Deadline:{deadline}</p>

         {  todyDead>deadline?<>
         
         <div></div>
         
         
         </>:<>
         
         
         <div>
          <p>YES VOTE:{yesVotes}</p>
          <p>NO VOTE:{totalVotes-yesVotes}</p>
          <p>TOTAL VOTE:{totalVotes}</p>
         </div>
         
         </>  }


        
         
          <div className="card-actions justify-end">
          {  todyDead>deadline?<>
       <button className="btn btn-primary"> <Link to={`../surveydetails/${_id}`}>Voting Continue</Link></button>
       </>:<>
       
       
       <button className="btn btn-primary"><Link to={`../surveydetails/${_id}`}>Voting Ending</Link></button>
       
       </>  }




       </div>
         
        
        
        </div>
        </div>

        
        
      
    </div>
  );
};

export default SurveysPageCard;