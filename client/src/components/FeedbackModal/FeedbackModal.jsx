import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const FeedbackModal = ({ surveyId,closeModal  }) => {
  const [feedback, setFeedback] = useState('');

  const axiosPublic = useAxiosPublic();
  const { refetch, data: surySngle = [] } = useQuery({
    queryKey: [`surveyor/${surveyId}`],
   
    queryFn: async() => {
            const { data } = await axiosPublic.get(`/surveyor/${surveyId}`);
            return data;
        }
        
    })

    const { email,Title} =surySngle

  const submitFeedback = async () => {
   


    const info = { feedback,surveyId,email,Title};

    console.log(info)
    fetch("https://survey-app-ashy.vercel.app/api/feedback", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Feedback Successfully',
            icon: 'success',
            confirmButtonText: 'ADD'
        })
        
        closeModal()
      }
    })





    
    // try {
    //   await axios.post('/api/feedback', { surveyId, feedback });
    //   closeModal();
    // } catch (error) {
    //   console.error('There was an error submitting the feedback:', error);
    // }
  };

  
  
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Provide Feedback--{Title}</h2>

        {/* <h2 className="font-bold text-lg">Provide Feedback--{surveyId}</h2> */}
        <textarea
          className="textarea textarea-bordered w-full mt-4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        ></textarea>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={submitFeedback}>Submit</button>
          
          
          <button className="btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;