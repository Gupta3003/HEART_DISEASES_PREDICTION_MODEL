function validateForm() {
    const age = parseFloat(document.getElementById("age").value);
    const trestbps = parseFloat(document.getElementById("trestbps").value);
    const chol = parseFloat(document.getElementById("chol").value);
    const thalach = parseFloat(document.getElementById("thalach").value);
    const oldpeak = parseFloat(document.getElementById("oldpeak").value);

    if (isNaN(age) || age < 29 || age > 77) {
        alert("Please enter a value between 29 and 77 for Age.");
        document.getElementById("age").focus();
        return false;
    }

    if (isNaN(trestbps) || trestbps < 94 || trestbps > 200) {
        alert("Please enter a value between 94 and 200 for Resting Blood Pressure.");
        document.getElementById("trestbps").focus();
        return false;
    }

    if (isNaN(chol) || chol < 126 || chol > 564) {
        alert("Please enter a value between 126 and 564 for Cholesterol.");
        document.getElementById("chol").focus();
        return false;
    }

    if (isNaN(thalach) || thalach < 71 || thalach > 202) {
        alert("Please enter a value between 71 and 202 for Max Heart Rate Achieved.");
        document.getElementById("thalach").focus();
        return false;
    }

    if (isNaN(oldpeak) || oldpeak < 0.0 || oldpeak > 6.2) {
        alert("Please enter a value between 0.0 and 6.2 for ST Depression (Oldpeak).");
        document.getElementById("oldpeak").focus();
        return false;
    }

    // All validations passed
    return true;
}
