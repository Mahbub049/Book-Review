import { useLoaderData } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = () => {
    const blogData = useLoaderData();
    
    return (
        <div>
            <div className="py-[50px] bg-gray-100 mb-5 rounded-xl"><h2 className="text-[40px] font-bold text-center">Blogs</h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 mb-5">
                {
                    blogData.map((blog, idx)=><BlogDetails key={idx} blog={blog}></BlogDetails>)
                }
            </div>
        </div>
    );
};

export default Blog;