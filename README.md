# Milestone 7 - Login Endpoint

## Overview
This milestone involves creating a login endpoint that allows users to authenticate using their email/username and password.

## Steps

### 1. Create Login Endpoint
- Accept user credentials (email/username and password).
- Retrieve the corresponding user from the database.

### 2. Validate Password
- Use bcrypt to hash the entered password.
- Compare it with the stored hashed password for authentication.

## Technologies Used
- Node.js / Express (or relevant backend framework)
- bcrypt for password hashing
- Database (MongoDB, PostgreSQL, etc.)

## Installation & Setup
1. Clone the repository:
   sh
   git clone <repository_url>
   
2. Install dependencies:
   sh
   npm install
   
3. Run the application:
   sh
   npm start
   

## API Endpoint
### Login
*POST* /api/login
#### Request Body
json
{
  "email": "user@example.com",
  "password": "yourpassword"
}

#### Response
json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}


## License
This project is licensed under the MIT License.
