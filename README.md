# HealthHub - Health Monitoring Platform

## Description
A comprehensive health monitoring platform that helps users track their health metrics, manage medications, receive alerts, and access educational resources. Built with a modern React frontend and a robust Node.js/Express backend.

## Features
- **User Authentication**: Secure login and registration with JWT tokens
- **Health Data Tracking**: Monitor vital signs, health metrics, and trends
- **Medication Management**: Track prescriptions, dosages, and reminders
- **Health Alerts**: Receive notifications for important health events
- **AI Health Assistant**: Interactive chatbot for health advice and queries
- **Educational Resources**: Access to health information and articles
- **Diet Planning**: Create and manage personalized diet charts
- **Profile Management**: User profile with personal health information
- **Responsive Design**: Mobile-friendly interface with collapsible sidebar

## Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing (implied from structure)

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd health-monitoring-platform/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/healthmonitoring
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start the backend server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd health-monitoring-platform/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000` with the backend running on `http://localhost:5000`.

## Usage

1. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`

2. **User Registration/Login:**
   - Create a new account or login with existing credentials
   - Secure authentication with JWT tokens

3. **Navigate Features:**
   - **Dashboard**: Overview of health metrics and quick access to features
   - **Health Tracking**: Monitor and log vital signs and health data
   - **Medication Support**: Manage prescriptions, set reminders, and track adherence
   - **Alerts & Notifications**: View and manage health-related alerts
   - **Educational Resources**: Browse health articles and educational content
   - **Diet Chart**: Create personalized diet plans and track nutrition
   - **Health Assistant**: Interact with AI chatbot for health advice
   - **Profile**: Manage personal information and health preferences

## API Endpoints

The backend provides RESTful API endpoints:

- `GET /api/health-check` - Server health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/health` - Retrieve health data
- `POST /api/health` - Add new health metrics
- `GET /api/chat` - Chat history
- `POST /api/chat` - Send message to chatbot
- `GET /api/alerts` - Retrieve alerts
- `POST /api/alerts` - Create new alert
- `GET /api/diet` - Get diet plans
- `POST /api/diet` - Create diet plan
- `GET /api/medication` - Get medication list
- `POST /api/medication` - Add medication

## Project Structure

```
health-monitoring-platform/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── server.js       # Main server file
│   ├── scripts/            # Utility scripts
│   └── package.json
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   └── App.js          # Main app component
│   └── package.json
└── README.md
```

## Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run create-demo` - Create demo user account

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## Development

### Adding New Features
1. Create feature branches from `main`
2. Implement changes following the existing code structure
3. Add appropriate tests
4. Submit pull requests with detailed descriptions

### Code Style
- Follow React best practices
- Use ESLint configuration for code quality
- Maintain consistent naming conventions
- Add JSDoc comments for complex functions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json files for details.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

**HealthHub** - Empowering users to take control of their health through technology.