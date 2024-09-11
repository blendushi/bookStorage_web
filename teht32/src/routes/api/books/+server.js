import { json } from '@sveltejs/kit';
import { books } from './book-data.js';

export const GET = async () => {
  return json(books);
};

export const POST = async ({ request }) => {
  const body = await request.json();
  if (!body.name || !body.pages || !body.isbn) {
    return json({ error: "Missing required fields" }, { status: 400 });
  }

  const book = {
    id: books.length + 1,
    name: body.name,
    pages: body.pages,
    isbn: body.isbn
  };

  books.push(book);

  return json(book, { status: 200 });
};

export const DELETE = async ({ params }) => {
  const id = params;
  const bookIndex = books.findIndex((book) => book.id == id);
  
  if (bookIndex === -1) {
    return json({ error: "Book not found" }, { status: 404 });
  }

  books.splice(bookIndex, 1);

  return json({ success: true }, { status: 200 });
  
}
