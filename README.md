# Reactfolio - Portfolio Projects Page 🚀

## 📌 Overview
**Reactfolio** is a sleek and interactive **React-based portfolio projects page** designed to showcase development work in a visually engaging way. Built with **React, TailwindCSS, DaisyUI, and Framer Motion**, it provides a dynamic and responsive interface with smooth animations and dark mode support.

## 🎨 Features
- 🔥 **Dynamic Project Cards** – Showcases projects with images, descriptions, and technology logos.
- 🎭 **Interactive Animations** – Smooth transitions, hover effects, and glowing red highlights using **Framer Motion**.
- 🌙 **Dark Mode Support** – Fully styled for both light and dark themes.
- 📱 **Responsive Grid Layout** – Adapts seamlessly across all devices with a two-column layout on larger screens.
- 🛠 **Technology Stack Icons** – Displays project technologies using logos.

## 🛠️ Technologies Used
- ⚛ **React** (Functional Components, Hooks)
- 🎨 **TailwindCSS & DaisyUI** (For Styling & UI Components)
- 🎞 **Framer Motion** (Animations & Transitions)
- 🖼 **React Icons** (Icons for UI Enhancement)

## 📂 File Structure
```
.gitignore
/docs/
    ├── .project_structure_filter
    ├── .project_structure_ignore
    └── project_structure.txt
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
/public/
    └── vite.svg
README.md
/src/
    ├── App.css
    ├── App.tsx
    ├── assets/
        ├── images/
            ├── profile.jpg
            ├── project1.png
            ├── project2.png
            ├── project3.png
            └── studies.png
        └── logos/
            ├── react.png
            ├── tailwind.png
            └── typescript.png
    ├── components/
        ├── About/
            └── About.tsx
        ├── Contact/
            └── Contact.tsx
        ├── Navbar/
            └── Navbar.tsx
        ├── Projects/
            └── Projects.tsx
        ├── Studies/
            └── Studies.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## 🚀 Installation & Setup
### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Rabie-Lafkir/reactfolio.git
```
### 2️⃣ Navigate to the project directory:
```sh
cd reactfolio
```
### 3️⃣ Install dependencies:
```sh
npm install
```
### 4️⃣ Run the development server:
```sh
npm run dev
```

## 📌 How It Works
- The `projects` array stores project details like **title, description, technologies, and images**.
- Each project is dynamically **mapped into a styled card** with animations.
- Uses **Framer Motion** for fluid transitions and **TailwindCSS** for modern styling.

## 🎯 Future Improvements
- 🏗 Add a modal popup with expanded project details.
- 🎨 Implement filtering by technology categories.
- 🌍 Improve accessibility features for a better user experience.

## 📜 License
This project is open-source and available under the **MIT License**.

---
💡 **Created with ❤️ by [Rabie Lafkir](https://github.com/Rabie-Lafkir)**
