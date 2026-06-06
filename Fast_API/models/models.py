from pydantic import BaseModel, Field
from typing import Annotated
from fastapi import Cookie



class create_book_model(BaseModel):
  title: Annotated[str, Field(..., min_length=3), Cookie()]
  author: Annotated[str, Field(..., min_length=3), Cookie()]

class update_book_model(BaseModel):
  book_id: int
  title: Annotated[str, Field(..., min_length=3), Cookie()]
  author: Annotated[str, Field(..., min_length=3), Cookie()]