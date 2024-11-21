from models.health_stat import HealthStats
from db import health_stats_collection
from bson import ObjectId


def parse_mongo_doc(doc: dict) -> dict:
    """Chuyển đổi các ObjectId trong tài liệu MongoDB thành chuỗi."""
    if not doc:
        return None
    doc["_id"] = str(doc["_id"])  # Chuyển ObjectId thành chuỗi
    return doc


async def get_all_health_stats_controller():
    health_stats = await health_stats_collection.find().to_list(length=100)
    return [parse_mongo_doc(doc) for doc in health_stats]


async def get_health_stats_by_user_id_controller(user_id: str):
    health_stats = await health_stats_collection.find({"user_id": user_id}).to_list(
        length=100
    )
    return parse_mongo_doc(health_stats)


async def create_health_stat_controller(health_stat: HealthStats):
    result = await health_stats_collection.insert_one(health_stat)
    return {"id": str(result.inserted_id)}


async def update_health_stat_controller(health_stat_id: str, health_stat: HealthStats):
    health_stat_data = health_stat.dict()
    result = await health_stats_collection.update_one(
        {"_id": ObjectId(health_stat_id)}, {"$set": health_stat_data}
    )
    return {"updated_count": result.modified_count}


async def delete_health_stat_controller(health_stat_id: str):
    result = await health_stats_collection.delete_one({"_id": ObjectId(health_stat_id)})
    return {"deleted_count": result.deleted_count}
