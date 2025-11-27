# 🚀 Hydrogen X - Angular 20 Frontend

Modern, responsive frontend application for Hydrogen X built with Angular 20.

## ✨ Features

- ✅ **Angular 20** - Latest Angular framework
- ✅ **Standalone Components** - Modern component architecture
- ✅ **Reactive Forms** - Advanced form handling with validation
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **SCSS Styling** - Professional styling with SCSS
- ✅ **Real-time Validation** - Form validation with helpful error messages
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **API Integration** - Seamless backend connectivity
- ✅ **Modern UI** - Beautiful gradient design with animations

## 📋 Prerequisites

- Node.js 20+ installed
- npm or yarn package manager
- Angular CLI 20+
- Backend server running on http://localhost:8080

## 🔧 Installation

```bash
# Navigate to angular-frontend directory
cd angular-frontend

# Install dependencies
npm install

# Or if using yarn
yarn install
```

## 🚀 Running the Application

### Development Server

```bash
npm start
# or
npm run dev
```

The application will be available at **http://localhost:4200**

### Production Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
angular-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── signup/
│   │   │       ├── signup.component.ts
│   │   │       ├── signup.component.html
│   │   │       └── signup.component.scss
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   └── app.component.ts
│   ├── main.ts
│   ├── index.html
│   ├── styles.scss
│   └── environments/
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Key Components

### SignupComponent
Main signup form component with:
- 9 input fields for user information
- Real-time form validation
- Error message display
- Success notifications
- Loading state handling
- Responsive design

### UserService
HTTP service for API communication:
- User signup
- Get all users
- Get user by ID
- Update user
- Delete user

## 🔌 API Integration

The application connects to the backend API running on `http://localhost:8080/api`

### Available Endpoints

- `POST /api/signup` - Register new user
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

## 📝 Form Validation

The signup form includes comprehensive validation:

- **Username**: Required, minimum 3 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Must match password
- **Company Profile**: Required text
- **Website**: Required, valid URL format
- **Brochure**: Required text
- **Customer Care Contact**: Required, 10+ digits
- **Customer Type**: Required selection (Individual, Business, Enterprise)

## 🎯 Form Submission Flow

1. User fills out all form fields
2. Form validates in real-time
3. On submit, SignupComponent calls UserService.signup()
4. Backend processes the request
5. Success: Show success message, clear form
6. Error: Show error message with details

## 🛠️ Development Tips

### Add a New Component

```bash
ng generate component components/login
```

### Add a New Service

```bash
ng generate service services/auth
```

### Add a New Model/Interface

```bash
ng generate interface models/product
```

## 🧪 Testing

```bash
npm test
```

## 📦 Building for Production

```bash
npm run build --configuration production
```

This creates an optimized build in the `dist/` directory.

## 🚀 Deployment

The built application can be deployed to:
- **Firebase Hosting**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **Any static hosting service**

## 🔒 Environment Configuration

Development environment (default):
```typescript
apiUrl: 'http://localhost:8080/api'
```

Production environment:
```typescript
apiUrl: 'https://api.hydrogenx.com/api'
```

Switch environments:
```bash
# Development (default)
npm start

# Production
ng build --configuration production
```

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [RxJS Documentation](https://rxjs.dev/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is part of Hydrogen X - All Rights Reserved

## 💬 Support

For issues or questions:
1. Check the documentation
2. Review error messages carefully
3. Check browser console for errors
4. Verify backend is running on port 8080

---

**Version**: 1.0.0  
**Built with**: Angular 20  
**Last Updated**: November 27, 2025
