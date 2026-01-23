# React + TypeScript + Vite

# 🚀 AdFusion

### AI-powered Advertisement Video Generator (MERN Stack) project

AdFusion i a full-stack MERN application that automatically generates short advertisement videos by combining **product images** and **creator images**.  
The project focuses on real-world digital marketing use cases and demonstrates modern **full-stack + media processing** skills.

---

## ✨ Features

- 🖼️ Upload **Product Image** and **Creator Image**
- 🎬 Automatically generate advertisement video
- ⚡ Smooth and responsive UI
- 🔄 Asynchronous video processing
- ☁️ Scalable backend architecture
- 📥 Download generated ad video

---

## 🧠 How It Works

1. User uploads:
   - Product image
   - Creator image
2. Backend processes images
3. Images are merged with transitions, text & effects
4. Advertisement video is generated
5. Final video is available for preview & download

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Multer (file uploads)
- FFmpeg (video processing)

---

## 📂 Project Structure

```txt
client/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── assets/
 │   └── App.jsx
server/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── utils/
 └── server.js
```

├── src
├── pages
│ ├── Result.tsx
│ ├── Community.tsx
│ ├── Plans.tsx
│ ├── Loading.tsx
│ ├── MyGenerations.tsx
│ ├── Home.tsx
│ └── Genetator.tsx
├── assets
│ ├── model1.png
│ ├── model2.jpg
│ ├── product1.jpg
│ ├── product2.jpg
│ ├── product3.jpg
│ ├── product4.jpg
│ ├── product5.jpg
│ ├── product6.jpg
│ ├── product7.png
│ ├── generated1.png
│ ├── generated2.png
│ ├── generated3.png
│ ├── generated4.png
│ ├── generatedVideo1.mp4
│ ├── generatedVideo2.mp4
│ ├── noise.svg
│ ├── favicon.svg
│ ├── dummy-data.tsx
│ ├── logo.svg
│ └── assets.tsx
├── Types
│ └── index.ts
├── main.tsx
├── components
│ ├── SoftBackdrop.tsx
│ ├── lenis.tsx
│ ├── Buttons.tsx
│ ├── UploadZone.tsx
│ ├── Title.tsx
│ ├── Footer.tsx
│ ├── Features.tsx
│ ├── CTA.tsx
│ ├── Faq.tsx
│ ├── Navbar.tsx
│ ├── Pricing.tsx
│ └── Hero.tsx
├── App.tsx
└── index.css
├── tsconfig.json
├── vite.config.ts
├── public
├── noise.svg
└── logo.svg
├── .gitignore
├── index.html
├── tsconfig.node.json
├── eslint.config.js
├── tsconfig.app.json
├── package.json
└── README.md
