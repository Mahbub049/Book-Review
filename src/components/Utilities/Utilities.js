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
        toast.success("You read this book");
    }
    else{
        toast.error("You already added this book")
    }
}

const getWishlistInformation = () => {
    const wishlistStoredBooks = localStorage.getItem('wishlist');
    if(wishlistStoredBooks){
        return JSON.parse(wishlistStoredBooks);
    }
    return []
}

const saveWishlistInformation = id => {
    const wishlistSavedBooks = getWishlistInformation();
    const savedBooks = getBookInformation();
    const existsBook = savedBooks.find(bookId=> bookId === id);
    const exists = wishlistSavedBooks.find(bookId=> bookId === id);
    if(!exists && !existsBook){
        wishlistSavedBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlistSavedBooks));
        toast.success("You added to wishlist");
    }
    else{
        toast.error("You already read this book")
    }
}

export {getBookInformation, saveBookInformation, getWishlistInformation, saveWishlistInformation}