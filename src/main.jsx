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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
