# FullStack_WebBaseComplete_Authentication_FoodOrdering_Application
This is Full-Stack Base Web Application. In this use Authentication for security purpose build with Cookie and Session This is fully try to provide full security in this. This is use Mongodb database and Nodejs for backend.


<h2>🔐 Secrets Web Application </h2>

A secure web application that allows users to register, log in, and safely store their secrets.
This project demonstrates best practices for authentication, password security, and session management for beginners learning backend development.

<h2>📌 Project Objective </h2>

The Secrets Web App is built to demonstrate strong authentication and security measures.
It provides a secure environment where users can confidently share and manage their secrets while ensuring:

✅ User data protection

✅ Secure authentication

✅ Proper password handling

✅ Safe session management

<h2>🚀 Features </h2>
👤 User Registration

Users can sign up using:

Name

Email

Password

✔ Email format validation

✔ Password rules:

Must contain uppercase letter

Must contain lowercase letter

Must include a number

Minimum 6–8 characters

✔ Password stored using secure hashing

✔ Redirect to Login page after registration

✔ Show/Hide password option

<h2>🔑 Login System </h2>

Secure login using email and password

Checks:

Valid email format

Correct password

✔ Redirects to protected dashboard after login

✔ Displays user information securely

<h2>🍪 Session Management </h2>

Uses secure HttpOnly cookies to protect sessions

Implements JWT (JSON Web Tokens) for authentication

Benefits:

Prevents client-side script access

Enables stateless authentication

Improves scalability

<h2>🚪 Logout System </h2>

Secure logout functionality

Clears session/token

Redirects user back to Login page

<h2>🛠️ Tech Stack (Example)

You can modify based on your project.

Frontend: HTML, CSS, JavaScript

Backend: Node.js + Express

Database: MongoDB

Authentication:

bcrypt (password hashing)

JWT (token authentication)

express-session (optional cookies)



<h2> 📁 Project folder Structure</h2>

Secrets-App/
│
├── node_modules/        # Installed npm packages (auto-generated)
├── public/              # Static files (CSS, JS, images)
├── views/               # EJS / HTML templates
│
├── .gitignore           # Files ignored by Git
├── index.js             # Main server file (Express app start)
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Dependency lock file
├── README.md

<h2>📂 Simple Explanation (Beginner Friendly)</h2>

node_modules/ → Automatically created when you run npm install

public/ → Put CSS, frontend JS, images here

views/ → Login, signup, dashboard pages

index.js → Main backend server file

package.json → Lists libraries like express, mongoose, bcrypt

README.md → GitHub description file

<h2>⚙️ Installation & Setup</h2>
1️⃣ Clone the repository
git clone https://github.com/yourusername/secrets-app.git

<h2>Go into the folder</h2>
cd secrets-app

<h2>Install dependencies</h2>
npm install

<h2>Run the server</h2>
node app.js or npx nodemon index.js

<h2>Open browser</h2>
http://localhost:3000

<h2>🔒 Security Purpose Used</h2>

Password hashing using bcrypt

Email format validation

Strong password enforcement

JWT-based authentication

Secure HttpOnly cookies

Protected routes

<h2>🎯 Learning Purpose</h2>

This project helps beginners understand:

Authentication systems

Password security

Sessions vs JWT

Backend validation

Secure login flows


<h2> Deploy link </h2>
https://fullstackweb-authentication-foodordering.onrender.com


<h1>Thank you all 😊</h1>
