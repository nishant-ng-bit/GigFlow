# GigFlow – Mini Freelance Marketplace Platform 🚀

GigFlow is a mini freelance marketplace platform built as part of the **Full Stack Development Internship Assignment for ServiceHive**.
The platform enables clients to post gigs, freelancers to apply for them, and supports a complete hiring workflow with authentication and state management.

---

## 🔗 Live Demo

* **Live Link:** https://gig-flow-ng.vercel.app/ (May take upto a min to load)

---

## 📌 Features

### 👤 Authentication & Authorization

* User registration & login (JWT-based authentication)
* Secure password hashing

### 🧑‍💼 Client Features

* Create gigs
* View all applications for posted gigs
* Hire a freelancer
* Update gig status 

### 🧑‍💻 Freelancer Features

* Browse available gigs
* Apply to gigs

### 🔄 Hiring Workflow

1. Client posts a gig
2. Freelancer applies
3. Client hires freelancer
4. Gig status updates accordingly

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Router
* Context API 
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication

### Database

* MongoDB
* Relational schemas using references (Users, Gigs, Applications)

---

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory using the example below:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

---

## 🚀 Getting Started (Local Setup)

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```bash
cd client 
npm install
npm start
```

---

## 🧪 API Highlights

* `POST /api/auth/register`
* `POST /api/auth/login`
* `POST /api/gigs`
* `GET /api/gigs`
* `POST /api/applications`
* `PATCH /api/gigs/:id/hire`

---

## ✅ Assignment Requirements Checklist

* [x] Full-stack implementation
* [x] Authentication & authorization
* [x] Database relationships
* [x] Hiring workflow implemented
* [x] Clean code structure
* [x] `.env.example` included
* [x] Live hosted project

---

## 👨‍💻 Author

Nishant Gupta
Full Stack Developer
GitHub: https://github.com/nishant-ng-bit
LinkedIn: www.linkedin.com/in/nishant-gupta-39ng

---
