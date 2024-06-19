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
    <div>
          <Helmet>
        <title>Survey App || Surveys Page</title>
        
      </Helmet>
          <div className="pt-24">
          <h2 className=" text-center uppercase">SurveysPage</h2>
          </div>
          <div className="mt-4 mb-2 text-center">
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
          <div className="mb-4 text-center">
          <select 
          value={sort}
          onChange={(e) => setSort(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option disabled selected value="">None</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                
          </select>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        
        
          
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