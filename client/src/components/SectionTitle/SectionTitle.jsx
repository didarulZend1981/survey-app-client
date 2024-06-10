

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
       <div className="mx-auto text-center  my-8 ">
            <p className="text-green mb-2">{subHeading}-{heading}</p>
           
        </div>
    </div>
  );
};

export default SectionTitle;