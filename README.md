# 💬 Chatty - Real-Time Chat Application

<div align="center">

![Chatty Logo](frontend/public/chatty-logo.png)

**A modern, full-stack real-time messaging platform built with the MERN stack**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-19.1.1-blue)](https://reactjs.org/)

[Features](#-features) • [Demo](#-demo) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Documentation](#-documentation)

</div>

---

## 📖 About

Chatty is a production-ready, real-time chat application that demonstrates modern web development practices and industry-standard security measures. Built as a learning project, it showcases full-stack development skills including authentication, WebSocket communication, cloud services integration, and responsive UI design.

### 🎯 Project Goals

- Implement secure, custom JWT authentication without third-party auth providers
- Build real-time bidirectional communication using WebSockets
- Integrate multiple cloud services (Cloudinary, Resend)
- Apply production-grade security measures (rate limiting, bot detection)
- Create a polished, responsive user interface
- Follow modern React patterns and state management best practices

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
- 🔒 **HTTP-Only Cookies** - Secure token storage preventing XSS attacks
- 🚀 **Optimized Performance** - CDN-hosted assets and efficient state management

### User Experience
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS & DaisyUI
- 🌓 **Smooth Animations** - Polished transitions and loading states
- 📧 **Welcome Emails** - Automated onboarding emails with Resend
- 💬 **Chat History** - Persistent message storage and retrieval
- 📊 **Loading States** - Skeleton screens and spinners for better UX

---

## 🎬 Demo

### Screenshots

**Login Page**
```
Clean authentication interface with form validation
```

**Chat Interface**
```
Split-pane design with contacts list and active chat
Real-time message delivery and online status indicators
```

**Message Features**
```
Text messages, image sharing, timestamps, and delivery status
```

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

### Development Tools
- **nodemon** - Auto-restart development server
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **dotenv** - Environment variable management

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

## 🔌 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Register a new user account.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "_id": "654abc123...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": ""
}
```

#### POST `/api/auth/login`
Authenticate existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "_id": "654abc123...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": "https://cloudinary.com/..."
}
```

#### POST `/api/auth/logout`
Clear authentication cookie.

**Response (200):**
```json
{
  "message": "Logged Out Successfully"
}
```

#### GET `/api/auth/check`
Verify authentication status.

**Headers:** Cookie with JWT token

**Response (200):**
```json
{
  "_id": "654abc123...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": "https://cloudinary.com/..."
}
```

#### PUT `/api/auth/update-profile`
Update user profile picture.

**Request Body:**
```json
{
  "profilePic": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..."
}
```

### Message Endpoints

#### GET `/api/messages/contacts`
Retrieve all registered users (potential contacts).

**Response (200):**
```json
[
  {
    "_id": "654abc123...",
    "fullName": "Jane Smith",
    "email": "jane@example.com",
    "profilePic": "https://cloudinary.com/..."
  }
]
```

#### GET `/api/messages/chats`
Get users with existing chat history.

**Response (200):**
```json
[
  {
    "_id": "654abc123...",
    "fullName": "Jane Smith",
    "profilePic": "https://cloudinary.com/..."
  }
]
```

#### GET `/api/messages/:id`
Fetch message history with specific user.

**Parameters:**
- `id` - User ID to fetch messages with

**Response (200):**
```json
[
  {
    "_id": "654msg123...",
    "senderId": "654abc123...",
    "receiverId": "654def456...",
    "text": "Hello!",
    "image": null,
    "createdAt": "2025-10-01T12:00:00.000Z",
    "updatedAt": "2025-10-01T12:00:00.000Z"
  }
]
```

#### POST `/api/messages/send/:id`
Send a message to a user.

**Parameters:**
- `id` - Recipient user ID

**Request Body:**
```json
{
  "text": "Hello there!",
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..." // optional
}
```

**Response (201):**
```json
{
  "_id": "654msg123...",
  "senderId": "654abc123...",
  "receiverId": "654def456...",
  "text": "Hello there!",
  "image": "https://cloudinary.com/...",
  "createdAt": "2025-10-01T12:00:00.000Z",
  "updatedAt": "2025-10-01T12:00:00.000Z"
}
```

### Socket.io Events

#### Client → Server Events
*None (authentication handled via middleware)*

#### Server → Client Events

**`getOnlineUsers`**
Emitted when a user connects or disconnects.

**Payload:**
```javascript
["userId1", "userId2", "userId3"]
```

**`newMessage`**
Emitted when a message is sent to the user.

**Payload:**
```javascript
{
  _id: "654msg123...",
  senderId: "654abc123...",
  receiverId: "654def456...",
  text: "Hello!",
  image: "https://cloudinary.com/...",
  createdAt: "2025-10-01T12:00:00.000Z"
}
```

---

## 🔐 Security Features

### Authentication Security
- **Password Hashing:** bcrypt with 10 salt rounds
- **JWT Tokens:** 7-day expiration, stored in HTTP-only cookies
- **CSRF Protection:** SameSite=strict cookie attribute
- **XSS Prevention:** HTTP-only cookies, input sanitization
- **Secure Cookies:** HTTPS-only in production

### API Security
- **Rate Limiting:** 100 requests per minute per IP (Arcjet)
- **Bot Detection:** Automated filtering of malicious bots
- **Security Shield:** Protection against SQL injection, XSS attacks
- **Spoofed Bot Detection:** Identifies and blocks fake good bots
- **Input Validation:** Server-side validation for all inputs
- **File Upload Limits:** 5MB max size, image files only

### Data Security
- **MongoDB Security:** TLS/SSL encrypted connections
- **Password Exclusion:** Never returned in API responses
- **Environment Variables:** Sensitive data stored securely
- **CORS Configuration:** Specific origin whitelisting

---

## 🎨 UI/UX Features

### Design System
- **Color Palette:** Slate gray base with cyan/pink accents
- **Typography:** Clean, readable font hierarchy
- **Spacing:** Consistent padding and margins
- **Animations:** Smooth transitions and micro-interactions

### Responsive Design
- **Mobile-First:** Optimized for small screens
- **Breakpoints:** Adaptive layout for tablets and desktops
- **Touch-Friendly:** Large tap targets for mobile users

### User Feedback
- **Loading States:** Skeleton screens and spinners
- **Error Handling:** User-friendly error messages
- **Success Notifications:** Toast notifications for actions
- **Optimistic Updates:** Instant UI updates before server confirmation

---

## 📚 Documentation

### For Developers

- **[TECHNICAL_NOTES.md](TECHNICAL_NOTES.md)** - Comprehensive technical documentation with code examples, architecture explanations, and learning notes

### Key Documentation Sections
1. **Architecture Overview** - System design and tech stack
2. **Backend Deep Dive** - Server setup, database, authentication, WebSockets
3. **Frontend Deep Dive** - React components, state management, routing
4. **Security Best Practices** - Authentication, API protection, data security
5. **Code Examples** - Reusable patterns and implementations
6. **Deployment Guide** - Production setup and environment configuration

---

## 🚀 Deployment

### Production Build

From the root directory:

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

### Environment Configuration

Set `NODE_ENV=production` and ensure all production environment variables are configured:

```env
NODE_ENV=production
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_production_secret
CLIENT_URL=https://yourdomain.com
# ... other production configs
```

### Deployment Platforms

**Recommended Platforms:**
- **Sevalla** - Free tier available, easy deployment
- **Render** - Automatic deployments from GitHub
- **Railway** - Developer-friendly platform
- **Heroku** - Classic PaaS solution
- **DigitalOcean App Platform** - Managed applications

### Deployment Checklist

- [ ] Set all environment variables
- [ ] Configure production MongoDB
- [ ] Enable HTTPS/SSL
- [ ] Set strong JWT secret
- [ ] Configure CORS with production domain
- [ ] Enable Arcjet LIVE mode
- [ ] Test email delivery
- [ ] Configure Cloudinary production settings
- [ ] Set up error monitoring (optional: Sentry)
- [ ] Configure database backups
- [ ] Test all features in production

---

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**
- [ ] User registration with validation
- [ ] User login with correct credentials
- [ ] User login with incorrect credentials
- [ ] Logout functionality
- [ ] JWT token persistence
- [ ] Protected route access

**Messaging:**
- [ ] Send text messages
- [ ] Send images
- [ ] Receive messages in real-time
- [ ] View message history
- [ ] Online/offline status updates

**Profile:**
- [ ] Update profile picture
- [ ] Profile picture preview

**Security:**
- [ ] Rate limiting triggers correctly
- [ ] Bot detection blocks requests
- [ ] XSS prevention
- [ ] CSRF protection

---

## 🤝 Contributing

This is a learning project, but contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Andy Li**
- GitHub: [@AndyDLi](https://github.com/AndyDLi)
- Project: [Chatty](https://github.com/AndyDLi/Chatty)

---

## 🙏 Acknowledgments

### Technologies & Services
- MongoDB for database solutions
- Cloudinary for image hosting
- Resend for email services
- Arcjet for security features
- Socket.io for real-time communication

### Learning Resources
- React documentation
- Node.js best practices
- MongoDB University
- Web security guidelines

---

## 🗺️ Roadmap

### Potential Future Features

- [ ] **Group Chats** - Multi-user conversations
- [ ] **Message Reactions** - Emoji reactions to messages
- [ ] **Typing Indicators** - Show when users are typing
- [ ] **Read Receipts** - Message delivery and read status
- [ ] **Message Editing** - Edit sent messages
- [ ] **Message Deletion** - Delete messages for everyone
- [ ] **Voice Messages** - Record and send audio
- [ ] **Video Calls** - WebRTC integration
- [ ] **File Sharing** - Send documents and files
- [ ] **Search Functionality** - Search messages and users
- [ ] **Dark/Light Theme** - Theme toggle
- [ ] **Message Encryption** - End-to-end encryption
- [ ] **Notification Settings** - Customizable notifications
- [ ] **Block/Report Users** - User safety features
- [ ] **Message Pinning** - Pin important messages
- [ ] **Status Updates** - WhatsApp-style statuses

---

## 🎯 Learning Outcomes

### Technical Skills Demonstrated

**Backend Development:**
- Building RESTful APIs with Express.js
- Database modeling with MongoDB and Mongoose
- JWT authentication and session management
- WebSocket implementation for real-time features
- Third-party API integration (Cloudinary, Resend, Arcjet)
- Security best practices and rate limiting
- Middleware pattern and error handling

**Frontend Development:**
- Modern React with hooks and functional components
- Global state management with Zustand
- Real-time UI updates and optimistic rendering
- Responsive design with Tailwind CSS
- File upload and preview functionality
- Form handling and validation
- Component composition and reusability

**DevOps & Deployment:**
- Environment variable management
- Production build optimization
- Static file serving
- CORS configuration
- Git version control workflow

**Software Engineering Principles:**
- Separation of concerns
- DRY (Don't Repeat Yourself)
- Clean code and naming conventions
- Error handling and logging
- Security-first approach
- Performance optimization

---

## �️ Troubleshooting

### Common Issues

**Issue:** Socket.io connection fails
```
Solution: Verify CORS settings match your CLIENT_URL and cookies are enabled
```

**Issue:** MongoDB connection error
```
Solution: Check your MONGO_URI and ensure MongoDB Atlas IP whitelist includes your IP
```

**Issue:** Cloudinary upload fails
```
Solution: Verify API credentials and ensure image is under 5MB
```

**Issue:** Rate limiting triggers too frequently
```
Solution: Adjust Arcjet configuration or wait for rate limit window to reset
```

**Issue:** Authentication token invalid
```
Solution: Clear cookies and re-login, verify JWT_SECRET is consistent
```

For more detailed troubleshooting, see [TECHNICAL_NOTES.md](TECHNICAL_NOTES.md).

---

## 📊 Project Statistics

- **Total Lines of Code:** ~3,000+
- **Components:** 15+ React components
- **API Endpoints:** 8 RESTful endpoints
- **Database Models:** 2 (User, Message)
- **Real-time Events:** 2 Socket.io events
- **Third-party Services:** 3 (Cloudinary, Resend, Arcjet)
- **Development Time:** Educational project timeline
- **Technologies Used:** 20+ tools and libraries

---

## 💡 Key Features Explained

### Real-Time Architecture
The application uses a hybrid approach:
- **HTTP REST API** for standard CRUD operations (authentication, fetching data)
- **WebSocket (Socket.io)** for real-time features (messaging, presence)
- **Optimistic UI Updates** for instant perceived performance

### Security Layers
Multiple security measures protect the application:
1. **HTTP-only Cookies:** Prevent XSS attacks
2. **SameSite Strict:** Prevent CSRF attacks
3. **bcrypt Hashing:** Secure password storage
4. **Rate Limiting:** Prevent brute force and DDoS
5. **Bot Detection:** Filter malicious traffic
6. **Input Validation:** Multiple validation layers
7. **HTTPS Enforcement:** Secure data transmission in production

### State Management Strategy
Zustand provides lightweight, efficient state management:
- **useAuthStore:** Authentication, user data, socket connection
- **useChatStore:** Messages, contacts, UI state
- **No Context API Boilerplate:** Simpler than Redux
- **Direct Access:** No provider wrapping needed

---

## 📝 Code Quality

### Code Standards
- ✅ Consistent naming conventions (camelCase for variables, PascalCase for components)
- ✅ Comprehensive inline comments explaining complex logic
- ✅ ESLint configuration for code quality enforcement
- ✅ Error boundaries and graceful error handling
- ✅ Loading states and user feedback throughout

### Project Structure
- ✅ Feature-based organization
- ✅ Separation of concerns (controllers, models, routes, components)
- ✅ Reusable components and utilities
- ✅ Clear file naming conventions

---

## �📞 Support

If you have questions or need help:

1. Check the [TECHNICAL_NOTES.md](TECHNICAL_NOTES.md) for detailed documentation
2. Open an issue on GitHub
3. Review existing issues for similar problems
4. Read through code comments for implementation details

---

## 💼 Portfolio & Resume

This project demonstrates proficiency in:
- **Full-Stack Development** (Frontend + Backend + Database)
- **Real-Time Web Applications** (WebSocket, Socket.io)
- **Modern JavaScript/React** (ES6+, Hooks, State Management)
- **API Development** (RESTful design, Authentication, Security)
- **Database Design** (NoSQL, MongoDB, Schema modeling)
- **DevOps Basics** (Deployment, Environment configuration)
- **Security Awareness** (Authentication, Rate limiting, Input validation)
- **UI/UX Design** (Responsive design, Loading states, User feedback)

**Perfect for:**
- Junior/Mid-level Full-Stack Developer positions
- React Developer roles
- Node.js Backend Developer positions
- Technical interviews and coding assessments
- Portfolio demonstrations

---

## ⭐ Show Your Support

If you found this project helpful or learned something from it, please consider giving it a star ⭐ on GitHub!

**What You Can Learn From This Project:**
- Complete authentication system implementation
- Real-time features with WebSockets
- Modern React patterns and hooks
- State management with Zustand
- RESTful API design and best practices
- MongoDB database modeling
- File upload and image handling
- Email integration
- Security implementation
- Deployment to production

---

## 📚 Additional Resources

### Recommended Learning Path
1. Start with [TECHNICAL_NOTES.md](TECHNICAL_NOTES.md) for comprehensive documentation
2. Explore the codebase starting with `server.js` and `App.jsx`
3. Understand the data flow from routes → controllers → models
4. Study the Zustand stores for state management patterns
5. Examine the Socket.io implementation for real-time features

### Technologies to Explore Next
- **TypeScript:** Add type safety to the project
- **Testing:** Jest, Vitest, Playwright for comprehensive testing
- **Docker:** Containerize the application
- **CI/CD:** Automate deployment with GitHub Actions
- **GraphQL:** Alternative to REST API
- **Redis:** Add caching layer for performance
- **Microservices:** Split into separate services

---

<div align="center">

**Built with ❤️ as a Full-Stack Learning Project**

Demonstrating Modern Web Development Best Practices

[Report Bug](https://github.com/AndyDLi/Chatty/issues) • [Request Feature](https://github.com/AndyDLi/Chatty/issues) • [View Documentation](TECHNICAL_NOTES.md)

---

### 🌟 If this project helped you learn, please star it! 🌟

</div>
