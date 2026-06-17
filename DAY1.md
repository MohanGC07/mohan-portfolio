# 📅 Day 1 Report — Portfolio Project Setup

## 🧠 Project Overview

Started building a modern AI-powered 3D portfolio website for **Mohan G.C** with the goal of creating a premium, Apple-level minimal experience combined with an interactive scroll-based timeline and a full admin CMS system.

---

## 🎯 Day 1 Objective

Set up a production-ready Next.js project with Tailwind CSS and initialize GitHub version control.

---

## ⚙️ What Was Accomplished

### 1. Next.js Project Initialization

* Created project using `create-next-app`
* Enabled:

  * TypeScript
  * Tailwind CSS
  * App Router
  * ESLint
  * `src/` directory structure

✔ Result: Modern scalable frontend foundation established

---

### 2. Development Server Setup

* Started local development server using:

```bash
npm run dev
```

* Successfully running at:

```
http://localhost:3000
```

✔ Result: Local environment fully functional

---

### 3. Build System Issue & Fix

#### Issue:

* Turbopack failed due to Windows security policy blocking SWC native binary.

#### Error:

```
An Application Control policy has blocked this file (SWC)
Turbopack is not supported on this platform
```

#### Fix:

* Switched to Webpack mode:

```bash
next dev --webpack
```

✔ Result: Stable development environment restored

---

### 4. UI Cleanup

* Removed default starter UI
* Created minimal homepage:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-light tracking-widest">M</h1>
    </main>
  );
}
```

✔ Result: Clean Apple-style base UI established

---

### 5. Folder Structure Setup

Created scalable project structure:

```
src/
  app/
  components/
  lib/
  styles/
```

✔ Result: Organized architecture ready for scaling (CMS + 3D system)

---

### 6. GitHub Setup & Version Control

#### Steps:

* Initialized Git repository
* Created GitHub repository
* Connected local project to remote
* Pushed first commit

#### Commit message:

```
init: nextjs portfolio setup with tailwind and clean structure
```

✔ Result:

* Version control active
* Project safely stored on GitHub
* Clean development history started

---

## ⚠️ Issues Encountered

### 1. SWC Native Binary Block

* Windows security policy blocked Next.js SWC compiler

**Impact:**

* Turbopack disabled
* Fallback to Webpack used

**Status:**
✔ Non-critical for development

---

### 2. Image Warning (Default Next.js Template)

* Aspect ratio warning from default image setup

**Status:**
✔ Ignored (starter template artifact)

---

## 🧠 Key Learnings

### Technical

* Next.js App Router setup
* Tailwind CSS integration
* Webpack vs Turbopack understanding
* Git workflow (init → commit → push)

### System Design Thinking

* Importance of scalable folder structure
* Separation of UI, logic, and styles
* Early-stage architecture planning for CMS system

### Developer Mindset

* Warnings are not failures
* Environment issues are normal in real-world development
* Small commits build professional-level history

---

## 🚀 Output of Day 1

By the end of Day 1:

* Project is fully running locally
* Clean UI foundation established
* GitHub repository connected and updated
* Scalable architecture initialized
* Ready for UI/UX and 3D development

---

## 📌 Next Step (Day 2 Preview)

We will begin building:

### 🎨 Apple-Level Hero Section

* “M” identity design system
* Premium typography setup
* Layout spacing system (Apple-style minimalism)
* First motion design foundation
* Preparation for 3D integration

---

## 🧭 Reflection

Day 1 focused entirely on foundation and system setup.
No visuals, only structure — the base on which everything else will be built.
