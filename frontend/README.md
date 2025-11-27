# Frontend - Hydrogen X Signup

This is the Angular/HTML frontend for the Hydrogen X signup application.

## Files
- `index.html` - Main signup page with form
- `style.css` - Modern styling with green theme

## Running the Frontend

### Option 1: Using Python (Recommended)
```bash
cd frontend
python -m http.server 3000
```

### Option 2: Using Node.js
```bash
cd frontend
npx http-server -p 3000
```

Then open your browser and navigate to:
```
http://localhost:3000/index.html
```

## Features
- Two-column responsive form layout
- Real-time form validation
- Helper text for user guidance
- Modern green (#22c55e) color scheme
- Success/Error message feedback
- CORS-enabled for backend communication

## API Endpoint
The frontend communicates with the backend API at:
```
POST http://localhost:8080/api/signup
```
