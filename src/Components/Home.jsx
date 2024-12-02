import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className="bg-[#ffffff]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;