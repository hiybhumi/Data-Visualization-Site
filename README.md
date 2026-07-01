# Data-Visualization-Site

# 🚦 Real-Time Traffic Volume Dashboard

## 📌 Project Overview

The **Real-Time Traffic Volume Dashboard** is a web-based data visualization project developed using **HTML, CSS, and JavaScript**. It uses the **Metro Interstate Traffic Volume** dataset downloaded from **Kaggle** to simulate a live traffic monitoring system.

Instead of displaying the entire dataset at once, the application reads one record every second, creating the effect of a real-time traffic dashboard.

---

## ✨ Features

- 🚗 Live traffic volume updates every second
- 📊 Displays current vehicle count
- 🚦 Traffic status (Low / Moderate / High)
- 📈 Average traffic volume
- 🌈 Dynamic traffic density progress bar
- 📅 Current timestamp display
- 📋 Live-updating traffic data table
- 📁 Reads traffic data directly from a Kaggle CSV dataset

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Kaggle Dataset (CSV)

---

## 📂 Dataset

**Dataset Name:** Metro Interstate Traffic Volume

**Source:** Kaggle

The dataset contains hourly traffic volume measurements collected from **Interstate 94 (I-94)** in **Minneapolis–Saint Paul, Minnesota, USA**.

It includes:
- Date & Time
- Traffic Volume
- Weather Information
- Holiday Information
- Temperature
- Cloud Cover
- Weather Description

---

## ⚙️ How It Works

1. The application loads the CSV file downloaded from Kaggle.
2. JavaScript converts the CSV into usable data.
3. Every second, one new record is displayed.
4. The dashboard updates:
   - Current Vehicles
   - Traffic Status
   - Average Volume
   - Progress Bar
   - Data Table
5. This creates a **simulation of a live traffic monitoring dashboard**.

---

## 📁 Project Structure

```
Traffic-Dashboard/
│
├── index.html
├── style.css
├── script.js
├── Traffic_Volume.csv
└── README.md
```

---

## ▶️ How to Run

1. Download the project.
2. Download the Metro Interstate Traffic Volume dataset from Kaggle.
3. Place the CSV file inside the project folder.
4. Open the project using **VS Code**.
5. Install the **Live Server** extension.
6. Right-click on `index.html`.
7. Select **Open with Live Server**.
8. The dashboard will begin displaying live traffic updates.

---

## 📊 Project Logic

The dashboard simulates real-time monitoring by reading one traffic record from the dataset every second.

The traffic density bar is calculated using:

```
Traffic Density (%) = (Current Traffic Volume / Maximum Traffic Volume) × 100
```

Higher traffic volume results in a longer progress bar and a "High" traffic status.

---

## 🎯 Future Improvements

- Interactive charts
- Traffic prediction using Machine Learning
- Live traffic API integration
- Date-wise filtering
- Search functionality
- Export reports to CSV/PDF

---

## 👨‍💻 Author

**Bhumika**

Minor Project – Real-Time Data Visualization using HTML, CSS, JavaScript, and Kaggle Dataset.
