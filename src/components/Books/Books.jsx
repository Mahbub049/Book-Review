import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-[40px] font-bold text-center mb-[36px]">Books</h2>
            <div className="mb-8 grid px-5 lg:px-0 grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map((book, idx)=><Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;