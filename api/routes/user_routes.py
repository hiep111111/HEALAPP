from fastapi import APIRouter
from controllers.user_controller import (
    get_all_users_controller,
    get_user_by_id_controller,
    create_user_controller,
    update_user_controller,
    delete_user_controller,
)

router = APIRouter()


# Endpoint cho User
@router.get("/get-all-users")
async def get_users():
    return await get_all_users_controller()


@router.get("/get-user-by-Id/{user_id}")
async def get_user(user_id: str):
    return await get_user_by_id_controller(user_id)


@router.post("/create-user")
async def create_user(user: dict):
    return await create_user_controller(user)


@router.put("/update-user/{user_id}")
async def update_user(user_id: str, user: dict):
    return await update_user_controller(user_id, user)


@router.delete("/delete-users/{user_id}")
async def delete_user(user_id: str):
    return await delete_user_controller(user_id)
