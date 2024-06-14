import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import CurrentDate from '../../../../components/CurrentDate/CurrentDate';

const ProPayment = () => {
  const axiosSecure = useAxiosSecure();
  const {user} =useAuth();

  const { refetch, data: proUserPy = [] } = useQuery({
    queryKey: ['payment/',user?.email],
    queryFn: async() => {
        const { data } = await axiosSecure.get(`/payment/${user.email}`);
        return data;
    }
    
})

console.log(proUserPy);
  return (
    <div>
      <h2>Pro menu</h2>
      <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
          {/* head */}
          <thead>
              <tr>
                  <th></th>
                  <th>email</th>
                  <th>price</th>
                  <th>transactionId</th>
                  <th>date</th>
                  <th>member</th>
                 
              </tr>
          </thead>
          <tbody>
            
              {
                  proUserPy.map((pay, index) => <tr key={pay._id}>
                      <th>{index + 1}</th>
                      <th>{pay.email}</th>
                      <th>{pay.price}</th>
                      <th>{pay.transactionId}</th>
                      <th><CurrentDate date={pay.date}></CurrentDate></th>
                      <th>{pay.member}</th>
                     
                  </tr>)
              }
              </tbody>
              </table>
              </div>
    </div>
  );
};

export default ProPayment;