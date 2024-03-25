import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-between px-[120px] py-[80px] mb-[100px]">
            <div className="flex flex-col justify-center space-y-12">
                <h1 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
                <div>
                    <button className="btn text-xl font-bold text-white bg-[#23BE0A] w-auto"><Link to={'/listed'}>View The List</Link></button>
                </div>
            </div>
            <div>
                <img className="w-[318px]" src="https://i.ibb.co/ZL831YF/1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;