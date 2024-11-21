import { useEffect, useState } from "react";
import axios from 'axios';
import SurveysPageCard from "./SurveysPageCard";
import { Helmet } from "react-helmet-async";

const SurveysPage = () => {
  const [surveys, setSurveys] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');




  
  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        
        
        
        const response = await axios.get(`https://survey-app-ashy.vercel.app/allSuryesPage?category=${category}&sort=${sort}`);
        setSurveys(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSurveys();
  }, [category, sort]);

 




  return (
    <div className="px-4 font-poppins">
          <Helmet>
        <title>Survey App || Surveys Page</title>
        
      </Helmet>
          <div className="hero h-[300px] text-center bg-base-200 rounded-md uppercase">
          <div className="mt-14">
            <h2 className="text-gray-800 text-3xl font-bold mb-1 uppercase">All Surveys</h2>
          
             <p className="text-sm text-gray-500">See Your all serveys record show and check</p>
   

          </div>
          
          </div>



<div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center  py-10">
  <div className="w-full md:w-auto">
    <select 
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="select w-full md:w-60 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
    >
      <option value="none" selected>All</option>
      <option value="Cooking Appliances">Satisfaction</option>
      <option value="Food Preparation">Performance</option>
      <option value="Beverage Makers">Features</option>
      <option value="Cleaning Tools">Cleaning</option>
      <option value="Storage Solutions">Storage Solutions</option>
      <option value="Efficiency">Efficiency</option>
    </select>
  </div>
  <div className="w-full md:w-auto">
    <select 
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="select w-full md:w-60 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
    >
      <option disabled selected value="">None</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
</div>




         {/* <div className="flex justify-between border-2">


              <div className="">
          <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option value="none" selected>All</option>
                  

                    <option value="Cooking Appliances">Satisfaction</option>
                    <option value="Food Preparation">Performance</option>
                    <option value="Beverage Makers">Features</option>
                    <option value="Cleaning Tools">Cleaning</option>
                    <option value="Storage Solutions">Storage Solutions</option>
                    <option value="Efficiency">Efficiency</option>
                
          </select>
          </div>
          <div className="">
          <select 
          value={sort}
          onChange={(e) => setSort(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option disabled selected value="">None</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                
          </select>
          </div>
            
          </div>*/}
          
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        
        
          
          {   surveys?.length>0 &&
                surveys.map(PageC=>
                  
                    <SurveysPageCard
                    key={PageC._id}
                    PageCard={PageC}
                  
                     >

                    </SurveysPageCard>
                    
                        

                          
                      )
              }


        </div>
              
      
    </div>
  );
};

export default SurveysPage;