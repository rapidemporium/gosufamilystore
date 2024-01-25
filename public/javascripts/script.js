var price, itemid, itemName;
var itemList = document.querySelectorAll(".item-card");
var rs = document.querySelector(".rs");
var choosed = document.querySelector("#choosed");
var priceCard = document.querySelector(".wrapper");
var clear = document.querySelector(".clear");
var buyButton = document.getElementById("rzp-button2");

var halfScreen = document.querySelector(".halfScreen");
var last = document.querySelector(".last");
var rupee = document.getElementById("rupee");
// Form Validation ----------->
var userIdInput = document.getElementById("exampleInputEmail1");
var serverIdInput = document.getElementById("exampleInputPassword1");
var emailInput = document.getElementById("exampleInputPassword2");
var warn = document.getElementById("warn");
var counterVal = 1;
var priceWithQuantity = 0;

//on click find item ----- >
itemList.forEach(function (itemcard, index) {
  itemcard.addEventListener("click", function (event) {
    price = itemcard.getAttribute("data_price");
    itemid = itemcard.getAttribute("item_id");
    itemName = itemcard.getAttribute("item_name");
    const numberPrice = parseFloat(price);
    const paltformFee = numberPrice + 0.03;
    const addQuantity = paltformFee * counterVal;
    const finalPrice = addQuantity.toFixed(2);
    priceWithQuantity = paltformFee;
    document.querySelector(".rs").innerHTML = finalPrice;
    buyButton.setAttribute("data-final", price);
    document.getElementById("payErr").style.display = "none";

    // Check if the form fields are filled
    if (userIdInput.value !== "" && serverIdInput.value !== "") {
      // Set the data-final attribute of the "Buy" button to the item's price
      buyButton.setAttribute("data-final", price);
      warn.style.display = "none";
      document.getElementById("choosed").innerHTML = itemName;
      console.log("filled");
    } else {
      // If the form fields are empty, set the data-final attribute to 0
      buyButton.setAttribute("data-final", "0");
      userIdInput.style.border = "2px solid red";
      serverIdInput.style.border = "2px solid red";
      alert("Please fill the details first");
      warn.style.display = "initial";
      rs.innerHTML = "0";
      choosed.innerHTML = "0";
    }
  });
});

clear.addEventListener("click", function () {
  rs.innerHTML = "0";
  choosed.innerHTML = "0";
  priceCard.style.display = "none";
  //Setting Attribute to purchase button-------------->
  buyButton.setAttribute("data-final", 0);
});

userIdInput.addEventListener("input", function () {
  if (userIdInput.value.length > 0) {
    userIdInput.style.border = "1px solid #000";
  } else {
    userIdInput.style.border = "2px solid red";
  }
});
serverIdInput.addEventListener("input", function () {
  if (serverIdInput.value.length > 0) {
    serverIdInput.style.border = "1px solid #000";
  } else {
    serverIdInput.style.border = "2px solid red";
  }
});

//Whatsapp Integration ------->

var player_id = null;
var server_id = null;

var whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", function () {
  player_id = userIdInput.value;
  server_id = server_id.value;
  console.log("serverid", server_id);
});

//Quantity Counter
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  counterVal = document.querySelector(".counter>input").value;
  rupee.innerHTML = (priceWithQuantity * counterVal).toFixed(2);
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    counterVal = document.querySelector(".counter>input").value;
  }
  rupee.innerHTML = (priceWithQuantity * counterVal).toFixed(2);
}

//responsive script for mobile device
var counter = document.querySelector(".counter");
var buttons = document.querySelector(".buttons");
var input = document.getElementById("exampleInputEmail1");
var input2 = document.getElementById("exampleInputPassword1");

if (window.innerWidth <= 600) {
  //on FOCUS
  input.addEventListener("focus", () => {
    counter.style.display = "none";
    buttons.style.display = "none";
  });
  input2.addEventListener("focus", () => {
    counter.style.display = "none";
    buttons.style.display = "none";
  });

  //on BLUR
  input.addEventListener("blur", () => {
    counter.style.display = "flex";
    buttons.style.display = "flex";
  });
  input2.addEventListener("blur", () => {
    counter.style.display = "flex";
    buttons.style.display = "flex";
  });
}


