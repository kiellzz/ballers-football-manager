# ⚽ BALLERS — Football Squad Manager

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/API-REST%20Countries-3b82f6?style=for-the-badge" />
</p>


## 🧠 About the Project

**BALLERS** is a football player squad management system 

Built with a focus on:

- modern UI/UX  
- smooth interactions  
- scalable architecture  
- real-world validation logic  

---

## ✨ Features

### 🧩 Full CRUD

* Create player  
* Edit player  
* Delete player  
* Dynamic filtering and listing  

---

### 🔍 Advanced Filters

* Name  
* Position  
* Nationality  
* Age range  
* Overall rating  

---

### 🌍 API Integration

* Smart country search  
* PT/EN support  
* Flag rendering  

---

### 🖼️ Image Upload

* Optional upload  
* Automatic resize (120x120)  
* File type and size validation  
* Interactive crop before saving  
* Zoom and positioning controls  

---

### 🔊 Sound Effects

* Hover (UI feedback)  
* Confirm (user actions)  

---

### ✨ Enhanced UX / UI

* Smooth animations  
* Card shine effect  
* Custom toasts  
* Confirmation modal  
* Complete visual feedback  

---

## 🎨 Design

* Dark theme with purple highlights  
* Typography inspired by sports interfaces  
* Centered and responsive layout  
* Game-inspired microinteractions  

---

## 🧠 Architecture

Well-structured project with clear separation of concerns:

* **Components** → UI  
* **Hooks** → state and logic  
* **Utils** → business rules  
* **Pages** → orchestration  

---

## 🧪 Validations

* Required name  
* Age between 16 and 50  
* Overall between 0 and 99  
* Valid country via API  
* Duplicate prevention  

---

## 💾 Persistence

* Data stored in `localStorage`  
* Initialized with a default dataset  

---

## 📦 Project Structure

```bash id="ballers_struct"
src/
  assets/
    images/
      background.jpeg
      hero.png
      logo.webp
    sounds/
      hover.wav
      confirm.wav

  components/
    common/
      ConfirmModal.tsx
      Toast.tsx

    player/
      PlayerCard.tsx
      PlayerFormModal.tsx
      PlayersFilters.tsx

  hooks/
    usePlayers.ts

  pages/
    Players/
      index.tsx

    Auth/
      Login.tsx
      Register.tsx

  services/
    country/
      countryHelpers.ts
      getCountryCode.ts

  utils/
    getPlayerImage.ts
    playerValidation.ts
    sound.ts

  data/
    playersData.ts

  types/
    player.ts

  App.tsx
  main.tsx
  styles.css
````

---

## 📈 Next Steps

* Tactical formation system
* Adding more players 

---

## 👨‍💻 Author

Developed by **Ezequiel Borges**

* GitHub: [https://github.com/kiellzz](https://github.com/kiellzz)
* LinkedIn: [https://linkedin.com/in/ezequielborgesdev/](https://linkedin.com/in/ezequielborgesdev/)

