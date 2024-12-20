import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
        <div className="">
            <NavBar></NavBar>
        </div>
        
        <div className='min-h-[calc(100vh-58px)]'>
          <Outlet></Outlet>
        </div>
          <Footer></Footer>
    </div>
  );
};

export default Main;