
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="hero h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/p1sV17L/survey-app-banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold font-poppins">Survey App</h1>
      <p className="mb-5 font-poppins semmi-bold">By conducting survey on our application T Market products, I can see which products are currently in the market and which products will come to the market in the future. I tell our cast members after researching how long they can stay in the market. They do whatever they want.</p>
      <button className="btn bg-[#1da1f2] px-4 py-2 text-sm rounded-full font-bold text-white hover:bg-[#3488bd]"><NavLink
          to="/surveysPages"
         
        >
          Get Survey
        </NavLink></button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;


