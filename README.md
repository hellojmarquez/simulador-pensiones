# 📊 Pension Simulator: Chile's 2026 Pension Reform

[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://simulador-pensiones-phi.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An interactive tool designed for Chilean citizens to visualize and compare how the proposed pension reform would impact their future retirement.

🚀 **Access the simulator here:** [https://simulador-pensiones-phi.vercel.app/](https://simulador-pensiones-phi.vercel.app/)

---

## ✨ Key Features

- **Real-Time Simulation**: Adjust your age, income, and contribution years with interactive sliders and see instant results.
- **System Comparison**: Visualize the difference between the current **Individual Capitalization** and the proposed **Social Security** system.
- **Dynamic Infographics**: Comprehensive charts generated via Chart.js for clear visual analysis.
- **Local Privacy**: Sensitive user input is not stored permanently in the browser.

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion.
- **Charts**: Chart.js.
- **Backend API**: Next.js Server Actions & API Routes.
- **Integrations**: Google Apps Script (Webhooks for feedback and opinion logging).

---

## 🔒 Security & Intellectual Property Notice

> [!IMPORTANT]
> **This repository does NOT contain the calculation logic source code.**

Due to security and confidentiality requirements for actuarial logic, the calculation files (`src/app/api/calculate/route.ts`) are excluded from this public repository via `.gitignore`. 

The production deployment utilizes the **Vercel CLI** to inject these private components directly from the secure local development environment to Vercel's servers. This ensures that proprietary formulas remain hidden from the public while the tool remains fully functional for users.

---

## 🚀 Installation & Local Development

To clone the project and work on the UI/UX:

1. Clone the repo:
   ```bash
   git clone https://github.com/hellojmarquez/simulador-pensiones.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

*Developed with ❤️ to empower citizen information.*
