from models.user import User
from db import users_collection
from bson import ObjectId
from bson import ObjectId


def parse_mongo_doc(doc: dict) -> dict:
    """Chuyển đổi các ObjectId trong tài liệu MongoDB thành chuỗi."""
    if not doc:
        return None
    doc["_id"] = str(doc["_id"])  # Chuyển ObjectId thành chuỗi
    return doc


# Controller cho User
async def get_all_users_controller():
    users = await users_collection.find().to_list(length=100)
    return [parse_mongo_doc(user) for user in users]


async def get_user_by_id_controller(user_id: str):
    user = await users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        return None
    return parse_mongo_doc(user)  # Chuyển đổi ObjectId thành chuỗi


async def create_user_controller(user: User):
    result = await users_collection.insert_one(user)
    return {"id": str(result.inserted_id)}


async def update_user_controller(user_id: str, user: User):
    result = await users_collection.update_one(
        {"_id": ObjectId(user_id)}, {"$set": user}
    )
    return {"updated_count": result.modified_count}


async def delete_user_controller(user_id: str):
    result = await users_collection.delete_one({"_id": ObjectId(user_id)})
    return {"deleted_count": result.deleted_count}
