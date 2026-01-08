# 💱 FOREX RATE CHECKER

A simple, responsive, and efficient web application to convert currencies in real-time.

---

<img width="50%" alt="Forex Rate Checker" src="https://github.com/user-attachments/assets/5fcc3df9-9e59-477a-ba25-0279c6428850" />

## 🚀 Features

* **Real-time Conversion:** Get the latest exchange rates instantly between nations.
* **Dynamic Country Flags:** Automatically updates the country flag based on the selected currency code.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens using Bootstrap 5.
* **User-Friendly Interface:** Clean, modern, and intuitive UI for easy navigation.
* **Swap Functionality:** Quickly swap between "From" and "To" currencies with a single click.

---

## 🛠 Tech Stack

* **HTML5:** Structure and semantic markup.
* **CSS3:** Custom styling and smooth animations.
* **Bootstrap 5:** For responsive grid layout and pre-built components.
* **JavaScript (ES6):**
    * `app.js`: Main application logic, event handling, and DOM manipulation.
    * `code.js`: Helper file containing the list of currency codes and country data.

---

## 📡 APIs Used

* **Currency Data:** [ExchangeRate-API](https://www.exchangerate-api.com/)
    * Used to fetch real-time exchange rates for accurate currency conversion.
* **Country Flags:** [FlagsAPI](https://flagsapi.com/)
    * Used to dynamically display country flags based on the selected currency code.

---

## 📂 Project Structure

```bash
forex-rate-checker/
│
├── index.html          # Main user interface
├── app.js              # Main logic (API calls, event listeners)
├── code.js             # Data file (Country list & Currency codes)
└── README.md           # Project documentation

