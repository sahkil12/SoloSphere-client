import { Link } from "react-router-dom";

const SlideBanner = ({img, title, subtitle}) => {
    return (
        <div>
            <header className="bg-gray-900">

    <div className="container px-6 py-12 md:py-18 mx-auto">
        <div className="items-center lg:flex gap-5 space-y-10">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg space-y-5">
                    {/* title */}
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h1>
                    {/* subtitle */}
                    <p className="mt-3 text-gray-400">{subtitle}</p>
                    {/* button */}
                    <Link to={'/'} className="btn btn-primary px-5 py-6 mt-6 text-base tracking-wider  uppercase transition-colors duration-300 transform lg:w-auto hover:bg-primary/90 ">Post Job & Hire Expert</Link>
                </div>
            </div>
{/* img */}
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full object-cover h-80 lg:h-[500px] rounded-md lg:max-w-3xl" src={img} alt={title}/>
            </div>
        </div>
    </div>
</header>
        </div>
    );
};

export default SlideBanner;