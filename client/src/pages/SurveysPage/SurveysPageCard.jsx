import React from 'react';
import { Link } from 'react-router-dom';

const SurveysPageCard = ({PageCard}) => {
  const {_id,Description,Title,category,createDate,deadline,image}=PageCard;
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
        <div className="card-actions justify-end">
        
        <button className="btn btn-primary"> <Link to={`../surveydetails/${_id}`}>Details</Link></button>
        
        
        </div>
        </div>
        </div>

        
        
      
    </div>
  );
};

export default SurveysPageCard;