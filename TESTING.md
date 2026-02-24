# Testing Guide

This guide will help you test the Personal Portfolio Website locally.

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] npm installed
- [ ] Backend dependencies installed (`npm install` in backend folder)
- [ ] Frontend dependencies installed (`npm install` in frontend folder)
- [ ] Supabase account created
- [ ] Database schema applied in Supabase
- [ ] Environment variables configured

## Step 1: Set Up Supabase Database

### 1.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in project details and create the project
5. Wait for the project to be set up (1-2 minutes)

### 1.2 Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the contents of `database/schema.sql` from this project
4. Paste it into the SQL editor
5. Click "Run" to execute the SQL
6. You should see a success message

### 1.3 Get API Credentials

1. Go to **Settings** > **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 2: Configure Backend Environment

1. Navigate to the backend folder:
   ```powershell
   cd backend
   ```

2. Create `.env` file from the example:
   ```powershell
   Copy-Item .env.example .env
   ```

3. Edit the `.env` file and add your Supabase credentials:
   ```env
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 3: Configure Frontend Environment

1. Navigate to the frontend folder:
   ```powershell
   cd ../frontend
   ```

2. Create `.env.local` file from the example:
   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Edit the `.env.local` file:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

## Step 4: Install Dependencies

### Backend Dependencies
```powershell
cd backend
npm install
```

### Frontend Dependencies
```powershell
cd ../frontend
npm install
```

## Step 5: Start the Backend Server

1. Open a new terminal window
2. Navigate to the backend folder:
   ```powershell
   cd backend
   ```
3. Start the development server:
   ```powershell
   npm run start:dev
   ```
4. You should see:
   ```
   🚀 Backend server is running on port 3001
   ```

## Step 6: Start the Frontend Server

1. Open another new terminal window
2. Navigate to the frontend folder:
   ```powershell
   cd frontend
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```
4. You should see:
   ```
   VITE v5.x.x  ready in xxx ms
   ➜  Local:   http://localhost:3000/
   ```

## Step 7: Test the Application

### 7.1 Open the Website

1. Open your browser and go to: **http://localhost:3000**
2. You should see the portfolio website with all sections

### 7.2 Navigate Through Sections

- Click on navigation links (About, Skills, Projects, Contact, Guestbook)
- Verify that each section scrolls into view
- Check that the design is responsive (resize your browser window)

### 7.3 Test the Guestbook Feature

#### Submit a Comment

1. Scroll to the Guestbook section
2. Fill in the form:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Message**: This is a test message!
3. Click "Submit Comment"
4. You should see a success message: "Comment submitted successfully!"
5. The form should clear automatically
6. Your comment should appear in the "Recent Comments" section below

#### Test Validation

Try submitting invalid data to test validation:

1. **Empty fields**: Try submitting without filling all fields
   - Expected: Error message "All fields are required."

2. **Invalid email**: Enter an invalid email like "notanemail"
   - Expected: Error message "Please enter a valid email address."

3. **Long message**: Try entering more than 500 characters
   - Expected: Input is limited to 500 characters

### 7.4 Test API Directly

You can also test the API endpoints directly using PowerShell:

#### GET all comments:
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/api/comments" -Method GET
```

#### POST a new comment:
```powershell
$body = @{
    name = "API Test User"
    email = "api@test.com"
    message = "Testing via API"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/comments" -Method POST -Body $body -ContentType "application/json"
```

### 7.5 Verify in Supabase Dashboard

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Select the `comments` table
4. You should see all the comments you submitted
5. Verify that `created_at` timestamps are correct

## Step 8: Test Responsiveness

### Desktop View
- Open the site in full-screen browser
- Verify all sections display properly
- Check that navigation is horizontal

### Mobile View
1. Open browser DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device (e.g., iPhone 12)
4. Verify:
   - Navigation adapts for mobile
   - Cards stack vertically
   - Text is readable
   - Forms are usable
   - Skills tags wrap properly

## Troubleshooting

### Backend won't start

**Error: Missing Supabase credentials**
- Solution: Check that `.env` file exists in backend folder with correct values

**Error: Port 3001 already in use**
- Solution: Change PORT in `.env` to another port (e.g., 3002)

### Frontend won't start

**Error: Cannot connect to backend**
- Solution: Ensure backend is running on port 3001
- Check `VITE_API_URL` in frontend `.env.local`

### Comments not appearing

**No comments show after submission**
- Check browser console (F12) for errors
- Verify backend is running
- Check Network tab to see if API calls are successful
- Verify Supabase credentials are correct

**CORS errors**
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Backend should show CORS is enabled in console

### Database errors

**Error: relation "comments" does not exist**
- Solution: Run the SQL schema from `database/schema.sql` in Supabase SQL Editor

**Error: Invalid API key**
- Solution: Verify you copied the correct anon key from Supabase settings

## Success Criteria

Your application is working correctly if:

- ✅ Backend starts without errors on port 3001
- ✅ Frontend starts without errors on port 3000
- ✅ Website loads in browser with all sections visible
- ✅ Navigation links work and scroll to sections
- ✅ You can submit comments through the form
- ✅ Comments appear immediately after submission
- ✅ Comments persist (refresh page and they're still there)
- ✅ Validation works for empty fields and invalid emails
- ✅ Site is responsive on mobile and desktop views
- ✅ No console errors in browser DevTools
- ✅ Comments are stored in Supabase database

## Next Steps

After successful local testing:

1. Customize the portfolio content (About, Skills, Projects, Contact)
2. Update colors and styling to match your preferences
3. Add your own profile information
4. Deploy to Vercel (see README.md for deployment instructions)

## Common Test Scenarios

### Test Case 1: First Time User
1. Visit the website
2. Read through all sections
3. Submit a comment in guestbook
4. See comment appear immediately

### Test Case 2: Returning User
1. Refresh the page
2. Scroll to guestbook
3. See previous comments still there
4. Submit another comment
5. Verify it appears at the top

### Test Case 3: Multiple Users
1. Open site in different browsers/incognito
2. Submit comments from each
3. Verify all appear in real-time (after manual refresh)

## Performance Testing

- Comments should load in < 1 second
- Form submission should complete in < 2 seconds
- Page should be fully interactive in < 3 seconds

## Need Help?

If you encounter issues not covered here:
1. Check the browser console for errors (F12)
2. Check backend terminal for error messages
3. Verify all environment variables are set correctly
4. Ensure Supabase project is active and accessible

Happy Testing! 🚀
