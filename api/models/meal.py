from pydantic import BaseModel


class Meal(BaseModel):
    UserId: str
    name: str  # Tên bữa ăn
    calories: float  # Tổng calo của bữa ăn
    proteins: float  # Lượng protein (gram)
    fats: float  # Lượng mỡ (gram)
    carbohydrates: float  # Lượng carbohydrate (gram)
    meal_time: str  # Thời gian ăn (ví dụ: "Sáng", "Trưa", "Tối")

    class Config:
        orm_mode = True
