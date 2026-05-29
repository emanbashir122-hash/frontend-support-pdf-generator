# 📝 FairPrice Watchdog API


![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?logo=next.js)
![ReportLab](https://img.shields.io/badge/ReportLab-PDF-red)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📖 Project Overview
A hybrid **Python + Next.js** project that generates **court‑ready complaint PDFs**.  
It integrates a **backend PDF generator** with a **frontend form UI**, templates, and evidence hashing.

---

## 📊 Project Status
- ✅ Backend PDF generator complete  
- ✅ Frontend form + FAQ component ready  
- 🟡 Integration with complaint JSON (in progress)  
- ⬜ Deployment (to be done)  

---

## ✨ Features
- **PDF Complaint Generator** using Python ReportLab.  
- **Evidence Hash Chain** with SHA‑256.  
- **Templates** for FTC, State Attorney General, Class‑Action Exhibit.  
- **Frontend UI** with Next.js form + FAQ.  
- **Cover Image** embedded from `assets/cover.png`.  

---

## 📂 Project Structure

frontend-support-pdf-generator/
├── pdf-generator/
│   └── main.py              # Python backend PDF generator
│
├── frontend/
│   ├── pages/
│   │   └── api/
│   │       └── generate-pdf.js   # API route for PDF generation
│   └── components/
│       ├── ComplaintForm.js      # Next.js form component
│       └── FAQ.js                # FAQ/help component
│
├── templates/
│   ├── ftc_template.txt
│   ├── state_ag_template.txt
│   └── class_action_template.txt
│
├── assets/
│   └── cover.png                 # Placeholder image
│
└── README.md                   
---

## 🛠️ Setup Instructions

### Backend (Python)
```bash
cd frontend-support-pdf-generator/pdf-generator
pip install reportlab pillow
python main.py

cd frontend-support-pdf-generator/frontend
npx create-next-app@latest .
npm install
npm run dev

License
MIT 
