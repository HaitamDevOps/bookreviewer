// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx';
import AddBook from './pages/AddBook.jsx';
import Home from './pages/Home.jsx';
import Book from "./pages/Book.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="*" element={< Home />} />
          <Route index element={< Home />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/book/:id" element ={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
