# 🖼️ Imagify – AI Text to Image Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)  
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/atlas)  

**Imagify** is a **full-stack AI-powered text-to-image generator** that converts text prompts into high-quality images using AI. Built with the **MERN stack** and integrated with **Cloudinary** for image hosting.

---

## 🚀 Features

- 🧠 AI-powered text-to-image generation  
- ☁️ Cloudinary integration for image storage  
- 🖼️ Personal gallery of generated images  
- 🔐 User authentication & secure sessions  
- 💾 MongoDB database to store prompts, users, and images  
- ⚡ Responsive UI built with React  

---

## 🏗️ Tech Stack

| Frontend | Backend | Database | Cloud / AI |
|----------|---------|----------|------------|
| React.js | Node.js | MongoDB | Cloudinary |
| Tailwind CSS | Express.js | Mongoose | OpenAI / Stability AI |
| Axios | REST API | | |

---

## 📁 Project Structure

<details>
<summary>Click to expand</summary>

imagify/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── App.js
│ └── package.json
│
├── server/ # Express backend
│ ├── config/
│ │ ├── cloudinary.js
│ │ └── db.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── .env
├── README.md
└── package.json
