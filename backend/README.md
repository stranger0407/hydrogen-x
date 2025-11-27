# Backend - Hydrogen X Spring Boot API

Spring Boot REST API backend for Hydrogen X signup application.

## Technology Stack
- Java 21
- Spring Boot 3.3.0
- Spring Data JPA with Hibernate
- MySQL 8.0+
- Maven

## Project Structure
```
backend/
├── pom.xml
├── src/main/
│   ├── java/com/hydrogenx/
│   │   ├── HydrogenXApplication.java
│   │   ├── config/
│   │   │   └── CorsConfig.java
│   │   ├── controller/
│   │   │   └── UserController.java
│   │   ├── dto/
│   │   │   └── UserDTO.java
│   │   ├── entity/
│   │   │   └── User.java
│   │   ├── repository/
│   │   │   └── UserRepository.java
│   │   └── service/
│   │       └── UserService.java
│   └── resources/
│       └── application.properties
└── target/
    └── hydrogen-x-backend-1.0.0.jar
```

## Building the Project

### Prerequisites
- Java 21 installed
- Maven installed
- MySQL running on localhost:3306

### Build Steps
```bash
cd backend

# Clean and build
mvn clean install -DskipTests

# Or compile only
mvn clean compile
```

## Running the Application

### Method 1: Maven Spring Boot Plugin
```bash
cd backend
mvn spring-boot:run
```

### Method 2: Run JAR file
```bash
cd backend/target
java -jar hydrogen-x-backend-1.0.0.jar
```

The application will start on `http://localhost:8080`

## Database Configuration

The database is auto-created by Hibernate. Configuration in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/hydrogen_x
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
```

**Important**: Ensure MySQL is running and the credentials match your setup.

## API Endpoints

### 1. User Signup (Create User)
```
POST http://localhost:8080/api/signup
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "Pass@123",
  "confirmPassword": "Pass@123",
  "companyProfile": "Acme Corp",
  "website": "https://acme.com",
  "brochure": "product_info.pdf",
  "customerCareContact": "9876543210",
  "customerType": "Customer"
}
```

### 2. Get All Users
```
GET http://localhost:8080/api/users
```

### 3. Get User by ID
```
GET http://localhost:8080/api/users/{id}
```

### 4. Update User
```
PUT http://localhost:8080/api/users/{id}
Content-Type: application/json

{
  "email": "newemail@example.com",
  "companyProfile": "New Company"
}
```

### 5. Delete User
```
DELETE http://localhost:8080/api/users/{id}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "User registered successfully!",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    ...
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Username already exists!"
}
```

## CORS Configuration
CORS is enabled for all origins on `/api/**` endpoints to allow frontend-backend communication.

## Troubleshooting

### Cannot connect to MySQL
- Verify MySQL is running
- Check credentials in `application.properties`
- Ensure port 3306 is accessible

### Database not created
- Hibernate will auto-create on first run
- Check MySQL error logs if issues occur

### Port 8080 already in use
- Change port in `application.properties`: `server.port=9090`
