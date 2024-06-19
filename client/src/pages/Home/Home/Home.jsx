import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import InsightsFeedBack from "./InsightsFeedBack/InsightsFeedBack";

import LatestSixForm from "./LatestSixForm/LatestSixForm";
import TopSix from "./TopSix/TopSix";



const Home = () => {
 

  return (
    <div>
      <Helmet>
        <title>Survey App || Home</title>
        
      </Helmet>
      <Banner/>
      <TopSix/>
      <LatestSixForm/>
      <InsightsFeedBack></InsightsFeedBack>
      <Faq></Faq>
      </div>
  );
};

export default Home;