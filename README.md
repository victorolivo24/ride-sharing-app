# Commut-Ed 🚗🎓  
**Campus Ride-Sharing Platform**  
📍 New Brunswick, NJ | 🗓️ February 2025

---

## Overview

Commut-Ed is a full-stack ride-sharing web application designed to connect students traveling to and from campus. Built using a React frontend and a Java Spring Boot backend, the platform enables users to post, search, and join rides in real time — with features tailored for a campus environment.

---

## 🔧 Tech Stack

- **Frontend**: React.js  
- **Backend**: Java, Spring Boot  
- **Storage**: In-memory `HashMap` with file-based persistence  
- **Authentication**: RUID-based sign-in  

---

## ✨ Features

- 🚘 Post and join rides with automatic filtering by location and seat availability  
- 🎯 Search for available rides based on campus locations and direction (To/From campus)  
- 👤 RUID-based login system to identify students  
- 📊 Real-time seat tracking and capacity enforcement  
- ⭐ Driver rating system visible to riders before booking  
- 🧾 Personalized dashboards for both drivers and riders  

---

## 🚀 How to Run

1. Clone the repository  
2. Navigate to `/backend` and run the Spring Boot server (Java 17+)  
3. Navigate to `/frontend` and run `npm install` then `npm start`  
4. Use the app to post/search rides with your RUID  
