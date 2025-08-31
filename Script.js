function calculateAge() {
  let dob = document.getElementById("dob").value;
  if (dob === "") {
    document.getElementById("result").innerText = "Please select your date of birth.";
    return;
  }
  let dobDate = new Date(dob);
  let today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  let month = today.getMonth() - dobDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  document.getElementById("result").innerText = "🎉 You are " + age + " years old.";
}
