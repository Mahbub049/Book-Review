import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getBookInformation = () => {
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return []
}

const saveBookInformation = id => {
    const savedBooks = getBookInformation();
    const exists = savedBooks.find(bookId=> bookId === id);
    if(!exists){
        savedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(savedBooks));
        toast.success("Wow so easy!");
    }
    else{
        toast.error("You already added this book")
    }
}

export {getBookInformation, saveBookInformation}