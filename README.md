# 🔐 Login Authentication

A modern authentication application built with React and Firebase, featuring secure user login and registration functionality.

## 🌐 Live Demo

**[View Live Site](https://firebase-fighter-io.netlify.app/)**

## ✨ Features

- **User Registration** - Create new accounts with email and password validation
- **Secure Login** - Firebase Authentication integration for secure user sessions
- **Form Validation** - Client-side validation with uppercase, lowercase, and special character requirements
- **Responsive Design** - Mobile-friendly interface that works on all devices
- **Protected Routes** - Access control for authenticated users only
- **Error Handling** - User-friendly error messages for authentication failures
- **Loading States** - Visual feedback during authentication processes

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Next-generation frontend build tool for faster development
- **Firebase Authentication** - Backend authentication service
- **JavaScript** - Primary programming language (97.6%)
- **CSS** - Styling and responsive design
- **Netlify** - Hosting and continuous deployment

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account and project setup

## 🚀 Installation & Setup

1. **Clone the repository**
git clone https://github.com/masumislambadsha/Login-Authentication.git
cd Login-Authentication


2. **Install dependencies**
npm install


3. **Configure Firebase**
- Create a `.env` file in the root directory
- Add your Firebase configuration:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id


4. **Run the development server**
npm run dev


5. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 Build for Production

npm run build


The optimized production files will be generated in the `dist` folder.

## 🎯 What You Can Do

- **Register a New Account** - Sign up with email and password
- **Login to Your Account** - Access your account with credentials
- **Password Validation** - Test different password combinations with real-time validation
- **Logout Functionality** - Securely end your session
- **View Authentication Status** - See your logged-in user information

## 📁 Project Structure
```
Login-Authentication/
├── src/
│ ├── components/ # React components
│ ├── config/ # Firebase configuration
│ ├── pages/ # Page components
│ └── App.jsx # Main application component
├── public/ # Static assets
├── .env # Environment variables (not in repo)
├── package.json # Dependencies and scripts
└── vite.config.js # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌟 Key Implementation Details

This project demonstrates:
- **Firebase Authentication Setup** - Secure user management with Firebase SDK
- **React Router** - Navigation between login, register, and protected pages
- **Form Handling** - Controlled components with state management using `useState`
- **Input Validation** - Regular expressions for password requirements
- **Error Boundaries** - Graceful error handling for authentication failures
- **Environment Variables** - Secure API key management using Vite's env system

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

**Masum Islam Badsha**
- GitHub: [@masumislambadsha](https://github.com/masumislambadsha)

## 🙏 Acknowledgments

- Firebase for authentication services
- Netlify for hosting and deployment
- React team for the amazing framework
- Vite for blazing-fast development experience

---

⭐ **If you found this project helpful, please give it a star!** ⭐
