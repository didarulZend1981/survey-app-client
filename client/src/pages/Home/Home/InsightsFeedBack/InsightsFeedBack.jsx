

const InsightsFeedBack = () => {
  return (
    <div className="border my-20">
      <h1 className="text-center mt-5 font-extrabold">Survey App User Feedback and Insights</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
          <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Introduction" checked/>
                <div role="tabpanel" className="tab-content p-10">Survey apps are playing an important role in today's digital age. They provide an effective method of gathering user feedback and opinions for various organizations. This information helps businesses improve the quality of their products and services.</div>




                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="feedback" />
                <div role="tabpanel" className="tab-content p-10">User feedback is an invaluable resource for an organization's improvement. Survey apps communicate directly with users and gather accurate information about their experiences. It helps companies identify their weaknesses and find areas of potential improvement.</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tinsights" />
                <div role="tabpanel" className="tab-content p-10">Analyzing data collected through survey apps provides valuable insights for organizations. These insights provide information about market trends, customer needs and satisfaction. This information is essential for proper decision making and strategic planning of the organization.</div>




                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Analysis" />
                <div role="tabpanel" className="tab-content p-10">Survey apps provide a variety of data analysis tools that provide deeper insights from user responses. Businesses can assess their performance through data visualization, real-time reporting and customized reports.</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Experience" />
                <div role="tabpanel" className="tab-content p-10">Apps can improve their service quality and user experience based on user feedback. By collecting feedback apps can understand user needs and expectations and make changes accordingly.</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Conclusion" />
                <div role="tabpanel" className="tab-content p-10">Survey apps are an essential tool for collecting and analyzing user feedback. They provide organizations with important insights that are helpful for their continuous improvement. Therefore, if used properly, survey apps can play an essential role in the success of a business.</div>



              
              </div>

            </div>

      </div>
        



      
    </div>
  );
};

export default InsightsFeedBack;