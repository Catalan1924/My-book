import React, { useState } from 'react'; 
import BookList from './BookList.jsx';

function App() {

  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
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
      <h1>My Book Collection</h1>

      
      <form onSubmit={addBook}>
        <h2>Add a New Book</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={handleTitleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={newAuthor}
            onChange={handleAuthorChange}
            required 
          />
        </div>
        <button type="submit">Add Book</button>
      </form>

      <hr /> 

      
      <BookList books={books} />
    </div>
  );
}

export default App;