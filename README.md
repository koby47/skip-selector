# ♻️ Skip Selection UI Redesign

This project is a modern, responsive UI/UX redesign for a skip booking flow, built with **React**, **Vite**, and **Tailwind CSS**. It replaces the original skip selection page with a cleaner, mobile-friendly interface while preserving core functionality.

## 🔍 Project Overview

- 📦 **Framework**: React + Vite  
- 🎨 **Styling**: Tailwind CSS (with custom theming support)  
- 🌙 **Theme**: Supports Light, Dark, and System preferences  
- ⏱️ **UX Flow**: Step-by-step booking wizard with progress indicator  
- 🧭 **Icons**: Lucide React  
- 📡 **API**: Fetches real-time skip options from:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


---

## ✨ Features

- ✅ Responsive design (mobile and desktop)
- ✅ Clean  layout
- ✅ Step-based progress bar (6 steps)
- ✅ Floating theme toggle with persistent preference
- ✅ Modern UI elements (cards, icons, transitions)
- ✅ Dark mode with system preference and manual toggle

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/koby47/skip-selector.git
cd into the directory where skip-selctor is located
npm install
npm run dev

📁 Project Structure

src/
├── components/
│   ├── pages/SkipSelectorPage.jsx
│   ├── ThemeToggle.jsx
│   └── Header.jsx
    └── SkipCard.jsx
├── utils/theme.js
├── App.jsx
└── main.jsx

 Contact
If you have any questions or feedback, feel free to contact me at [samuelmensahquaye@gmail.com].
