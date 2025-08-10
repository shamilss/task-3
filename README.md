# 📚 Books REST API - Node.js & Express

## 📌 Project Overview  
**Books REST API** is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and Express.  
It allows managing a list of books stored in memory (no database).  
The API is ideal for beginners learning backend development and testing REST endpoints with Postman.

## 💻 Technologies Used  
- Node.js  
- Express.js  
- JavaScript (ES6+)  
- Postman (for API testing)

## 🧩 Features  
- **GET /books** → Retrieve all books  
- **POST /books** → Add a new book  
- **PUT /books/:id** → Update a book by ID  
- **DELETE /books/:id** → Remove a book  
- Stores data **in-memory** (resets when server restarts)

## 🛠️ Setup Instructions  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/task-3.git
   cd task-3
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Start the server**  
   ```bash
   node server.js
   ```
4. **Test with Postman**  
   - **GET** → `http://localhost:3000/books`  
   - **POST** → `http://localhost:3000/books`  
     - Example body (JSON):  
       ```json
       {
         "title": "The Silent Patient",
         "author": "Alex Michaelides"
       }
       ```
   - **PUT** → `http://localhost:3000/books/1`  
     - Example body (JSON):  
       ```json
       {
         "title": "Updated Title",
         "author": "Updated Author"
       }
       ```
   - **DELETE** → `http://localhost:3000/books/1`  

## 📁 Folder Structure  
/project-root  
├── server.js  
├── package.json  
├── package-lock.json  
└── README.md  

## 🙌 Credits  
- Framework: [Express.js](https://expressjs.com/)  
- Runtime: [Node.js](https://nodejs.org/)  
- API Testing: [Postman](https://www.postman.com/)  

## 📣 Note  
This is a beginner-friendly backend project to practice building and testing REST APIs.  
It is **not connected to a database** — all data will reset when the server restarts.
