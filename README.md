# 🚚 FleetFlow – Modular Fleet & Logistics Management System

FleetFlow is a full-stack web application designed to streamline fleet and logistics operations for organizations.  
It replaces manual record-keeping with a centralized, digital system that enables efficient vehicle tracking, management, and reporting.

Built with modern web technologies, FleetFlow offers a scalable and modular architecture for future expansion.

---

## 🌟 Key Features

- 🚛 Vehicle Management (Create, Read, Update, Delete)
- 🔍 Advanced Search & Filtering
- 📊 Interactive Dashboard
- 🔗 RESTful API Integration
- 💾 SQLite Database with ORM
- ⚡ Real-Time UI Updates
- 🔐 Secure Authentication (Optional / Planned)

---

## 🛠️ Technology Stack

### Frontend
- React (Vite)
- Axios
- HTML5, CSS3, JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Sequelize ORM
- SQLite Database

---

## 📁 Project Structure

FleetFlow/
│
├── backend/
│   ├── server.js
│   ├── fleetflow.db
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md

## 🚀 Getting Started

Follow the steps below to run FleetFlow locally.

Video Link:- https://image2url.com/r2/default/videos/1771676453526-79625abe-fdbc-4189-99d4-d9312c31912f.mp4

---

### ✅ Prerequisites

Ensure you have installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)

---

### ▶️ Backend Setup

```bash
cd backend
npm install
node server.js
````

Backend server runs at:

```
http://localhost:5000
```

---

### ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend application runs at:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /vehicles     | Fetch all vehicles |
| POST   | /vehicles     | Add new vehicle    |
| PUT    | /vehicles/:id | Update vehicle     |
| DELETE | /vehicles/:id | Remove vehicle     |

---

## 🧩 System Architecture

```
User
  ↓
React Frontend
  ↓ REST API
Node.js + Express Backend
  ↓
SQLite Database
```

FleetFlow follows a client-server architecture where the frontend interacts with the backend through RESTful APIs.

---

## 🎥 Demo

A demonstration video showcasing core functionalities is included in the project repository.

---

## 🔮 Future Enhancements

* 👨‍✈️ Driver Management Module
* 🗺️ Trip & Route Planning
* 🔑 Role-Based Access Control
* 📈 Advanced Analytics
* ☁️ Cloud Deployment
* 📍 GPS Tracking Integration

---

## 💼 Use Cases

- Logistics Companies
- Transport Agencies
- Delivery Services
- Warehouse Operators
- Fleet Owners
  
---

## ⚠️ Known Limitations

- No multi-user support (yet)
- No real-time GPS tracking
- Limited analytics features
  
---

## 🧪 Testing

> Currently, manual testing is used.

Planned:
- Unit Tests
- API Testing
- Integration Testing

---

## 👨‍💻 Developer

**Name:** Smit Arvindbhai Prajapati
**Event:** Odoo Hackathon
**Year:** 2026

GitHub: [https://github.com/Smitprajapati-Coder](https://github.com/Smitprajapati-Coder)

---

## 📜 License

This project is developed for educational and hackathon purposes.
You are free to use, modify, and distribute it with proper attribution.

---

![License](https://img.shields.io/github/license/Smitprajapati-Coder/FleetFlow-Modular-Fleet-Logistics-Management-System)
![Stars](https://img.shields.io/github/stars/Smitprajapati-Coder/FleetFlow-Modular-Fleet-Logistics-Management-System)

---

## ⭐ Support

If you find this project helpful, please consider giving it a ⭐ on GitHub.
Your support helps improve and grow this project!

```

## 📌 Project Status

🚧 This project is actively under development.  
New features and improvements are being added regularly.

---
