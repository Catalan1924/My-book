import React from 'react';
import BookItem from './BookItem.jsx';

function BookList({ books }) {
  return (
    <ul className="list-none p-0"> 
      {books.length === 0 ? (
        <p className="text-center text-gray-500 italic mt-8">No books in the collection yet. Add some!</p>
      ) : (
        books.map(book => (
          <BookItem key={book.id} book={book} />
        ))
      )}
    </ul>
  );
}

export default BookList;