# 🖼️ Imagify – AI Text to Image Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)  
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/atlas)  

**Imagify** is a **full-stack AI-powered text-to-image generator** that converts text prompts into high-quality images using AI. Built with the **MERN stack** and integrated with **Cloudinary** for image hosting.

---
## Table of Contents
1. [Problem Statement](#problem-statement)  
2. [Dataset](#dataset)  
3. [Tools and Technologies](#tools-and-technologies)  
4. [Methods](#methods)  
5. [Key Insights](#key-insights)  
6. [How to Run Project](#how-to-run-project)  
7. [Features](#Features)  


---

## Problem Statement
Generating realistic and creative images from textual descriptions is a challenging task in AI and web development. Imagify aims to bridge the gap between user imagination and visual representation by providing an intuitive platform to generate images directly from text prompts.

---
## Dataset
Imagify does not require a traditional dataset. It leverages AI-based image generation APIs and Cloudinary for storing the generated images. Users provide textual input which is processed to create images dynamically.

---
## Tools and Technologies
- **Frontend:** React.js, HTML5, CSS3, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Image Storage & Hosting:** Cloudinary  
- **APIs / Libraries:** OpenAI API / Custom image generation API (if applicable), Axios  
- **Version Control:** Git, GitHub  

---
## Methods
1. User enters a text prompt in the React frontend.  
2. The frontend sends the prompt to the Express.js backend.  
3. Backend processes the prompt and interacts with the image generation API.  
4. Generated images are uploaded to Cloudinary for storage.  
5. Image URLs are stored in MongoDB and returned to the frontend.  
6. Users can view and download generated images from the UI.  

---
## Key Insights
- Real-time image generation enhances user creativity.  
- Cloudinary integration simplifies media storage and delivery.  
- MERN stack provides a seamless full-stack experience for scalable applications.  
- Storing images in the database ensures persistence and easy retrieval.  

---
## How to Run Project
### Prerequisites
- Node.js & npm installed
- MongoDB installed or MongoDB Atlas account
- Cloudinary account with API credentials

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imagify.git
   cd imagify

## Features

- 🧠 AI-powered text-to-image generation  
- ☁️ Cloudinary integration for image storage  
- 🖼️ Personal gallery of generated images  
- 🔐 User authentication & secure sessions  
- 💾 MongoDB database to store prompts, users, and images  
- ⚡ Responsive UI built with React  

---




