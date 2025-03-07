import { useLoaderData, useParams } from "react-router-dom";
import { saveBookInformation, saveWishlistInformation} from "../Utilities/Utilities"
import { ToastContainer} from 'react-toastify';
const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(bookEach => bookEach.bookId === idInt);
    console.log(books, idInt)

    const handleReadBook = () =>{
        saveBookInformation(idInt);
    }

    const handleWishlist = () => {
        saveWishlistInformation(idInt);
    }
    
    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[711px] px-5">
            <ToastContainer />
            <div className="flex-1 p-16">
                <img className="lg:w-2/4" src={book.image} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-[40px] mb-4 font-bold">{book.bookName}</h3>
                <p className="text-xl font-medium">By : {book.author}</p>
                <hr className="border my-5"/>
                <p className="text-xl font-medium">{book.category}</p>
                <hr className="border my-5"/>
                <p><span className="font-bold">Review:</span> {book.review}</p>
                <div className="flex pt-6 gap-6 items-center">
                    <p className="font-bold">Tag</p>
                    {
                        book.tags.map((tag, idx)=><p key={idx} className="py-2 px-4 text-[#23BE0A] font-medium">#{tag}</p>)
                    }
                </div>
                <hr className="border my-6"/>
                <div className="flex gap-14 mb-[32px]">
                    <div className="space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="space-y-3">
                        <p className="font-semibold">{book.totalPages}</p>
                        <p className="font-semibold">{book.publisher}</p>
                        <p className="font-semibold">{book.yearOfPublishing}</p>
                        <p className="font-semibold">{book.rating}</p>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-4 mb-10">
                    <button onClick={handleReadBook} className="text-lg font-semibold border-2 rounded-lg py-[18px] px-[28px]">Read</button>
                    <button onClick={handleWishlist} className="text-lg font-semibold bg-[#50B1C9] text-white rounded-lg py-[18px] px-[28px]">Wishlist</button>
                </div>

            </div>
        </div>
        
    );
};

export default BookDetails;