import { useEffect, useState } from "react";
import axios from 'axios';
import SurveysPageCard from "./SurveysPageCard";

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
          <h2 className="py-24 text-center">SurveysPage</h2>
          <div>
          <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option value="none" selected>All</option>
                  <option value="Cooking Appliances">Satisfaction</option>
                                <option value="Food Preparation">Performance</option>
                                <option value="Beverage Makers">Features</option>
                                <option value="Cleaning Tools">Quality</option>
                                <option value="Storage Solutions">Design</option>
                                <option value="Storage Solutions">Design</option>
                                <option value="Storage Solutions">Efficiency</option>
                
          </select>

          <select 
          value={sort}
          onChange={(e) => setSort(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option disabled selected value="">None</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                
          </select>
          </div>
          {surveys.length}
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