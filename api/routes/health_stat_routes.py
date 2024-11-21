from fastapi import APIRouter
from controllers.health_stat_controller import (
    get_all_health_stats_controller,
    get_health_stats_by_user_id_controller,
    create_health_stat_controller,
    update_health_stat_controller,
    delete_health_stat_controller,
)

router = APIRouter()


# Endpoint cho Health Stats
@router.get("/get-all-health_stats")
async def get_health_stats():
    return await get_all_health_stats_controller()


@router.get("/get-health_stats-by-Id/{user_id}")
async def get_health_stats_by_user(user_id: str):
    return await get_health_stats_by_user_id_controller(user_id)


@router.post("/create-health_stats")
async def create_health_stat(health_stat: dict):
    return await create_health_stat_controller(health_stat)


@router.put("/update-health_stats/{health_stat_id}")
async def update_health_stat(health_stat_id: str, health_stat: dict):
    return await update_health_stat_controller(health_stat_id, health_stat)


@router.delete("/delete-health_stats/{health_stat_id}")
async def delete_health_stat(health_stat_id: str):
    return await delete_health_stat_controller(health_stat_id)
