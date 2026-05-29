# frontend-support-pdf-generator

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?logo=next.js)
![ReportLab](https://img.shields.io/badge/ReportLab-PDF-red)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)

---

## 📖 Overview
This project generates **court‑ready complaint PDFs** with a simple frontend form.  
It combines a **Python backend (ReportLab)** with a **Next.js frontend**, and includes templates, assets, and a cover image.

---

## ✨ Features
- 📝 **PDF Complaint Generator** using Python ReportLab.
- 🔒 **Embedded Evidence**: screenshots with SHA‑256 hash chain.
- 📂 **Multiple Templates**: FTC, State Attorney General, Class‑Action Exhibit.
- 🌐 **Frontend UI**: Next.js form for input, FAQ/help‑text component.
- 🖼️ **Cover Image**: stored in `assets/cover.png` and embedded in PDFs.

---

## 📂 Project Structure
frontend-support-pdf-generator/
│
├── pdf-generator/
│   └── main.py
│
├── frontend/
│   ├── pages/
│   │   └── api/
│   │       └── generate-pdf.js
│   └── components/
│       ├── ComplaintForm.js
│       └── FAQ.js
│
├── templates/
│   ├── ftc_template.txt
│   ├── state_ag_template.txt
│   └── class_action_template.txt
│
├── assets/
│   └── cover.png
│
└── README.md

Code

---

## 🛠️ Setup Instructions

### Backend (Python)
```bash
cd frontend-support-pdf-generator/pdf-generator
pip install reportlab pillow
python main.py
Frontend (Next.js)
bash
cd frontend-support-pdf-generator/frontend
npx create-next-app@latest .
npm install
npm run dev
Open in browser: http://localhost:3000

📸 Screenshots
Complaint Form UI
https://via.placeholder.com/600x300.png?text=Complaint+Form+UI

Generated PDF
https://via.placeholder.com/600x300.png?text=Sample+Complaint+PDF

👥 Authors
Eman Bashir — Frontend Support & PDF Generator

Tanzila — Frontend collaboration and cover image

✅ Deliverables
Backend PDF generator with hash chain.

Frontend form + FAQ component.

Templates for different complaint types.

Cover image integration.

Complete README documentation.

Code

---

### 🔑 Tips for Styling Your README
- **Badges**: Use [shields.io](https://shields.io) to add badges for Python, Next.js, build status, etc.  
- **Screenshots**: Add images of your UI and generated PDF (you can use placeholders until you have real ones).  
- **Sections**: Keep clear headings (Overview, Features, Setup, Screenshots, Authors).  
- **Emoji**: Use emojis for readability and fun. 
