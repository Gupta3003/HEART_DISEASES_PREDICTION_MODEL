# ❤️ Heart Disease Prediction System

A machine learning-based web application to predict the likelihood of heart disease based on user input parameters. This project aims to assist in early diagnosis and decision support for healthcare professionals and individuals.

---

## 🧠 Overview

This project uses a trained machine learning model to analyze medical features and predict whether a person is likely to have heart disease. The web interface allows users to input parameters and receive instant feedback.

---

## 🧪 Features

- 🩺 Predict the presence of heart disease
- 📊 Input medical parameters via a web form
- 🔍 View prediction results instantly
- 💾 Trained ML model (Logistic Regression / Random Forest / SVM)
- 🌐 Interactive UI using Flask or Streamlit

---

## 📚 Technologies Used

- **Python**
- **Scikit-learn** – ML model training and evaluation
- **Pandas & NumPy** – Data preprocessing
- **Matplotlib & Seaborn** – Data visualization (optional)
- **Flask** or **Streamlit** – Web app interface
- **HTML/CSS** – Frontend design

---
## Screenshort
![Screenshot (985)](https://github.com/user-attachments/assets/383253e6-79d7-44e6-84cf-8d0c332cb424)


## ⚙️ ML Model Details

- Dataset: UCI Heart Disease Dataset
- Target Variable: `target` (1 = presence, 0 = absence)
- Model(s) used:
  - Logistic Regression
  - Random Forest Classifier
  - Support Vector Machine (optional)

**Input Parameters:**
- Age
- Sex
- Chest Pain Type
- Resting Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- Resting ECG
- Max Heart Rate
- Exercise Induced Angina
- ST Depression
- Slope of ST Segment
- Number of Major Vessels
- Thalassemia

---

## 🧑‍⚕️ Sample Prediction Result

**Input:**
Age: 58
Sex: Male
Chest Pain Type: 3
Resting BP: 130
Cholesterol: 230
Fasting Blood Sugar > 120 mg/dl: No
Max Heart Rate: 150
Exercise Induced Angina: Yes

makefile
Copy
Edit

**Output:**
✅ Low Risk of Heart Disease

yaml
Copy
Edit

---

## 📂 Project Structure

heart-disease-prediction/
├── app.py # Main Flask/Streamlit app
├── model.pkl # Trained ML model
├── templates/ # HTML templates (if using Flask)
│ └── index.html
├── static/ # CSS/JS files
├── heart.csv # Dataset
└── README.md

yaml
Copy
Edit

---

## 📝 License

This proje
