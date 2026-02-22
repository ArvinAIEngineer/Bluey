# 🐕 Bluey's Backyard Games 🏡

A polished, browser-based 3D experience for kids, built with Three.js. This project features a character-driven mini-game system where players can run around the Heeler family backyard to collect biscuits, flowers, and custom treasures.

---

## ✨ Key Features

### 🕹️ Interactive 3D Gameplay
- **Dual Character Paths**: Choose to play as Bluey (Biscuit Run) or Bingo (Flower Hunt).
- **Dynamic Environments**: A fully realized 3D backyard featuring the iconic Heeler house, the clothesline, the trampoline, and the sandpit.
- **Responsive Controls**: Seamless support for WASD/Arrow keys on desktop and a custom-built Virtual Joystick for touch devices (tablets/phones).

### 🔒 Parent Challenge Builder (The "Parent Gate")
- **Security**: A math-based challenge prevents children from entering the settings menu.
- **Custom Missions**: Parents can select from over 50 different items to collect, adjust the quantity (3 to 25 items), and set the time limit.
- **URL-Driven Logic**: The setup menu generates dynamic parameters, allowing the parent to "hand off" a customized challenge to the child.

### 🎨 Procedural Asset Library
- **Zero-Latency Items**: Instead of loading heavy external 3D files, the game uses `items-lib.js` to procedurally generate 50+ different 3D models (fruits, toys, gems, etc.) using Three.js primitives. This ensures the game stays fast and works on slow internet connections.

### 🎵 Persistent Audio System
- **Smart Sync**: Music doesn't restart when switching between menus and games. It uses `localStorage` to remember the playback position and mute status across different pages.

---

## 🛠️ Technical Execution

### 1. The 3D Engine (Three.js)
The game utilizes a sophisticated rendering pipeline:
- **Lighting**: A combination of `AmbientLight` for soft fill, `DirectionalLight` (with `PCFSoftShadowMap`) for sun shadows, and a `SpotLight` that follows the player to improve visibility and depth perception.
- **Optimization**: We used `FogExp2` to handle draw distances elegantly and optimized geometry for high-frame-rate performance on mobile GPUs.
- **Physics Lite**: A custom radial collision system prevents the player from walking through trees, the house, or the trampoline.

### 2. State Management & Data Passing
Despite being a static site, the app behaves like a modern web app:
- **Deep Linking**: The setup menu communicates with the game engines (`bluey.html` and `bingo.html`) via URL Search Parameters. This allows the game to be infinitely extensible without changing the core engine code.
- **Local Persistence**: User preferences (like volume/mute) are stored in the browser's `localStorage` so they persist even after a page refresh.

### 3. Procedural Geometry (`items-lib.js`)
To keep the project lightweight, we developed a "Build-a-Mesh" system. For example, a "Biscuit" isn't a file—it's a scripted combination of a `CylinderGeometry` (the base) and several `SphereGeometry` points (the chocolate chips). This allows for instant variety with zero extra download time.

---

## 📂 File Structure

| File | Purpose |
| :--- | :--- |
| `index.html` | The landing page and character selector. |
| `bluey.html` | The 3D engine and logic for Bluey's Biscuit Run. |
| `bingo.html` | The 3D engine and logic for Bingo's Flower Hunt. |
| `setup.html` | The "Parent Gate" and custom challenge builder. |
| `items-lib.js` | The library of procedurally generated 3D items. |
| `*.glb` | High-quality 3D models for the main characters. |

---

## 🚀 Deployment (Vercel / GitHub Pages)
The app is built as a static site, making it incredibly easy to host:
1. Fork/Clone this repository.
2. Push to GitHub.
3. Connect the repo to Vercel or Netlify.
4. **Done!** No build steps required.

---

## 🎮 Controls
- **Keyboard**: `W` `A` `S` `D` or Arrow Keys to move.
- **Mobile**: Drag the On-Screen Joystick on the bottom-left.
- **Goal**: Collect all the items before the 60-second timer (or your parent's custom timer) runs out!

---

## 📝 Credits & Disclaimer
- **Character Art**: Based on the wonderful world of *Bluey* by Ludo Studio.
- **Technology**: Powered by Three.js.
- **Purpose**: Created as a fun, educational fan project for kids to enjoy a safe, ad-free gaming experience.

**Created with ❤️ by a dad of a four year old who is a big fan of Bluey.**
