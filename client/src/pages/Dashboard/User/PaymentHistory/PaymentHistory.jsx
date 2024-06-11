import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PaymentHistoryRow from "../../../../components/Dashboard/Sidebar/TableRows/PaymentHistoryRow";
import CurrentDate from "../../../../components/CurrentDate/CurrentDate";


const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();

  const { data: paymentPro = [], refetch } = useQuery({
    queryKey: ['payment/all'],
    queryFn: async () => {
        const res = await axiosSecure.get('/payment/all');
        return res.data;
    }
})
  

console.log(paymentPro);

  return (
    <div>
      <SectionTitle subHeading="All Payment" heading={paymentPro.length}></SectionTitle>




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
                  paymentPro.map((pay, index) => <tr key={pay._id}>
                      <th>{index + 1}</th>
                      <th>{pay.email}</th>
                      <th>{pay.price}</th>
                      <th>{pay.transactionId}</th>
                      <th><CurrentDate date={pay.date}></CurrentDate></th>
                      <th>{pay.member}</th>
                     
                  </tr>)
              }


{
                    
                  
                    paymentPro.map((payment,index) => (
                  
                      <PaymentHistoryRow
                        key={payment?._id}// Unique key for React's reconciliation
                        serialNumber={index + 1} // Serial number starting from 1
                        pay={payment}
                        refetch={refetch}
                      />
                    ))
                    
                    }

          </tbody>
      </table>
  </div>
    </div>
  );
};

export default PaymentHistory;