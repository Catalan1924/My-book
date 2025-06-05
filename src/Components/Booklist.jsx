import React from 'react';
import BookItem from './BookItem.jsx';

function BookList({ books }) {
  return (
    <ul>
    
      {books.length === 0 ? (
        <p>No books in the collection yet. Add some!</p>
      ) : (
        books.map(book => (
          <BookItem key={book.id} book={book} />
        ))
      )}
    </ul>
  );
}

export default BookList;