# 📘 Full Stack Facts App

A simple **full-stack web application** built as part of an **Intern Technical Assignment**.
The project demonstrates **backend API development, frontend integration, and cloud deployment**.

---

# 🚀 Live Demo

**Frontend (Netlify):**
[https://serene-bavarois-f6b2a0.netlify.app](https://serene-bavarois-f6b2a0.netlify.app)

**Backend API (Render):**
[https://fullstack-facts-apps.onrender.com/api/facts/](https://fullstack-facts-apps.onrender.com/api/facts/)

---

# 🛠 Tech Stack

## Backend

* Django
* Django REST Framework
* Gunicorn
* WhiteNoise
* django-cors-headers

## Frontend

* React.js
* Fetch API
* Basic CSS styling

## Deployment

* Render → Backend hosting
* Netlify → Frontend hosting
* GitHub → Source code management

---

# 📂 Project Structure

```
fullstack-facts-app/
│
├── backend/
│   │
│   ├── config/                # Django project settings
│   ├── facts/                 # API app containing views and URLs
│   ├── manage.py              # Django management script
│   ├── requirements.txt       # Backend dependencies
│   └── build.sh               # Render build script
│
├── frontend/
│   │
│   ├── public/                # Static public assets
│   ├── src/                   # React source code
│   ├── package.json           # Frontend dependencies
│   └── build/                 # Production build for deployment
│
└── README.md                  # Project documentation
```

---

# ⚙️ How I Built This Project (Step-by-Step)

## 1️⃣ Backend Development (Django REST API)

* Created Django project and app.
* Implemented REST endpoint:

```
GET /api/facts/
```

* Returned a hardcoded JSON list of facts.
* Enabled **CORS** for frontend communication.
* Configured **WhiteNoise** for static file handling.
* Prepared **production requirements** and build script.
* Deployed backend on Render with public access.

2️⃣ Frontend Development (React)

Created React app using create-react-app.

Connected frontend to deployed backend API.

Displayed facts in a clean, centered UI.

Generated optimized production build:

npm run build

Deployed frontend on Netlify.

3️⃣ Deployment Process
Backend (Render)

Added:

requirements.txt

build.sh

Gunicorn start command

Ran migrations and static collection automatically.

Generated a public API endpoint.

Frontend (Netlify)

Updated API URL to live backend.

Built production React files.

Uploaded build folder to Netlify.

Generated a public website URL.

📚 What I Learned

Building REST APIs using Django REST Framework

Connecting React frontend with backend services

Handling CORS and production configurations

Deploying full-stack applications using Render & Netlify

Managing GitHub repositories and clean folder structure

Real-world debugging and deployment troubleshooting

🎯 Assignment Objective Achieved

✔ REST API created
✔ React UI fetching backend data
✔ Cloud deployment completed
✔ Public URLs accessible
✔ Source code pushed to GitHub

👨‍💻 Author

GK
Aspiring Python Full-Stack Developer
Passionate about building real-world web applications and continuously learning modern technologies.
