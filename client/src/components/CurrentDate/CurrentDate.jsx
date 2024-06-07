

const CurrentDate = ({date}) => {
  const today = new Date(date);
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = today.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export default CurrentDate;