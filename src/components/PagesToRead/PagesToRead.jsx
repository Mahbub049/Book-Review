import { useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import { useLoaderData } from "react-router-dom";
import { getBookInformation} from "../Utilities/Utilities"
const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(()=>{
        const storedBookId = getBookInformation();
        if(books.length>0){
            const booksRead = books.filter(book=>storedBookId.includes(book.bookId));
            setReadBooks(booksRead);
        }
    },[])
    return (
        <div>
            <Chart readBooks={readBooks}></Chart>
        </div>
    );
};

export default PagesToRead;