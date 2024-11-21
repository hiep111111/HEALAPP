from pydantic import BaseModel
from typing import Optional


class User(BaseModel):
    name: str
    age: int
    weight: float
    height: Optional[float] = None
    target_weight: Optional[float] = None

    class Config:
        orm_mode = True
