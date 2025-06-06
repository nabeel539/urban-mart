# Urban Mart - Modern E-Commerce Platform

![Urban Mart](https://img.shields.io/badge/Urban-Mart-blue)
![License](https://img.shields.io/badge/license-ISC-green)

Urban Mart is a full-stack e-commerce platform built with modern technologies, offering a seamless shopping experience with features like user authentication, product management, shopping cart, and secure payment processing.

## 🚀 Features

- **User Authentication**

  - Secure user registration and login
  - JWT-based authentication
  - Protected routes

- **Product Management**

  - Browse products with categories
  - Search functionality
  - Product details view

- **Shopping Experience**

  - Shopping cart functionality
  - Order management
  - Secure payment processing with Stripe

- **Admin Features**
  - Product management
  - Order tracking
  - User management

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- Radix UI Components

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Stripe Payment Integration
- Bcrypt for Password Hashing

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/urban-mart.git
cd urban-mart
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

4. Environment Setup

Create `.env` files in both frontend and backend directories:

Backend `.env`:

```
PORT=4000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Frontend `.env`:

```
VITE_API_URL=http://localhost:4000
```

## 🚀 Running the Application

1. Start the Backend Server

```bash
cd backend
npm run server
```

2. Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

## 📝 API Endpoints

- `/api/user` - User authentication and management
- `/api/product` - Product management
- `/api/cart` - Shopping cart operations
- `/api/order` - Order management

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- CORS enabled
- Environment variable protection
- Secure payment processing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Mohammed Nabeel Ahemad - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for the amazing tools and libraries
