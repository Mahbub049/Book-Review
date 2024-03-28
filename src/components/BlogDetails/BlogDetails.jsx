const BlogDetails = ({blog}) => {
    const {title, author, date, image, content} = blog;
    return (
        <div className="border-2 flex gap-6 p-10 rounded-xl shadow-lg">
            <div>
                <img className="w-[100px] rounded-full mt-3" src={image} alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-500 my-2">{author}</p>
                <p className="mb-2">{content}</p>
                <span className="text-gray-500">{date}</span>
            </div>
        </div>
    );
};

export default BlogDetails;