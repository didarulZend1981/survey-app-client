import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import ReportCard from './ReportCard';

const ReportedSurveys = () => {
  const {user} =useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: partiReport = [] } = useQuery({
    queryKey: ['participate/surveys-inapp/',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/participate/surveys-inapp/${user.email}`);
        return data;
    }
    
})

console.log(partiReport);

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        
        {   partiReport?.length>0 &&
                partiReport.map(reportC=>
                  
                    <ReportCard
                    key={reportC._id}
                    reportCard={reportC}
                    >


                    </ReportCard>

                    
                    
                        

                          
                      )
              }



        </div>
    </div>
  );
};

export default ReportedSurveys;