


const PaymentHistoryRow = ({serialNumber,pay}) => {

  



  return (
    <tr>
       
        
          <th>{serialNumber+1}</th>
          <th>{pay.email}</th>
          <th>{pay.price}</th>
          <th>{pay.transactionId}</th>
          <th>{pay.date}</th>
          <th>{pay.member}</th>
    </tr>
  );
};

export default PaymentHistoryRow;