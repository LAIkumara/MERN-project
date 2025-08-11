<div align="center">

# 🚀 MERN Stack Web Application

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=25&duration=3000&pause=1000&color=61DAFB&center=true&vCenter=true&width=600&lines=Full-Stack+Web+Application;MERN+Stack+Technology;Modern+%26+Responsive+Design;Secure+Authentication+System" alt="Typing SVG" />

[![Made with MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Built with Express.js](https://img.shields.io/badge/Backend-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Powered by React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Running on Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)

</div>

---

## 📋 **Project Overview**

A comprehensive full-stack web application showcasing modern web development practices using the **MERN Stack**. This project demonstrates secure user authentication, efficient data management, and responsive design principles with an intuitive admin dashboard.

### ✨ **Key Highlights**
- 🔐 **Secure Authentication System** with JWT tokens
- 🛠️ **Full CRUD Operations** for comprehensive data management
- 👨‍💼 **Admin Dashboard** for user and content management
- 🚀 **RESTful API** architecture for scalable backend services

---

## 🛠️ **Tech Stack**

<div align="center">

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

### **Database**
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)

</div>

---

## 🎯 **Features**

```javascript
const projectFeatures = {
    authentication: {
        login: "Secure user login system",
        registration: "User registration with validation",
        protection: "JWT-based route protection"
    },
    dataManagement: {
        create: "Add new records seamlessly",
        read: "Fetch and display data efficiently",
        update: "Modify existing information",
        delete: "Remove unwanted data safely"
    },
    administration: {
        dashboard: "Comprehensive admin panel",
        userManagement: "Manage user accounts",
        contentControl: "Monitor and control content"
    }
};
```

---

## 🚀 **Quick Start**

### **Prerequisites**
Make sure you have the following installed on your system:
- **Node.js** (v14.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/LAIkumara/MERN-project.git
   cd MERN-project
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Create .env file in backend directory
   cd ../backend
   touch .env
   ```
   
   Add the following environment variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-project
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

5. **Run the Application**
   
   **Backend Server** (Terminal 1):
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend Development Server** (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## 📂 **Project Structure**

```
MERN-project/
├── 📁 backend/
│   ├── 📁 controllers/        # Business logic
│   ├── 📁 models/            # Database schemas
│   ├── 📁 routes/            # API routes
│   ├── 📁 config/            # Configuration files
│   └── 📄 index.js          # Entry point
├── 📁 frontend/
│   ├── 📁 public/            # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/    # React components
│   │   ├── 📁 pages/         # Page components
│   │   ├── 📁 utils/         # Utility functions
│   │   └── 📄 App.js         # Main App component
│   └── 📄 package.json       # Dependencies
└── 📄 README.md              # Project documentation
```

---

## 🔧 **API Endpoints**

### **Authentication**
```http
POST   /login         # User login
GET    /profile       # Get user profile
```

### **User Management**
```http
GET    /users              # Get all users (Admin)
GET    /users/:id          # Get specific user
PUT    /users/:id          # Update user
DELETE users/:id          # Delete user
```

### **Data Operations**
```http
GET    /data               # Fetch all data
POST   /data               # Create new data
PUT    /data/:id           # Update specific data
DELETE /data/:id           # Delete specific data
```

---

## 👨‍💻 **Author**

**Akila Liyanage**
- Portfolio: [https://akila-liyanage.vercel.app/](https://akila-liyanage.vercel.app/)
- LinkedIn: [Akila Liyanage](https://linkedin.com/in/akila-liyanage)
- Email: [akilaimalsha@gmail.com](mailto:akilaimalsha@gmail.com)

---

<div align="center">

### ⭐ **If you found this project helpful, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/LAIkumara/MERN-project?style=social)](https://github.com/LAIkumara/MERN-project/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/LAIkumara/MERN-project?style=social)](https://github.com/LAIkumara/MERN-project/network/members)
[![GitHub issues](https://img.shields.io/github/issues/LAIkumara/MERN-project)](https://github.com/LAIkumara/MERN-project/issues)

**Made with ❤️ and lots of ☕**

</div>
