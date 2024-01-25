//news card logic
var vlag = 0;
document.querySelector("#newsIcon").addEventListener("click", function () {
  if (vlag === 0) {
    document.querySelector(".newsCard").style.display = "initial";
    console.log(vlag);
    vlag = 1;
  } else {
    document.querySelector(".newsCard").style.display = "none";
    console.log(vlag);
    vlag = 0;
  }
});

var tag = 0;
document.getElementById("menu").addEventListener("click", function () {
  if (tag === 0) {
    document.querySelector(".side-nav").style.left = "0vw";
    tag = 1;
  } else {
    document.querySelector(".side-nav").style.left = "-65vw";
    tag = 0;
  }
});

//shake animation
function shakeCard() {
  const card = document.querySelectorAll(".sp-items");
  card.forEach(function (item) {
    item.classList.add("shake");
    item.classList.add("shake-border");

    setTimeout(() => {
      item.classList.remove("shake");
      item.classList.remove("shake-border");
    }, 1000);
  });
}

setInterval(shakeCard, 3000); // Trigger shake every 5 seconds
