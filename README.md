# ALX Dynamic To-Do List (JavaScript)

A lightweight, interactive To-Do List application built with vanilla JavaScript. This app allows users to add, display, remove, and persist tasks across sessions using Local Storage. A beginner-friendly project to grasp core JavaScript DOM manipulation and web storage concepts.

## 📚 Table of Contents

- [Preview](#preview)
- [Features](#features)
- [Concepts Covered](#concepts-covered)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Testing](#testing)
- [Credits](#credits)
- [Contact](#contact)

---

## Preview

![Demo Screenshot](./assets/todo1.png)
![Demo Screenshot](./assets/todo2.png)

## Features

- Add tasks via button or pressing **Enter**
- Remove tasks individually
- Persist tasks using Local Storage
- Interactive DOM updates in real-time
- Keyboard accessibility supported

---

## Concepts Covered

![DOM manipulation](https://img.shields.io/badge/DOM%20Manipulation-orange)
![Event handling](https://img.shields.io/badge/Event%20Handling-green)
![Local Storage API](https://img.shields.io/badge/Local%20Storage%20API-blue)
![JSON parsing](https://img.shields.io/badge/JSON%20Parsing-purple)

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## How It Works

### DOMContentLoaded

All logic runs after the page fully loads using:

```js
document.addEventListener("DOMContentLoaded", () => { ... });
```

### Task Input

- Uses `getElementById()` to select inputs
- `addTask(`) handles validation, creation, and removal of list items

### Add/Remove Logic

- Tasks added with a `button` or pressing `Enter`
- Each task includes a `Remove button` with an event listener to delete the task

## Project Structure

```plaintext
dynamic-to-do-list-js/
├── assets/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/dynamic-to-do-list-js.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dynamic-to-do-list-js
   ```

3. Open `index.html` in your browser to run the app.

## Testing

- Add multiple tasks
- Try removing tasks
- Try adding duplicate tasks
- Press Enter to add tasks
- Check empty input validation

## Credits

- Project idea & structure inspired by [ALX](https://www.alxafrica.com/) exercises
- Icons and badges from [Shields.io](https://shields.io/)

## Contact

Made with ❤️ by **Mia Mudzingwa**

- GitHub: [Mia06-coder](https://github.com/Mia06-coder)
- LinkedIn: [mia-mudzingwa](https://www.linkedin.com/in/mia-mudzingwa)
