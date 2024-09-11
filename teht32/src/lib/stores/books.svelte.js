import * as bookApi from "$lib/http-actions/books-api.js";

let books = $state([]);

const initBooks = async () => {
  if (books.length > 0) return;
  books = await bookApi.getBooks();
}

const useBookStore = () => {
  return {
    get books() {
      return books;
    },
    addBook: (book) => {
      books = [...books, book]
    },
    removeBook: (id) => {
      books = books.filter((book) => book.id !== id);
    },
  };
};

export { initBooks, useBookStore };