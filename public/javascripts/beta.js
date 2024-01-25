// Use the correct variable name
var whatsappBtn = document.getElementById("smilewhatsappBtnMobile");
var buyButton = document.getElementById("smileoneButtonMobile");
var userIdInput = document.getElementById("exampleInputEmail1");
var serverIdInput = document.getElementById("exampleInputPassword1");
var inputEmail = document.getElementById("inputEmail"); // Corrected the ID here
var preventTouching = document.getElementById("preventTouching");
var warn = document.querySelector(".warnMobile");

buyButton.addEventListener("click", function () {
  console.log("Buy button clicked");
  if (
    serverIdInput.value.length !== 0 &&
    userIdInput.value.length !== 0 &&
    rs.innerHTML !== "0" &&
    inputEmail.value.length !== 0
  ) {
    preventTouching.style.display = "flex";
  } else {
    warn.style.display = "initial";
    alert("Fill your details first, before proceed!")
  }
});

whatsappBtn.addEventListener("click", function () {
  console.log("WhatsApp button clicked");
  if (
    serverIdInput.value.length !== 0 &&
    userIdInput.value.length !== 0 &&
    rs.innerHTML !== "0" &&
    inputEmail.value.length !== 0
  ) {
    preventTouching.style.display = "flex";
  } else {
    warn.style.display = "initial";
    alert("Fill your details first, before proceed!")
  }
});
