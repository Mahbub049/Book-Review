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
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;