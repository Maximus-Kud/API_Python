from fastapi import FastAPI, Query, status, HTTPException, Cookie
from models.models import create_book_model, update_book_model
from typing import Annotated



app = FastAPI()
books = []



@app.get("/books", status_code=status.HTTP_200_OK)    # example
async def get_books():
  return {"message": books}


@app.get("/books/search")
async def get_book_by_title(title: Annotated[str, Query(max_length=50), Cookie()]):
  for book in books:
    if (book["title"] == title):
      return {"message": book}
  
  raise HTTPException(
    status_code=status.HTTP_404_NOT_FOUND,
    detail="Book not found"
  )


@app.get("/books/{book_id}")
async def get_book_by_id(book_id: int):
  for book in books:
    if book["id"] == book_id:
      return {"message": book}
    
  raise HTTPException(
    status_code=status.HTTP_404_NOT_FOUND,
    detail="Book not found"
  )


@app.post("/books")
async def create_book(create_book: create_book_model):
  book = {
    "id": len(books) + 1,
    "title": create_book.title,
    "author": create_book.author
  }

  books.append(book)
  return {"message": book}


@app.put("/books/{book_id}")
async def update_book(update_book: update_book_model):
  for book in books:
    if book["id"] == update_book.book_id:
      book["title"] = update_book.title
      book["author"] = update_book.author

      return {"message": book}

  raise HTTPException(
    status_code=status.HTTP_404_NOT_FOUND,
    detail="Book not found"
  )


@app.delete("/books/{book_id}")
async def delete_book(book_id: int):
  for book in books:
    if book["id"] == book_id:
      books.remove(book)

      return {"message": "Book deleted"}
    
  raise HTTPException(
    status_code=status.HTTP_404_NOT_FOUND,
    detail="Book not found"
  )