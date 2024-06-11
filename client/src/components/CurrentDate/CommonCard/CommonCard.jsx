

const CommonCard = ({Title,Description,deadline,image,totalVotes,yesVotes,inapp}) => {
  return (
    
      <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie"/></figure>
            <div className="card-body">
            <h2 className="card-title">{Title}</h2>
            <p>{Description}</p>
            <p>Total Vote:{totalVotes}
            Yes Vote:{yesVotes}
            No vote:{totalVotes-yesVotes}</p>
            <p>reports:{inapp}</p>
            
            </div>
      </div>
    
  );
};

export default CommonCard;