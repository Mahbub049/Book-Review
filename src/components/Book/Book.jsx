import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book;
    return (
        <div>
            <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border-2 rounded-2xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="w-[234px] h-[266px] rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3 mb-4">
                        {
                            tags.map((tag, idx)=><span className="py-2 px-4 text-[#23BE0A]" key={idx}>{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title text-2xl font-bold mb-4">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <hr className="border border-dashed my-5" />
                    <div className="flex justify-between">
                        <p className="font-medium">{category}</p>
                        <div className="flex gap-2 items-center">
                            <p className="font-medium">{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Book;