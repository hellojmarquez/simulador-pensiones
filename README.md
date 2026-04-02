# 📊 Simulador de Pensiones: Reforma Previsional 2026

[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://simulador-pensiones-phi.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Una herramienta interactiva diseñada para que los ciudadanos chilenos puedan visualizar y comparar cómo impactaría la propuesta de reforma de pensiones en su jubilación futura.

🚀 **Accede al simulador aquí:** [https://simulador-pensiones-phi.vercel.app/](https://simulador-pensiones-phi.vercel.app/)

---

## ✨ Características Principales

- **Simulación en Tiempo Real**: Ajusta tu edad, sueldo y años de cotización con sliders interactivos y ve los cambios al instante.
- **Comparativa de Sistemas**: Visualiza la diferencia entre la **Capitalización Individual** actual y la propuesta con **Seguro Social**.
- **Infografía Dinámica**: Gráficos integrales generados con Chart.js para un análisis visual claro.
- **Privacidad Local**: Los datos sensibles no se almacenan permanentemente en el navegador.

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion.
- **Gráficos**: Chart.js.
- **Backend API**: Next.js Server Actions & API Routes.
- **Integraciones**: Google Apps Script (Webhooks para registro de opiniones).

---

## 🔒 Aviso de Seguridad y Propiedad Intelectual

> [!IMPORTANT]
> **Este repositorio NO contiene el código fuente de las fórmulas de cálculo previsional.**

Por motivos de seguridad y confidencialidad de la lógica actuarial, los archivos de cálculo (`src/app/api/calculate/route.ts`) están excluidos de este repositorio público mediante `.gitignore`. 

La implementación en producción utiliza el **Vercel CLI** para inyectar estos componentes privados directamente desde el entorno de desarrollo seguro a los servidores de Vercel, garantizando que las fórmulas proprietarias permanezcan ocultas al público mientras la herramienta sigue siendo funcional para los usuarios.

---

## 🚀 Instalación y Desarrollo Local

Si deseas clonar el proyecto para trabajar en la interfaz:

1. Clona el repo:
   ```bash
   git clone https://github.com/hellojmarquez/simulador-pensiones.git
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor:
   ```bash
   npm run dev
   ```

---

*Desarrollado con ❤️ para empoderar la información ciudadana.*
