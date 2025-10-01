<div align="center">
  
# 💬 Chatty 💻

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)

**Chatty is a full-stack, real-time chat application that includes authentication, WebSocket communication, cloud services integration, and responsive UI design.**


[Live Demo](https://chatty-5mcy.onrender.com/) · 
[Report Bug](https://github.com/AndyDLi/Chatty/issues) · 
[Request Feature](https://github.com/AndyDLi/Chatty/issues)

</div>

---

<div align="center">
  <img width="1000" alt="Chatty" src="https://github.com/user-attachments/assets/5834de18-e3cd-4f50-bcd1-7f5462a18d8a" />
</div>

---

## 📋 Table of Contents

- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
- [📁 Project Structure](#project-structure)
- [🏗️ Authentication Diagram](#authentication-workflow-diagram)
- [👨‍💻 Author](#author)

---

## ✨ Features

### Core Functionality
- 🔐 **Custom JWT Authentication** - Secure user registration and login with encrypted passwords
- ⚡ **Real-Time Messaging** - Instant message delivery using Socket.io WebSockets
- 👥 **Contact Management** - Browse all users and view chat history
- 🖼️ **Image Sharing** - Upload and share images via Cloudinary CDN
- 👤 **Profile Management** - Update profile pictures with instant preview

### Real-Time Features
- 🟢 **Online/Offline Status** - Live presence indicators for all users
- 🔔 **Message Notifications** - Visual and audio alerts for new messages
- ⌨️ **Typing Sounds** - Interactive keyboard sound effects (toggleable)
- 📱 **Instant Updates** - Optimistic UI updates for seamless user experience

### Security & Performance
- 🚦 **Rate Limiting** - Arcjet-powered API protection (100 req/min)
- 🤖 **Bot Detection** - Automated bot filtering and spoofed bot detection
- 🛡️ **Security Shield** - Protection against SQL injection, XSS, and common attacks
- 🔒 **HTTP-Only Cookies** - Secure token storage preventing XSS attacks; SameSite = strict cookie attribute
- 🚀 **Optimized Performance** - CDN-hosted assets and efficient state management

### User Experience
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS & DaisyUI
- 🌓 **Smooth Animations** - Polished transitions and loading states
- 📧 **Welcome Emails** - Automated onboarding emails with Resend
- 💬 **Chat History** - Persistent message storage and retrieval
- 📊 **Loading States** - Skeleton screens and spinners for better UX

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19.1.1** | UI library with latest features |
| **Vite** | Fast build tool and dev server |
| **Zustand** | Lightweight state management |
| **React Router v7** | Client-side routing |
| **Axios** | HTTP client for API calls |
| **Socket.io Client** | WebSocket client for real-time features |
| **Tailwind CSS** | Utility-first CSS framework |
| **DaisyUI** | Tailwind component library |
| **Lucide React** | Modern icon library |
| **React Hot Toast** | Elegant notification system |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **Socket.io** | WebSocket server |
| **JWT** | Token-based authentication |
| **bcryptjs** | Password hashing |
| **Cloudinary** | Image upload and CDN |
| **Resend** | Transactional email service |
| **Arcjet** | Security and rate limiting |
| **cookie-parser** | Cookie parsing middleware |
| **CORS** | Cross-origin resource sharing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account
- Resend account
- Arcjet account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AndyDLi/Chatty.git
cd Chatty
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables**

Create `backend/.env` file:
```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key_min_32_characters

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Resend Email
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Chatty Team

# Arcjet Security
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

# Frontend URL
CLIENT_URL=http://localhost:5173
```

5. **Start development servers**

Backend (from `backend/` directory):
```bash
npm run dev
```

Frontend (from `frontend/` directory):
```bash
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

---

## 📁 Project Structure

```
Chatty/
├── backend/
│   ├── src/
│   │   ├── server.js                    # Application entry point
│   │   ├── controllers/
│   │   │   ├── auth.controller.js       # Authentication logic
│   │   │   └── message.controller.js    # Messaging logic
│   │   ├── models/
│   │   │   ├── User.js                  # User schema
│   │   │   └── Message.js               # Message schema
│   │   ├── routes/
│   │   │   ├── auth.route.js            # Auth endpoints
│   │   │   └── message.route.js         # Message endpoints
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js       # JWT verification
│   │   │   ├── arcjet.middleware.js     # Security middleware
│   │   │   └── socket.auth.middleware.js # Socket authentication
│   │   ├── lib/
│   │   │   ├── db.js                    # Database connection
│   │   │   ├── socket.js                # Socket.io setup
│   │   │   ├── cloudinary.js            # Cloudinary config
│   │   │   ├── resend.js                # Email client
│   │   │   ├── arcjet.js                # Security config
│   │   │   ├── env.js                   # Environment variables
│   │   │   └── utils.js                 # Utility functions
│   │   └── emails/
│   │       ├── emailHandlers.js         # Email sending logic
│   │       └── emailTemplates.js        # HTML email templates
│   └── package.json
│
├── frontend/
│   ├── public/                          # Static assets
│   │   ├── sounds/                      # Audio files
│   │   └── *.png                        # Images
│   ├── src/
│   │   ├── App.jsx                      # Main app component
│   │   ├── main.jsx                     # React entry point
│   │   ├── index.css                    # Global styles
│   │   ├── pages/
│   │   │   ├── ChatPage.jsx             # Main chat interface
│   │   │   ├── LoginPage.jsx            # Login form
│   │   │   └── SignUpPage.jsx           # Registration form
│   │   ├── components/
│   │   │   ├── ChatContainer.jsx        # Message display
│   │   │   ├── MessageInput.jsx         # Message composer
│   │   │   ├── ChatsList.jsx            # Recent chats
│   │   │   ├── ContactList.jsx          # All users
│   │   │   ├── ChatHeader.jsx           # Chat title bar
│   │   │   ├── ProfileHeader.jsx        # User profile
│   │   │   ├── ActiveTabSwitch.jsx      # Tab switcher
│   │   │   └── [Other components]
│   │   ├── store/
│   │   │   ├── useAuthStore.js          # Authentication state
│   │   │   └── useChatStore.js          # Chat state
│   │   ├── hooks/
│   │   │   └── useKeyboardSound.js      # Sound effects hook
│   │   └── lib/
│   │       └── axios.js                 # HTTP client config
│   ├── tailwind.config.js               # Tailwind configuration
│   ├── vite.config.js                   # Vite configuration
│   └── package.json
│
├── README.md                            # This file
├── TECHNICAL_NOTES.md                   # Detailed technical documentation
└── package.json                         # Root package.json for deployment
```

---

## 🏗️ Authentication Workflow Diagram

<div align="center">
  <img width="800" height="1000" alt="Auth Diagram" src="https://github.com/user-attachments/assets/70b8f0a0-9035-4777-85db-4e8a7dccdd00" />
</div>

---

## 👤 Author

**Andy Li**

- 🎓 Computer Science Student @ Georgia Institute of Technology
- 💼 LinkedIn: [@andyli8](https://www.linkedin.com/in/andyli8/)
- 🐙 GitHub: [@AndyDLi](https://github.com/AndyDLi)
- 📧 Email: andy.dang.li@gmail.com
- 🌐 Portfolio: [andyli-portfolio.vercel.app](https://andyli-portfolio.vercel.app/)

---
