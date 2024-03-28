import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-10 lg:px-[120px] lg:py-[80px] mb-[100px] gap-16 lg:gap-0">
            <div className="flex flex-col justify-center space-y-12">
                <h1 className="text-5xl leading-[72px] lg:text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
                <div>
                    <button className="rounded-lg text-xl font-bold text-white bg-[#23BE0A] hover:bg-[#4eae3f] py-[17px] px-[28px] w-auto cursor-pointer"><Link to={'/listed'}>View The List</Link></button>
                </div>
            </div>
            <div>
                <img className="w-[318px]" src="https://i.ibb.co/ZL831YF/1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;