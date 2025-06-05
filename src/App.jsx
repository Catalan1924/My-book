import React, { useState } from 'react'
import './index.css';
import BookList from './Components/Booklist.jsx';

function App() {

  const [books, setBooks] = useState([

  ]);


  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');


  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };


  const handleAuthorChange = (e) => {
    setNewAuthor(e.target.value);
  };


  const addBook = (e) => {
    e.preventDefault();


    if (newTitle.trim() === '' || newAuthor.trim() === '') {
      alert('Please enter both title and author.');
      return;
    }

    const newBook = {

      id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1,
      title: newTitle,
      author: newAuthor,
    };


    setBooks([...books, newBook]);


    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <div>
      
      <div className='flex justify-center items-center'><h1 className='flex justify-center items-center text-3xl font-bold mb-4'>My Book Collection</h1></div>


      <form onSubmit={addBook} className='mb-6'>
        <h2 className='flex justify-center items-center text-2xl font-semibold mb-3flex justify-center items-center '>Add a New Book</h2>
       
       
       
        <div className='flex justify-center items-center min-h-20 bg-gray-100 p-4'>
          <label htmlFor="title">Title:</label>
          <input className='border bold rounded px-2 py-1'
            type="text"
            id="title"
            value={newTitle}
            onChange={handleTitleChange}
            required
          />
        </div>



        <div className='flex justify-center items-center min-h-20 bg-gray-100 p-4'>
          <label htmlFor="author" className='text-2  mb-4'>Author:</label>
          <input className='border rounded px-2 py-1'
            type="text"
            id="author"
            value={newAuthor}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <div className="flex justify-center items-center"><button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'>Add Book</button></div>
      </form>
      <BookList books={books} />
    </div>
  );
}

export default App;