# 🚀 Task Manager Backend API

A secure and scalable **Task Management Backend API** built using **Node.js, Express, and MongoDB** with **JWT Authentication** and **Role-based Access Control**.

---

## 📌 Features

* 🔐 User Authentication (Register & Login)
* 🔑 JWT-based Authorization
* 👥 Role-based Access (User/Admin ready)
* 📝 Full CRUD for Tasks
* 🛡️ Protected Routes using Middleware
* 📦 MongoDB Database Integration
* ⚡ RESTful API with proper status codes

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (jsonwebtoken)
* **Password Security:** bcryptjs
* **API Testing:** Postman

---

## 📁 Project Structure

```
backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
├── server.js
└── .env
```

---

## 🔐 Authentication Flow

1. User registers → password is hashed using bcrypt
2. User logs in → credentials verified
3. Server returns JWT token
4. Token used in headers:

```
Authorization: Bearer <token>
```

5. Middleware verifies token for protected routes

---

## 👥 Role-Based Access

* **user** → Access own tasks
* **admin** → Full access (extendable)

---

## 🔄 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | /api/v1/auth/register | Register new user |
| POST   | /api/v1/auth/login    | Login user        |

---

### 📝 Task Routes (Protected)

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /api/v1/tasks     | Create task   |
| GET    | /api/v1/tasks     | Get all tasks |
| PUT    | /api/v1/tasks/:id | Update task   |
| DELETE | /api/v1/tasks/:id | Delete task   |

---

## 📦 Sample Request

### Create Task

```json
{
  "title": "My First Task",
  "description": "Testing backend API"
}
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/Deepthi-Singareddy/task-manager-backend.git
cd task-manager-backend/backend
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Setup Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run Server

```
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

## 🧪 API Testing

Use **Postman** to test APIs:

* Register → Login → Get Token
* Add token in header
* Access protected routes

---

## 🔒 Security Practices

* Password hashing using bcrypt
* JWT token expiration
* Protected routes with middleware
* Input validation (basic)

---

## ⚙️ Scalability Notes

* Supports horizontal scaling (multiple instances)
* Can integrate Redis for caching
* Easily extendable to microservices architecture
* Database indexing for performance optimization

---

## 🚀 Future Improvements

* Swagger API Documentation
* Pagination & Filtering
* Advanced Role Permissions
* Rate Limiting
* Logging & Monitoring

---

## 📌 Conclusion

This project demonstrates a **production-ready backend system** with secure authentication, scalable architecture, and clean API design.

---

## 👤 Author

**Deepthi**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
