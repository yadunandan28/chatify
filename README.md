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


Project Structure
🔹 Backend (/backend)

Handles authentication, APIs, real-time messaging, emails, and database logic.

src/controllers/
Request handlers and core business logic

src/emails/
Email templates and Resend email logic

src/lib/
Database connection, Socket.io setup, and utility functions

src/middleware/
Authentication, rate-limiting (Arcjet), and custom middleware

src/models/
Mongoose schemas and data models

src/routes/
REST API route definitions

src/server.js
Express server and Socket.io entry point

.env.example
Environment variables template

package.json / package-lock.json
Backend dependencies and scripts

🔹 Frontend (/frontend)

Responsible for UI, state management, and real-time interaction.

public/
Static assets

src/components/
Reusable UI components

src/hooks/
Custom React hooks

src/lib/
API helpers and utility functions

src/pages/
Page-level components

src/store/
Global state management using Zustand

src/App.jsx
Root React component

src/main.jsx
Application entry point

src/index.css
Global styles

index.html
HTML entry file

eslint.config.js
ESLint configuration

README.md
Frontend documentation

🔹 Root

README.md – Main project documentation

.gitignore – Git ignored files



⚙️ Setup & Installation
Prerequisites

Node.js (v18+ recommended)

MongoDB Atlas

Cloudinary Account

Resend Account



2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend folder (see below).

Run the backend server:

npm run dev



3️⃣ Frontend Setup
cd frontend
npm install
npm run dev




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
