import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Wishlist = ({book}) => {
    const {bookId, bookName, author, image, tags, yearOfPublishing, publisher, totalPages, category, rating} = book;
    return (
        <div>
            <div className="p-6 flex flex-col lg:flex-row mt-8 gap-6 border-2 rounded-2xl mb-6">
                        <div className="py-7 px-12">
                            <img className="w-[130px] h-[172px]" src={image} alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-4">{bookName}</h3>
                            <p className="font-medium">By : {author}</p>
                            <div className="flex flex-col lg:flex-row py-3 lg:items-center gap-4">
                                <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-center">
                                    <p className="font-bold">Tag</p>
                                    {
                                        tags.map((tag, idx)=><p key={idx} className="py-2 px-4 text-[#23BE0A] font-medium">#{tag}</p>)
                                    }
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaLocationDot />
                                    <p>Year of Publishing: {yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex items-center gap-3">
                                    <HiOutlineUsers />
                                    <p className="text-gray-500">Publisher: {publisher}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdOutlineRequestPage />
                                    <p className="text-gray-500">Page {totalPages}</p>
                                </div>
                            </div>
                            <hr className="border my-4 max-w-full"/>
                            <div className="flex flex-col lg:flex-row gap-3">
                                <p className="px-5 py-3 bg-[#328EFF26] text-[#FFAC33] rounded-[30px]">Category: {category}</p>
                                <p className="px-5 py-3 bg-[#FFAC3326] text-[#FFAC33] rounded-[30px]">Rating: {rating}</p>
                                <Link to={`/books/${bookId}`}><button className="btn text-xl font-bold text-white bg-[#23BE0A] w-full lg:w-auto rounded-full">View Details</button></Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Wishlist;