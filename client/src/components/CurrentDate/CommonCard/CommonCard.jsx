import CurrentDate from "../CurrentDate";
import CurrentDeadLine from "../CurrentDeadLine";


const CommonCard = ({Title,Description,deadline,createDate,image,totalVotes,yesVotes,inapp,comment}) => {
  return (
    <div>
        



      <div className="card-body border-2 rounded-md">
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


    

  

    
    
    
    
    <div className="card-actions justify-end mt-5">
    <p>
      {inapp==""?<></>:<><lable>Inappropriate surveys:</lable>  {inapp}</>}
      {comment==""?<></>:<><lable>comment:</lable> {comment}</>}
      
      
      
      </p>
    </div>
  </div>

    </div>
      


    
  );
};

export default CommonCard;