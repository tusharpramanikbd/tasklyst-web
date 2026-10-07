# Tasklyst

An offline-first mobile task manager designed for simple daily planning and productivity.

Tasklyst is a Progressive Web App (PWA) that lets users manage daily tasks directly on their device. It is built with a mobile-first approach and stores task data locally, allowing the app to work without an internet connection.

## Features

- ✅ Create and manage daily tasks
- ✔️ Mark tasks as completed or incomplete
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 📅 Navigate between different dates
- ➡️ Move unfinished tasks to the next day
- 💾 Store task data locally using IndexedDB
- 📴 Use the app without an internet connection
- 📱 Install as a PWA on supported mobile devices
- ⚡ Fast, mobile-focused user experience

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Dexie**
- **IndexedDB**
- **date-fns**
- **Vite PWA**
- **Heroicons**

## How It Works

Tasklyst organizes tasks by date.

Users can create tasks for the selected day, mark them as completed, rename or delete them, and move tasks to the following day when needed.

Task data is stored locally in the browser using IndexedDB through Dexie, allowing the application to work offline without requiring a backend service.

The application is designed primarily for mobile devices and can be installed as a Progressive Web App on supported iPhone and Android devices.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Clone the repository

```bash
git clone https://github.com/tusharpramanikbd/tasklyst-web.git
cd tasklyst-web
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the application in development mode.

### Build

```bash
npm run build
```

Creates a production build of the application.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase.

### Preview

```bash
npm run preview
```

Runs the production build locally for preview.

## Project Purpose

Tasklyst was built as a lightweight personal productivity tool and as a practical exploration of mobile-first Progressive Web App development.

The project focuses on:

- Offline-first application design
- Progressive Web App development
- Client-side data persistence
- Mobile-focused user experience
- Date-based task management
- React and TypeScript application architecture

## Author

**Tushar Pramanik**

[GitHub](https://github.com/tusharpramanikbd) · [LinkedIn](https://www.linkedin.com/in/tushar-pramanik/)
