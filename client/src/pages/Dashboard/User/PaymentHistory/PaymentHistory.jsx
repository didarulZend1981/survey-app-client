import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


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
                  <th>comments number</th>
              </tr>
          </thead>
          <tbody>
              {
                  paymentPro.map((pay, index) => <tr key={pay._id}>
                      <th>{index + 1}</th>
                      <th>{pay.email}</th>
                      <th>{pay.price}</th>
                      <th>{pay.transactionId}</th>
                      <th>{pay.date}</th>
                      <th>{pay.member}</th>
                     
                  </tr>)
              }

          </tbody>
      </table>
  </div>
    </div>
  );
};

export default PaymentHistory;