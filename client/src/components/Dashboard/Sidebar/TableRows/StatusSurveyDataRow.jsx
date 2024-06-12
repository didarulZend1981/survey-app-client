import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import FeedbackModal from "../../../FeedbackModal/FeedbackModal";


const StatusSurveyDataRow = ({survey,refetch,serialNumber}) => {
  console.log(survey);
  const {_id,Title,deadline,image,email,status} =survey



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSurveyId, setSelectedSurveyId] = useState(_id);

  const openModal = (_id) => {
    setSelectedSurveyId(_id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSurveyId(null);
  };









//   const axiosSecure = useAxiosSecure();



  //porechec

//   const proUserProm = survey =>{
//      console.log("-------------------",survey);
//      axiosSecure.patch(`/surveys/admin/${survey._id}`)
//      .then(res =>{
//          console.log(res.data)
//          if(res.data.modifiedCount > 0){
//              refetch();
//              Swal.fire({
//                  position: "top-end",
//                  icon: "success",
//                  title: `${survey.Title} is an surveyor Now!`,
//                  showConfirmButton: false,
//                  timer: 1500
//                });
//          }
//      })
//  }

 

  return (

<>

    
    
       <tr>
              <td>{serialNumber}</td>
              <td>{Title}</td>
              <td>{deadline}</td>
              <td>{email}</td>
              <td><img src={image} className="w-[50px]"/></td>
              <td> 








            



              <button className="btn btn-primary" onClick={() => openModal('')}>Unpublish Survey-{ status}</button>
      {isModalOpen && <FeedbackModal surveyId={_id} closeModal={closeModal} />}




              {/* { status === '0' ? '1' : <button
                                        onClick={() => proUserProm(survey)}
                                        className="btn btn-lg bg-orange-500">
                                       {survey.status===1?<>
                                       unpublish</>:<>publish</>}
                                    </button>} */}















{/*                 
        {
            status ? <>
                        <label>Publish</label>
                    </> : 
            
                    <>
                         <label>Unpublish</label>
                    </>
        } */}
               
                
                
               </td>
       </tr>
       </>
  );
};

export default StatusSurveyDataRow;