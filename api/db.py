from motor.motor_asyncio import AsyncIOMotorClient
import os

# Lấy thông tin kết nối MongoDB từ biến môi trường hoặc thông qua URL cố định
MONGO_URI = "mongodb+srv://hiepvu5171:ewMN1DR85a57GmUG@healthyapp.h1xxr.mongodb.net/?retryWrites=true&w=majority&appName=HEALTHYAPP"

# Kết nối đến MongoDB Atlas
client = AsyncIOMotorClient(MONGO_URI)
db = client.get_database("HEALTHYAPP_1")

# Collection
users_collection = db.get_collection("users")
meals_collection = db.get_collection("meals")
health_stats_collection = db.get_collection("health_stats")
