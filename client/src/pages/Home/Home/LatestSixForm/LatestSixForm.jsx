import React from 'react';
import LatestSixCard from './LatestSixCard';
import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from '../../../../hooks/useAxiosPublic';


const LatestSixForm = () => {
  const axiosSecure = useAxiosPublic();
  const { refetch, data: surveyorsLatest = [] } = useQuery({
    queryKey: ['letest/surveyor'],
    queryFn: async() => {
            const { data } = await axiosSecure.get(`/letest/surveyor`);
            return data;
        }
        
    })

   
    console.log("date---------------------------------",new Date())
  return (
    <div>


     
        <h2 className='mt-[24px] text-center text-upercase text-[24px] text-upercase'>most recently created surveys of {surveyorsLatest.length}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        
        
      
        {   surveyorsLatest?.length>0 &&
            surveyorsLatest.map(Lat6Sur=>
              
                
                
                      <LatestSixCard
                        key={Lat6Sur._id}
                        catCard={Lat6Sur}
                      
                      >


                      </LatestSixCard>

                      
                  )

                   
          }


    </div>
    </div>
        
        
    
  );
};

export default LatestSixForm;