from fastapi import FastAPI

app = FastAPI()
users = []

@app.get("/users")
async def get_users():
    return users

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user
    return {"message": "user not found"}

@app.post("/users")
async def create_user(name: str):
    user = {
        "id": len(users) + 1,
        "name": name
    }
    users.append(user)
    return user

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            users.remove(user)
            return {"message": "user deleted"}
    return {"message": "user not found"}





#           START APP
# python -m uvicorn fast_api_example:app --reload
# http://127.0.0.1:8000/docs