import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl font-extrabold mb-10 text-red-600">Oops!</h1>
            <h3 className="text-4xl font-bold">404 - Page Not Found</h3>
            <p className="my-6 px-40 mx-auto text-center">The page you are looking for might have been removed had its name changed or is temporarily unavailable. </p>
            <Link to={"/"}><button className="bg-[#23BE0A] px-7 py-4 text-xl font-semibold text-white rounded-full">Go to Homepage</button></Link>
        </div>
    );
};

export default Errorpage;