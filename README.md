# UI Animated Cards

---

## Overview

UI Animated Cards is a simple React application that demonstrates interactive flip cards. Users can click a card to reveal the answer with a smooth rotation effect, showcasing component-based architecture and state management.

---

## Features

- Interactive flip cards
- Click-to-toggle question and answer
- Responsive layout for different screen sizes
- Conditional rendering using React state
- Styled with Tailwind CSS utility classes

---

## Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

---

## Project Structure

```text
src/
├── components/
│   └── Card.jsx
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

## Core Logic

### Main Logic

The application renders a collection of cards from a predefined data array. Each card manages its own flip state and conditionally displays either the question or the answer.

- Local state management with `useState`
- Dynamic rendering using `Array.map()`
- Conditional rendering based on card state
- Reusable Card component

---

## Performance Optimizations

- Reusable component architecture
- Local state isolated within each card
- Efficient list rendering with React

---

## UI / UX

- Responsive flex layout
- Interactive click-to-flip behavior
- Visual feedback through color changes
- Clean and minimal interface

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Future Improvements

- Add smooth 3D flip animations
- Load card data from an external source
- Support keyboard accessibility
- Add customizable card themes

---

## Author

**Dmytro**

Frontend Developer (React / TypeScript)

---

## Notes

This project demonstrates reusable React components, local state management with hooks, conditional rendering, responsive layouts, and interactive UI development using Tailwind CSS.
