# 🚀 React Figma Assignment

## 📌 Overview

This project is a fully responsive React application built by converting a Figma design into a functional web interface. The goal was to achieve a pixel-perfect UI while maintaining clean code, reusable components, and responsiveness across devices.

## 🎯 Objectives

* Convert Figma design into a working React app
* Maintain design accuracy (spacing, typography, colors)
* Build reusable and modular components
* Ensure full responsiveness (mobile, tablet, desktop)
* Implement Docker for easy deployment

---

## 🛠️ Tech Stack

* React (Vite)
* CSS / Tailwind CSS
* JavaScript (ES6+)
* Docker

---

## 📂 Project Structure

```
src/
│── components/     # Reusable UI components (Navbar, Hero, Cards, Footer)
│── pages/          # Main pages (Home)
│── assets/         # Images, icons
│── styles/         # Global styles
│── App.jsx
│── main.jsx
```

---

## ✨ Features

* 📱 Fully responsive design (mobile-first approach)
* 🎨 Pixel-perfect UI based on Figma
* ♻️ Reusable components
* ⚡ Clean and structured code
* 🎯 Proper spacing and typography
* 🖱️ Hover effects and basic interactions

---

## 📱 Responsiveness

The application is optimized for:

* Mobile devices (≤ 768px)
* Tablets (≤ 1024px)
* Desktops (> 1024px)

---

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t react-figma-app .
```

### Run Container

```bash
docker run -p 3000:3000 react-figma-app
```

Then open:

```
http://localhost:3000
```

---

## ▶️ Local Development

### Install dependencies

```bash
npm install
```

### Run project

```bash
npm run dev
```

---

## 🎨 Design Reference

Figma Design:
https://www.figma.com/design/0K35IOZ4Qwqur0b9o2PXlN/Assignment

---

## 💡 Approach

* Broke the design into reusable components (Navbar, Hero, Features, Footer)
* Used Flexbox and Grid for layout
* Maintained consistent spacing system
* Focused on clean and readable code structure

---

## 🚀 Future Improvements

* Add animations for better user experience
* Improve accessibility (ARIA roles, keyboard navigation)
* Add dark mode support

---

## 👨‍💻 Author

**Md Faizan**
B.Tech CSE (AI) Student
Jamia Hamdard

---

## ⭐ Acknowledgement

This project was built as part of an assignment to demonstrate frontend development skills including React, UI implementation, and responsive design.
