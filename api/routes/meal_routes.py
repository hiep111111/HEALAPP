from fastapi import APIRouter
from controllers.meal_controller import (
    get_all_meals_controller,
    get_meal_by_id_controller,
    create_meal_controller,
    update_meal_controller,
    delete_meal_controller,
)

router = APIRouter()


# Endpoint cho Meal
@router.get("/get-all-meals")
async def get_meals():
    return await get_all_meals_controller()


@router.get("/get-meals-by-Id/{meal_id}")
async def get_meal(meal_id: str):
    return await get_meal_by_id_controller(meal_id)


@router.post("/create-meal")
async def create_meal(meal: dict):
    return await create_meal_controller(meal)


@router.put("/update-meals/{meal_id}")
async def update_meal(meal_id: str, meal: dict):
    return await update_meal_controller(meal_id, meal)


@router.delete("/delete-meals/{meal_id}")
async def delete_meal(meal_id: str):
    return await delete_meal_controller(meal_id)
