# Airport Search Autocomplete

## Overview

This project is an Airport Search Autocomplete application built using **Angular 17 Standalone Components**. It allows users to search airports by airport code or city name with real-time autocomplete suggestions, keyboard navigation, and a responsive user interface.

---

## Technology Stack

- Angular 17
- TypeScript
- Reactive Forms
- RxJS
- HttpClient
- HTML5
- CSS3

### Why Angular?

I selected Angular because I have experience developing enterprise web applications using Angular, TypeScript, Reactive Forms, RxJS, and REST APIs. Angular provides a structured architecture, reusable components, and excellent support for reactive programming, making it suitable for scalable frontend applications.

---

## Features

- Search by Airport Code
- Search by City Name
- Case-insensitive search
- Displays Top 5 matching airports
- RxJS debounce search
- Keyboard navigation
  - Arrow Up
  - Arrow Down
  - Enter
  - Escape
- Mouse hover and click selection
- Selected airport details card
- Runtime loading of airport data using HttpClient

---

## How to Run

### Install dependencies

```bash
npm install
```

### Start the application

```bash
ng serve
```

Open the application in your browser:

```
http://localhost:4200
```

---

## Assessment Questions

### 1. How does your autocomplete avoid filtering on every keystroke, and why does that matter?

The autocomplete uses Angular Reactive Forms together with RxJS operators such as `debounceTime(250)` and `distinctUntilChanged()`. Filtering begins only after the user pauses typing for a short duration, reducing unnecessary filtering operations and improving application performance. This approach becomes increasingly important as the dataset grows.

### 2. How is the dropdown's keyboard navigation kept in sync with the mouse hover state?

The application uses a single `focusedIndex` variable to track the highlighted airport. Both keyboard navigation and mouse hover update this shared variable, ensuring that the highlighted item remains synchronized regardless of the interaction method. This provides a consistent user experience.

### 3. If the application needed to support 10,000 airports instead of 34, what ONE change would you make first?

The first improvement would be implementing virtual scrolling so that only the visible airport items are rendered. This reduces DOM rendering overhead and improves UI performance. If the dataset continued to grow, server-side filtering with pagination would be the next optimization.

---

## Known Limitations

- Supports substring matching only.
- Fuzzy search is not implemented.
- Airport data is loaded from a local JSON file.
- Accessibility enhancements (ARIA attributes) can be added.
- Loading and error handling can be improved.

---

## Project Structure

```
src/
├── app/
│   ├── airport-autocomplete/
│   ├── models/
│   ├── services/
│   └── app.component.ts
│
└── assets/
    └── airports.json
```

---

## Author

**Jeevasri K**