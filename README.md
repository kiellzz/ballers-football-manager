
# ⚽ BALLERS — Football Squad Manager

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/API-REST%20Countries-3b82f6?style=for-the-badge" />
</p>

<p align="center">
  <strong>🚀 <a href="https://kiellzz.github.io/ballers-football-manager/">Acess Live Demo</a></strong>
</p>

---

## 🧠 About the Project

**BALLERS** is an interactive football experience used as a primary learning project for mastering state management, scalable React structures, and high-fidelity game-inspired interfaces.

Built with a focus on:
- Modern UI/UX inspired by sports simulations (EA FC style)
- Smooth interactions and micro-animations
- Scalable architecture
- Real-world validation logic

---

## ✨ Features

### 🧩 Full CRUD
* **Create player:** Add new athletes to your database.
* **Edit player:** Update stats, positions, or photos.
* **Delete player:** Remove players with a confirmation safety net.
* **Dynamic filtering:** Instant list updates as you type or filter.

---

### 🔍 Advanced Filters
* **Name search**
* **Position selection**
* **Nationality filter**
* **Age range slider**
* **Overall rating (OV) threshold**

---

### 🌍 API Integration
* **Smart country search:** Integrated with REST Countries API.
* **PT/EN support:** Intelligent matching for country names.
* **Flag rendering:** Automatic flag identification based on player nationality.

---

### 🖼️ Image Upload & Processing
* **Smart Upload:** Add custom photos for your players.
* **Interactive Crop:** Built-in tool to resize (120x120) and position images.
* **Validation:** Automatic checks for file type and size.
* **Zoom control:** Precise positioning before saving.

---

### 🔊 Sound Effects & UX
* **Immersive Audio:** Hover effects for UI feedback and confirmation sounds for actions.
* **Card Shine:** Visual premium effect on player cards.
* **Custom Toasts:** Non-intrusive alerts for success/error states.
* **Responsive Design:** Fully optimized for different screen sizes.

---

## 🧠 Architecture

The project follows a clean, modular structure:

* **Components** → Modular UI pieces.
* **Hooks** → Encapsulated state and business logic.
* **Utils** → Helper functions and validation rules.
* **Services** → External API communication.
* **Data** → Initial mock dataset for a "populated" feel.

---

## 🧪 Business Rules & Validations

* **Age:** Only players between 16 and 50 years old.
* **Overall:** Stats restricted to the 0-99 range.
* **Required Fields:** Ensures data integrity for names and positions.
* **Persistence:** All data is saved in `localStorage`, keeping your squad safe even after a refresh.

---

## 📦 Project Structure

```bash
src/
  assets/
    images/     # UI Graphics & Backgrounds
    sounds/     # Feedback audio files
  components/
    common/     # Reusable UI (Modals, Toasts)
    player/     # Logic-heavy player components
  hooks/        # Custom hooks (usePlayers)
  pages/        # Main application views
  services/     # API helpers (REST Countries)
  utils/        # Validations and audio controllers
  types/        # TypeScript interfaces
```

---


## 👨‍💻 Author

Developed by **Ezequiel Borges**

* **GitHub:** [https://github.com/kiellzz](https://github.com/kiellzz)
* **LinkedIn:** [https://linkedin.com/in/ezequielborgesdev/](https://linkedin.com/in/ezequielborgesdev/)
