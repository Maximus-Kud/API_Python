from pydantic import BaseModel
from typing import Annotated
from fastapi import Form



class create_book_model(BaseModel):
  title: Annotated[str, Form(..., min_length=3)]
  author: Annotated[str, Form(..., min_length=3)]

class update_book_model(BaseModel):
  book_id: int
  title: Annotated[str, Form(..., min_length=3)]
  author: Annotated[str, Form(..., min_length=3)]