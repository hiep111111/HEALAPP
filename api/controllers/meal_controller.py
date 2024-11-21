from models.meal import Meal
from db import meals_collection
from bson import ObjectId


def parse_mongo_doc(doc: dict) -> dict:
    """Chuyển đổi các ObjectId trong tài liệu MongoDB thành chuỗi."""
    if not doc:
        return None
    doc["_id"] = str(doc["_id"])  # Chuyển ObjectId thành chuỗi
    return doc


async def get_all_meals_controller():
    meals = await meals_collection.find().to_list(length=100)
    return [parse_mongo_doc(doc) for doc in meals]


async def get_meal_by_id_controller(meal_id: str):
    meal = await meals_collection.find_one({"_id": ObjectId(meal_id)})
    if not meal:
        return None
    return parse_mongo_doc(meal)


async def create_meal_controller(meal: Meal):
    result = await meals_collection.insert_one(meal)
    return {"id": str(result.inserted_id)}


async def update_meal_controller(meal_id: str, meal: Meal):
    result = await meals_collection.update_one(
        {"_id": ObjectId(meal_id)}, {"$set": meal}
    )
    return {"updated_count": result.modified_count}


async def delete_meal_controller(meal_id: str):
    result = await meals_collection.delete_one({"_id": ObjectId(meal_id)})
    return {"deleted_count": result.deleted_count}
