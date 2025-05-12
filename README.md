Blog Platform
A modern, responsive blog platform built with React.js, TypeScript, Tailwind CSS, Redux Toolkit, and Firebase. This application enables users to create, manage, and view blog posts seamlessly.

🚀 Features
User Authentication (Firebase Auth)

Create, Read, Update, Delete (CRUD) operations for blog posts

Responsive design with Tailwind CSS

State management using Redux Toolkit

Real-time data storage with Firebase Firestore

Type-safe codebase with TypeScript

🛠️ Technologies Used
React.js

TypeScript

Tailwind CSS

Redux Toolkit

Firebase

Vite
Stack Overflow
+4
Stack Overflow
+4
Reddit
+4

📦 Getting Started
Prerequisites
Node.js (v14 or later)

npm or yarn

Firebase project setup
Track Awesome List

Installation
Clone the repository:
Stack Overflow
+7
Reddit
+7
Track Awesome List
+7

bash
Copy
Edit
git clone <YOUR_GIT_URL>

2. Navigate to the project directory:

bash
Copy
Edit
cd blog-platform

3. Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install

4. Configure Firebase:

Create a .env file in the root directory.

Add your Firebase configuration:
Dev Genius
+2
GitHub
+2
GitHub
+2

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Start the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
📁 Project Structure
plaintext
Copy
Edit
blog-platform/
├── public/
├── src/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── App.tsx
│   ├── main.tsx
├── .env
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
📄 License
This project is licensed under the MIT License.