from fastapi import FastAPI, Query



app = FastAPI()
books = []



@app.get("/books")
async def get_books():
  return books


@app.get("/books/search")
async def get_book_by_title(title: str = Query(...)):
  for book in books:
    if (book["title"] == title):
      return book
    
  return {"error": "Book not found"}


@app.get("/books/{book_id}")
async def get_book_by_id(book_id: int):
  for book in books:
    if book["id"] == book_id:
      return book
    
  return {"error": "Book not found"}


@app.post("/books")
async def create_book(title: str, author: str):
  book = {
    "id": len(books) + 1,
    "title": title,
    "author": author
  }

  books.append(book)
  return book


@app.put("/books/{book_id}")
async def update_book(book_id: int, title: str, author: str):
  for book in books:
    if book["id"] == book_id:
      book["title"] = title
      book["author"] = author

      return book

  return {"error": "Book not found"}


@app.delete("/books/{book_id}")
async def delete_book(book_id: int):
  for book in books:
    if book["id"] == book_id:
      books.remove(book)

      return {"message": "Book deleted"}
    
  return {"error": "Book not found"}