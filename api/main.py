from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.user_routes import router as user_router
from routes.meal_routes import router as meal_router
from routes.health_stat_routes import router as health_stat_router

app = FastAPI()

# Thêm middleware cho CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép tất cả các nguồn (có thể chỉ định cụ thể)
    allow_credentials=True,
    allow_methods=[
        "*"
    ],  # Cho phép tất cả các phương thức HTTP (GET, POST, PUT, DELETE,...)
    allow_headers=["*"],  # Cho phép tất cả các header
)

# Đăng ký các route
app.include_router(user_router)
app.include_router(meal_router)
app.include_router(health_stat_router)


@app.get("/app")
def read_root():
    return {"message": "HealthyApp API is running!"}
