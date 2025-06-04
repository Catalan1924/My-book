import React from 'react';

function BookItem({ book }) {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
    </li>
  );
}

export default BookItem;