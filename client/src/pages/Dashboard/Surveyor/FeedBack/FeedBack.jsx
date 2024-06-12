import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import RowFeedback from './RowFeedback';

const FeedBack = () => {
  const {user} =useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: feedBack = [] } = useQuery({
    queryKey: ['all/feedback/',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/all/feedback/${user.email}`);
        return data;
    }
    
})

  return (
    <div>
      <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Surveys feedBack</h2>
                <h2 className="text-3xl">Total  : {feedBack.length}</h2>
      </div>
      <table>
      <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Title</th>
        <th>Email</th>
        <th>Feedback</th>
        <th>Unpublih</th>
        
       
      </tr>
    </thead>
    <tbody>
    {   feedBack?.length>0 &&

          
              feedBack.map((feedB,index) => (
                               <RowFeedback
                                    key={feedB?._id}// Unique key for React's reconciliation
                                    serialNumber={index + 1} // Serial number starting from 1
                                    feedB={feedB}
                                    refetch={refetch}
                                  />
                                ))
                                
                                }
                </tbody>
  </table>
      </table>
    </div>
  );
};

export default FeedBack;