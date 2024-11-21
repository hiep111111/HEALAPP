from pydantic import BaseModel
from typing import Optional


class HealthStats(BaseModel):
    user_id: str  # ID của người dùng (MongoDB Object ID dưới dạng chuỗi)
    date: str  # Ngày ghi nhận thông tin sức khỏe
    weight: float  # Cân nặng vào ngày này
    height: float  # Cân nặng vào ngày này
    calories_burned: float  # Lượng calo tiêu thụ
    steps: Optional[int] = None  # Số bước đi (nếu có)
    activity_level: Optional[str] = (
        None  # Mức độ hoạt động (Ví dụ: "Thấp", "Trung bình", "Cao")
    )

    class Config:
        orm_mode = True
