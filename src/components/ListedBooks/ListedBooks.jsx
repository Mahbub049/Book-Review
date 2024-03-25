import { RiArrowDropDownLine } from "react-icons/ri";
import ReadBook from "../ReadBook/ReadBook";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookInformation, getWishlistInformation} from "../Utilities/Utilities"
import Wishlist from "../Wishlist/Wishlist";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect(()=>{
        const storedBookId = getBookInformation();
        if(books.length>0){
            const booksRead = books.filter(book=>storedBookId.includes(book.bookId));
            setReadBooks(booksRead);
        }
    },[])
    useEffect(()=>{
        const wishlistBookId = getWishlistInformation();
        if(books.length>0){
            const booksWishlist = books.filter(book=>wishlistBookId.includes(book.bookId));
            setWishlistBooks(booksWishlist);
        }
    },[])
    console.log(books)
    return (
        <div>
            <h2 className="pb-[64px] text-[28px] font-bold text-center">Books</h2>

            <div className="dropdown dropdown-bottom flex justify-center mb-14">
                <div tabIndex={0} role="button" className="btn m-1 text-lg font-semibold bg-[#23BE0A] text-white">Sort By <RiArrowDropDownLine /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg" aria-label="Read Books" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
                    {
                        readBooks.map((book,idx)=><ReadBook key={idx} book={book}></ReadBook>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg" aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
                {
                        wishlistBooks.map((book,idx)=><Wishlist key={idx} book={book}></Wishlist>)
                }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;