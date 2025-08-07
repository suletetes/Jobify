# Jobify

Jobify is a full-stack job management platform that allows users to register, log in, create and manage job postings, view statistics, and update their profiles. It is built with modern technologies including React, Node.js, Express, and MongoDB.

## Features
- User authentication (JWT, cookies)
- Job CRUD operations (Create, Read, Update, Delete)
- Profile management
- File uploads (Cloudinary)
- Data visualization (charts)
- Responsive and modern UI
- Security best practices (Helmet, express-mongo-sanitize)
- Error handling and validation

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Cloudinary
- **Frontend:** React, Vite, React Query, Recharts, Styled Components

## Project Structure
```
Jobify/
  server.js
  package.json
  controllers/
  models/
  routes/
  middleware/
  utils/
  client/
    package.json
    src/
      pages/
      components/
      assets/
      utils/
    public/
```

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd Jobify
   ```
2. **Install dependencies**
   ```bash
   npm run setup-project
   ```
3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URL=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUD_API_KEY=<your-cloudinary-api-key>
   CLOUD_API_SECRET=<your-cloudinary-api-secret>
   NODE_ENV=development
   PORT=3000
   ```
4. **Run the app in development**
   ```bash
   npm run dev
   ```
   This will start both backend and frontend servers concurrently.
5. **Build for production**
   ```bash
   npm run setup-production-app
   ```

## Usage
- Access the app at `http://localhost:3000` (or your configured port).
- Register or log in to manage jobs.
- Admin features and statistics available for authorized users.

## API Endpoints
- `/api/v1/auth` - Authentication routes (register, login, logout)
- `/api/v1/jobs` - Job management routes (CRUD)
- `/api/v1/users` - User profile routes

## Screenshots
Add screenshots of the application to showcase the UI and features.

---

## Demo
A live demo or video walkthrough can be added here.

---

## Detailed Features
- **Authentication & Authorization:** Secure login, registration, and protected routes using JWT and cookies.
- **Job Management:** Create, edit, delete, and view jobs. Filter and search jobs by status, type, and more.
- **Admin Dashboard:** View user statistics, job analytics, and manage users (if admin).
- **Profile Management:** Update user profile, including avatar upload via Cloudinary.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Charts & Analytics:** Visualize job stats with interactive charts (Bar, Area).
- **Notifications:** Real-time feedback using React Toastify.
- **Security:** Helmet for HTTP headers, express-mongo-sanitize for data protection, rate limiting, and validation middleware.
- **Error Handling:** Centralized error handler for consistent API responses.

---

## Environment Variables Example
```
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/jobify
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
PORT=3000
```

---

## How to Test
- **Unit & Integration Tests:** Add tests in the `/test` directory (if available).
- **Mock Data:** Use `populate.js` to seed the database with sample jobs and users for development/testing.

---

## Folder Structure Explained
- **controllers/**: Business logic for authentication, jobs, and users.
- **models/**: Mongoose schemas for User and Job.
- **routes/**: API endpoints for jobs, users, and authentication.
- **middleware/**: Custom middleware for authentication, error handling, validation, and file uploads.
- **client/src/pages/**: Main React pages (Dashboard, Login, Register, Profile, etc).
- **client/src/components/**: Reusable UI components (charts, forms, navigation, etc).
- **client/src/utils/**: Utility functions for API calls and links.
- **client/public/**: Static assets and images.

---

## API Reference
### Auth
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/logout` - Logout

### Jobs
- `GET /api/v1/jobs` - Get all jobs
- `POST /api/v1/jobs` - Create a job
- `PATCH /api/v1/jobs/:id` - Update a job
- `DELETE /api/v1/jobs/:id` - Delete a job

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PATCH /api/v1/users/profile` - Update profile

---

## FAQ
**Q: How do I change the default port?**
A: Set the `PORT` variable in your `.env` file.

**Q: How do I add more job types or statuses?**
A: Edit the constants in `utils/constants.js`.

**Q: How do I deploy Jobify?**
A: Build the frontend (`npm run setup-production-app`), set environment variables, and deploy to your preferred platform (Heroku, Vercel, etc).

---

## Credits
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Styled Components](https://styled-components.com/)
- [Recharts](https://recharts.org/)
- [React Query](https://tanstack.com/query/latest)



