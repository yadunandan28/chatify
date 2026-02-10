Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack, featuring secure JWT authentication, real-time messaging with Socket.io, online/offline presence tracking, image uploads, email notifications, and a modern responsive UI.


✨ Features

🔐 Custom JWT Authentication (no third-party auth)

⚡ Real-time messaging using Socket.io

🟢 Online / Offline presence indicators

🔔 Message & typing notification sounds (toggleable)

📨 Welcome emails on signup (Resend)

🗂️ Image uploads with Cloudinary

🚦 API rate-limiting & protection using Arcjet

🎨 Responsive UI with React, Tailwind CSS & DaisyUI

🧠 Global state management using Zustand

🧑‍💻 Clean Git & GitHub workflow

🚀 Free-tier friendly deployment setup

🛠️ Tech Stack
Frontend

React

Tailwind CSS

DaisyUI

Zustand

Socket.io Client

Axios

Vite

Backend

Node.js

Express.js

Socket.io

MongoDB & Mongoose

JWT Authentication

Arcjet (Rate Limiting)

Cloudinary

Resend (Emails)

Deployment & Tools

MongoDB Atlas

Render

Git & GitHub

📂 Project Structure
chat-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── emails/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── README.md
│   └── .gitignore
│
└── README.md

⚙️ Setup & Installation
Prerequisites

Node.js (v18+ recommended)

MongoDB Atlas

Cloudinary Account

Resend Account

1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend folder (see below).

Run the backend server:

npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔑 Environment Variables

Create a .env file inside the backend folder.

PORT=5000
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=no-reply@yourdomain.com

ARCJET_KEY=your_arcjet_api_key

🔌 API Routes
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/me	Get current user
💬 Messages
Method	Endpoint	Description
GET	/api/messages/:userId	Fetch chat messages
POST	/api/messages	Send message
👥 Users
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
📤 Uploads
Method	Endpoint	Description
POST	/api/upload	Upload image to Cloudinary
🔄 Real-Time Socket Events
Event	Description
connect	User connected
disconnect	User disconnected
sendMessage	Emit message
receiveMessage	Receive message
typing	Typing indicator
onlineUsers	Active users list
🧑‍💻 Git Workflow

Feature-based branches

Pull Requests before merge

Meaningful commit messages

Clean project history

📸 Screenshots

<img width="1165" height="806" alt="image" src="https://github.com/user-attachments/assets/e93f3e52-bcf0-4603-8ea5-8756ceb8113e" />

<img width="1191" height="796" alt="image" src="https://github.com/user-attachments/assets/7ee4287b-7f63-45f9-9a40-e23ec1856313" />



📈 Future Enhancements

Google Oauth

Group chats

Read receipts

Message reactions

Search functionality

Push notifications
