

const Faq = () => {
  return (
    <div className="border my-20 font-poppins">
      <h2 className="text-center mt-5 font-extrabold"> FAQ</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          {/* <figure className="w-200%"><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" className="w-3/4"/></figure> */}
     
          <div className="card-body">
          <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    What is the Survey App and how can it benefit my organization?
    </div>
    <div className="collapse-content"> 
      <p>Answer: The Survey App is a comprehensive tool designed to create, distribute, and analyze surveys easily. It can help your organization gather valuable feedback from customers, employees, or any target audience, leading to better decision-making and improved service or product offerings.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What is the Survey App and how does it benefit local businesses?
    </div>
    <div className="collapse-content"> 
    Answer: The Survey App is a user-friendly tool designed for creating, distributing, and analyzing surveys. It helps local businesses gather valuable feedback from customers, allowing them to improve products and services based on real insights.
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I use the Survey App to target specific local demographics?
    </div>
    <div className="collapse-content"> 
    Answer: Yes, the Survey App allows you to target specific local demographics by setting criteria such as age, location, gender, and more. This ensures that you reach the most relevant audience for your surveys.
    </div>
  </div>
</div>
          </div>
</div>
    </div>
  );
};

export default Faq;