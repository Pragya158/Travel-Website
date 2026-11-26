let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

// Login
document.addEventListener("click", function (e) {
  if (e.target.closest("#user")) {
    document.querySelector(".loginPage").classList.toggle("active1");
  }
});

loginBtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (email.value == "" || pass.value == "") {
    alert("Please Fill Detail");
  } else {
    alert("You Logged In");
    document.querySelector(".loginPage").classList.remove("active1");
  }
});

// Booking
submit.addEventListener("click", function () {
  if (placeName.value == "") {
    alert("Fill Form");
  } else {
    alert(placeName.value + " Tour Booked");
  }
});

// Contact
let contactName = document.getElementById("contactName");
let contactEmail = document.getElementById("contactEmail");
let connect = document.getElementById("connect");

connect.addEventListener("click", function () {
  if (contactName.value == "" || contactEmail.value == "") {
    alert("Please Fill All Details");
  } else {
    alert("Thank You " + contactName.value + "! We Will Connect You Soon.");
  }
});
