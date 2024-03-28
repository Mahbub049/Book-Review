import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Blog from './components/Blog/Blog.jsx';
import ContactFAQ from './components/ContactFAQ/ContactFAQ.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed",
        loader: ()=> fetch('/books.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pages",
        loader: ()=> fetch('/books.json'),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/books/:id",
        loader: ()=> fetch('/books.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: "/blogs",
        loader: ()=> fetch('/blog.json'),
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <ContactFAQ></ContactFAQ>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
