# ⚽ BALLERS — Football Squad Manager

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/API-REST%20Countries-3b82f6?style=for-the-badge" />
</p>

---

## 🚀 Live Demo

<p align="center">
  <a href="https://kiellzz.github.io/Ballers_CRUD/" target="_blank">
    <img src="https://img.shields.io/badge/⚽%20Play%20Now-6366f1?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
</p>

---

## 🧠 About the Project

The **BALLERS** is a complete football player management system designed to simulate a real product experience.

Built with focus on:

- modern UI/UX
- smooth interactions
- scalable architecture
- real-world validation logic

---

## ✨ Features

### 🧩 CRUD Completo

* Criar jogador  
* Editar jogador  
* Excluir jogador  
* Filtros e listagem dinâmica  

---

### 🔍 Filtros Avançados

* Nome  
* Posição  
* Nacionalidade  
* Faixa etária  
* Overall  

---

### 🌍 Integração com API

* Busca inteligente de países  
* Suporte a PT/EN  
* Exibição de bandeiras  

---

### 🖼️ Upload de Imagem

* Upload opcional  
* Resize automático (120x120)  
* Validação de tipo e tamanho  
* Recorte interativo antes de salvar  
* Controle de zoom e posicionamento  

---

### 🔊 Sound Effects

* Hover (UI feedback)  
* Confirm (ações)  

---

### ✨ UX / UI Diferenciada

* Animações suaves  
* Efeito shine nos cards  
* Toasts customizados  
* Modal de confirmação  
* Feedback visual completo  

---

## 🎨 Design

* Tema escuro com destaque roxo  
* Tipografia inspirada em interfaces esportivas  
* Layout centralizado e responsivo  
* Microinterações inspiradas em jogos  

---

## 🧠 Arquitetura

Estrutura organizada com separação clara de responsabilidades:

* **Components** → UI  
* **Hooks** → lógica e estado  
* **Utils** → regras de negócio  
* **Pages** → orquestração  

---

## 🧪 Validações

* Nome obrigatório  
* Idade entre 16 e 50  
* Overall entre 0 e 99  
* País válido via API  
* Prevenção de duplicidade  

---

## 💾 Persistência

* Dados salvos no `localStorage`  
* Inicialização com dataset padrão  

---

## 📦 Project Structure

```bash
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

## 📈 Próximos Passos

* Backend com Node.js + MongoDB
* Autenticação de usuário
* Formação tática (drag & drop)

---

## 👨‍💻 Author

Developed by **Ezequiel Borges**

* GitHub: [https://github.com/kiellzz](https://github.com/kiellzz)
* LinkedIn: [https://linkedin.com/in/ezequielborgesdev/](https://linkedin.com/in/ezequielborgesdev/)
