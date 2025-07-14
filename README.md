# 💸 Expense Tracker

A modern, professional, and responsive **Expense Tracker** built with **React** and **Vite**. Track your expenses, visualize spending by category, and enjoy a seamless dark/light theme experience. Great for personal finance and a portfolio project to showcase your React skills.

---

## 🚀 Features

- 📌 **Add, View & Delete Expenses**  
- 📊 **Live Summary & Analytics (Donut Chart)**  
- 🌙 **Dark/Light Theme Toggle**  
- 💾 **Persistent Storage using localStorage**  
- 📱 **Fully Responsive UI**  
- ♿ **Accessible & Keyboard Friendly**

---

## 🛠️ Tech Stack

| Technology           | Purpose                          |
|----------------------|----------------------------------|
| React 18             | UI Framework                     |
| Vite                 | Build Tool                       |
| Chart.js + react-chartjs-2 | Expense analytics (doughnut) |
| PropTypes            | Prop validation                  |
| uuid                 | Unique ID generation             |
| CSS (custom)         | Styling and theme                |
| localStorage         | Save data persistently           |

---

## 🖼️ Screenshots

> _You can include screenshots here to show how the app looks in dark/light mode and analytics chart._

---

## 📁 Folder Structure

```
expense-tracker/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── App.css
    └── components/
        ├── Header.jsx
        ├── Summary.jsx
        ├── ExpenseForm.jsx
        ├── ExpenseList.jsx
        └── ExpenseItem.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🚢 Build & Deploy

```bash
npm run build
npm run preview
```

> Deploy the `/dist` folder on Netlify, Vercel, GitHub Pages, or ByteXL Nimbus.

---

## ✨ Customization

- **Edit Categories:**  
  In `App.jsx`, update the `categories` array.

- **Change Theme/Colors:**  
  Customize `App.css`.

---

## 📌 How to Use

- Add new expenses with the form.
- Delete expenses from the list.
- Use the chart to analyze spending.
- Switch between dark and light themes.

---

## 📦 Quality & Best Practices

- ✅ PropTypes validation
- ✅ Responsive design
- ✅ Accessible for all users

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [uuid](https://www.npmjs.com/package/uuid)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

---

## 🧠 Future Improvements

- 🔔 Budget limits & alerts
- 🔄 Recurring expenses
- 📂 CSV Import/Export
- 🔐 Authentication
- ☁️ Cloud sync (Firebase/Supabase)

---

## 📄 License

This project is licensed under the **MIT License**.

---

> _Feel free to fork, improve, or suggest changes. Contributions are welcome!_
