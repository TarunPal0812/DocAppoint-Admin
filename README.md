

---

````markdown
# 🛡️ DocAppoint Admin Panel

The **Admin Panel** of DocAppoint is a React.js-based dashboard that allows superusers (admins) to manage doctors, appointments, and access platform-wide analytics. It consumes RESTful APIs from the backend and ensures that only authorized admins can perform high-level operations.

🌐 **Live URL**: [https://admin.docappoint.com](https://docappoint-admin.netlify.app/)  

---

## 🧩 Tech Stack

- **React.js**
- **Axios** for HTTP requests
- **JWT-based authentication**
- **Tailwind CSS** for UI

---

## 🚀 Setup Instructions

```bash
git clone https://github.com/TaruPal0812/DocAppoint-Admin.git
cd DocAppoint-Admin
npm install
npm run dev
````

---

## 🔐 .env Setup

Create a `.env` file with:

```env
VITE_ADMIN_API=http://localhost:5000/api/admin
```

---

## 📁 Suggested File Structure

```
admin-panel/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
└── README.md
```

---

## 🛠️ Key Functionalities

### ✅ Authentication

* Admin Login with JWT
* Store JWT in localStorage

### 🧑‍⚕️ Doctor Management

* Add New Doctors (image upload)
* List All Doctors
* Change Availability

### 📅 Appointment Management

* View All Appointments
* Cancel Appointments

### 📊 Dashboard

* View counts: Total Appointments, Registered Doctors, Patients
* Display analytics data

---

## 📡 Sample API Usage

```js
// services/adminAPI.js
import axios from 'axios';

const adminAPI = axios.create({ baseURL: import.meta.env.VITE_ADMIN_API });

adminAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem('adminToken');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => adminAPI.post('/login', data);
export const getDoctors = () => adminAPI.get('/all-doctors');
export const getDashboard = () => adminAPI.get('/dashboard');
```



## ⚙️ Deployment

Use Vercel or Netlify:

* Add `VITE_ADMIN_API` as environment variable

---

## 🧪 Testing with Postman

Use the backend API collection documented in `backend/README.md`. All admin routes require JWT tokens in headers:

```
Authorization: Bearer <admin_token>
```

---

## ✍️ Maintainer Notes

* Ensure admin accounts are created manually via DB or pre-seed
* Role-checking logic should be enforced in middleware (backend)

---

## 📞 Contact

* Built by Team DocAppoint Admin
* GitHub: [@TarunPal0812](https://github.com/TarunPal0812)
* Email: [tarunpal0812@gmail.com](mailto:tarunpal0812@gmail.com) *(demo)*

---


