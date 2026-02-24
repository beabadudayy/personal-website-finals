# # Personal Portfolio Website

A modern, responsive personal portfolio website with a guestbook feature. Built with Vue.js, Nest.js, and Supabase for the WEBPROG Final Project.

## 🚀 Features

- **Personal Profile**: Showcase your about me, skills, projects, and contact information
- **Responsive Design**: Fully mobile and desktop responsive layout
- **Guestbook/Comments**: Allow visitors to leave comments
- **Modern Tech Stack**: Vue.js frontend with Nest.js backend
- **Database Integration**: Supabase PostgreSQL database
- **REST API**: GET and POST endpoints for comments
- **Input Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling throughout
- **Production Ready**: Configured for deployment on Vercel

## 📁 Project Structure

```
personal-website-finals/
├── frontend/                 # Vue.js Frontend
│   ├── src/
│   │   ├── components/      # Vue components
│   │   │   └── Guestbook.vue
│   │   ├── App.vue          # Main app component
│   │   ├── main.js          # App entry point
│   │   └── style.css        # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json          # Vercel deployment config
│   └── .env.example         # Environment variables template
│
├── backend/                 # Nest.js Backend
│   ├── src/
│   │   ├── comments/        # Comments module
│   │   │   ├── comments.controller.ts
│   │   │   ├── comments.service.ts
│   │   │   ├── comments.module.ts
│   │   │   └── dto/
│   │   │       └── create-comment.dto.ts
│   │   ├── supabase/        # Supabase service
│   │   │   └── supabase.service.ts
│   │   ├── app.module.ts    # Main app module
│   │   └── main.ts          # App entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   ├── vercel.json          # Vercel deployment config
│   └── .env.example         # Environment variables template
│
├── database/
│   └── schema.sql           # Supabase database schema
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Axios** - HTTP client for API requests
- **CSS3** - Modern styling with CSS variables

### Backend
- **Nest.js** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Supabase** - PostgreSQL database and backend services

### Deployment
- **Vercel** - Frontend and backend hosting
- **Supabase** - Database hosting

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account
- Vercel account (for deployment)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/personal-website-finals.git
cd personal-website-finals
```

### 2. Set Up Supabase Database

1. Create a new project at [https://supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL script from `database/schema.sql` to create the comments table
4. Get your project URL and anon key from Settings > API

### 3. Set Up Backend

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your Supabase credentials:
# SUPABASE_URL=your_supabase_project_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
# PORT=3001
# FRONTEND_URL=http://localhost:3000

# Start development server
npm run start:dev
```

The backend will run on http://localhost:3001

### 4. Set Up Frontend

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local and add your backend URL:
# VITE_API_URL=http://localhost:3001

# Start development server
npm run dev
```

The frontend will run on http://localhost:3000

## 🌐 Deployment

### Deploy Backend to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy backend:
   ```bash
   cd backend
   vercel
   ```

3. Set environment variables in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `FRONTEND_URL` (your frontend URL)

4. Copy the deployment URL (e.g., `https://your-backend.vercel.app`)

### Deploy Frontend to Vercel

1. Deploy frontend:
   ```bash
   cd frontend
   vercel
   ```

2. Set environment variable in Vercel dashboard:
   - `VITE_API_URL` = your backend URL from previous step

3. Your site will be live at the provided URL!

### Alternative: Deploy via Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com)
2. Import your Git repository
3. Create separate projects for `frontend` and `backend`
4. Set the root directory accordingly
5. Add environment variables in project settings
6. Deploy!

## 🔧 API Endpoints

### GET /api/comments
Retrieve all comments from the database

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great portfolio!",
    "created_at": "2026-02-24T10:30:00Z"
  }
]
```

### POST /api/comments
Create a new comment

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great portfolio!"
}
```

**Response:**
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great portfolio!",
  "created_at": "2026-02-24T10:30:00Z"
}
```

## ✅ Validation & Error Handling

### Client-Side Validation
- Required field validation
- Email format validation
- Character limit enforcement (500 chars for message)
- Real-time character counter

### Server-Side Validation
- Input sanitization
- Email format validation
- Message length validation
- Proper HTTP error codes
- Detailed error messages

## 🎨 Customization

### Personalize Your Portfolio

Edit the following files to add your personal information:

1. **Frontend - App.vue**: Update personal information, skills, projects, and contact details
2. **Frontend - style.css**: Customize colors, fonts, and styling
3. **Frontend - index.html**: Change the page title and meta information

### Color Scheme

Update CSS variables in `frontend/src/style.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... customize other colors ... */
}
```

## 📝 Environment Variables Reference

### Backend (.env)
```
PORT=3001
FRONTEND_URL=http://localhost:3000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:3001
```

## 🧪 Testing

### Test Backend API

```bash
# Get all comments
curl http://localhost:3001/api/comments

# Create a comment
curl -X POST http://localhost:3001/api/comments \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## 📚 Documentation

- [Vue.js Documentation](https://vuejs.org/)
- [Nest.js Documentation](https://nestjs.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

This is a final project for WEBPROG. For educational purposes only.

## 📄 License

This project is for educational purposes as part of WEBPROG Final Project requirements.

## 🎓 Project Requirements Checklist

- [x] Frontend built with Vue.js
- [x] Fully responsive design (mobile & desktop)
- [x] Clean, modern website design
- [x] Nest.js backend
- [x] Supabase database integration
- [x] GET and POST API methods
- [x] Personal profile section (about, skills, projects, contact)
- [x] Comments/Guestbook feature
- [x] Error handling and input validation
- [x] Clear folder structure
- [x] Well-commented code
- [x] Environment variables for sensitive data
- [x] Ready for Vercel deployment

## 📞 Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ for WEBPROG Final Project