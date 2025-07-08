# ✈️ Big Data Analysis: Airline Delays & Cancellations (2009–2018)

This is a final year data science project focused on large-scale analysis of airline delays and cancellations across the United States between 2009 and 2018. It demonstrates the ability to work with multi-gigabyte datasets in a high-performance notebook environment such as Kaggle or Google Colab.

---

## 🎯 Objective

To identify patterns, trends, and insights in airline delay and cancellation data, and to explore how various factors such as time of year, airports, and carriers contribute to these disruptions.

---

## 📁 Dataset Details

- **Name**: Airline Delay and Cancellation Dataset (2009–2018)
- **Format**: CSV files (1 file per year)
- **Size**: Multi-gigabyte (ideal for big data environments)
- **Key Features**:
  - `FlightDate`, `Carrier`, `Origin`, `Dest`
  - `ArrDelay`, `DepDelay`, `Cancelled`, `Diverted`

> Dataset accessed via `!ls /kaggle/input/airline-delay-and-cancellation-data-2009-2018`

---

## 📌 Workflow Overview

1. **Imports and Initialization**
2. **Loading Data for Multiple Years**
3. **Cleaning & Combining Yearly Data**
4. **Exploratory Data Analysis (EDA)**:
   - Monthly delays
   - Most cancelled flights
   - Trends in delay causes
5. **Visualizations** using Matplotlib & Seaborn

---

## 🧰 Tools & Technologies

| Tool/Library         | Purpose                     |
|----------------------|-----------------------------|
| Python               | Programming Language        |
| Pandas, NumPy        | Data processing             |
| Matplotlib, Seaborn  | Data visualization          |
| Kaggle / Google Colab| Notebook execution          |
| Git + GitHub         | Version control & sharing   |

---

# View the dataset files inside a Kaggle notebook
!ls /kaggle/input/airline-delay-and-cancellation-data-2009-2018
📊 Key Insights (Examples)
✈️ January and July are peak months for delays.

🛫 ATL, ORD, and LAX had the highest delay counts.

🌦️ Weather and carrier-related delays were the most common causes.

📉 A steady improvement in on-time performance after 2015.

👨‍💻 Author
Naveenkumar
Final Year B.Tech Student
Specialization: Data Science & Cybersecurity
GitHub: @Naveen220104

📎 License
This project is for educational and academic use only. Dataset belongs to respective providers (Kaggle, FAA, etc.).

