# DocAppoint - Admin & Doctor Dashboard

The **Admin & Doctor Dashboard** is a unified React application serving two distinct roles: Super Admins managing the platform, and Doctors managing their individual practices. 

---

## Tech Stack

- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API (AdminContext, DoctorContext, AppContext)
- **API Communication:** Axios
- **Notifications:** React Toastify

---

## Setup & Installation

### 1. Clone & Install Dependencies
```bash
cd admin
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root of the `admin` directory:

```env
# Point to your local backend (http://localhost:3001) for development
# Or use the production URL:
VITE_BACKEND_URL=https://docappoint-server-eyak.onrender.com
```

### 3. Start the Development Server
```bash
npm run dev
```
The dashboard will be available at `http://localhost:5174` (or 5173 depending on availability).

---

## Key Features

### Super Admin Capabilities
- **Platform Analytics:** View total doctors, patients, appointments, and recent activity on the dashboard.
- **Doctor Management:** Add new doctors to the system with their credentials, specialization, fees, and profile photo.
- **Availability Control:** Toggle doctor availability globally.
- **Appointment Oversight:** View and cancel any appointment across the platform.

### Doctor Capabilities
- **Practice Analytics:** View personal earnings, total patients, and upcoming appointments.
- **Appointment Management:** Mark appointments as completed or cancel them if necessary.
- **Profile Customization:** Update fees, experience, about section, and availability status.

---

## Live Deployment

The admin dashboard is configured to communicate with the production API deployed at:
https://docappoint-server-eyak.onrender.com

---

## License
MIT License
