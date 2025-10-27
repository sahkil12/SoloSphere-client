import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import TabCategory from "../Components/TabCategory";

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div className="py-5 space-y-10">
            <Slider></Slider>
            <TabCategory jobs={jobs}></TabCategory>
        </div>
    );
};

export default Home;