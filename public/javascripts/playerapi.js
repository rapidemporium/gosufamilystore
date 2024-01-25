//91764003
var userIdInput = document.getElementById("exampleInputEmail1");
var serverIdInput = document.getElementById("exampleInputPassword1");
var playerId = document.getElementById("mlbb-playerid");
var playerName = document.getElementById("mlbb-playername");
var vServer = document.getElementById("mlbb-serverid");
var gameName = document.getElementById("exampleModalLabel");
var Info = document.querySelector(".info");
var verifyErr = document.querySelector(".verify-err");
var isVarify = document.querySelector(".isVerify");
var verifyBtn = document.querySelector("#rzp-button1");

var button2 = document.getElementById("rzp-button2");
var whatsappBtn = document.getElementById("whatsappBtn");
var smileoneButton = document.getElementById("smileoneButton");
var smilewhatsappBtn = document.getElementById("smilewhatsappBtn");

var userid = "";
var serverid = "";

 

verifyBtn.addEventListener("click", async function () {
  userid = userIdInput.value;
  serverid = serverIdInput.value;

  console.log("userid", userid, serverid);

  const options = {
    method: "GET",
    url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${userid}/${serverid}`,
    headers: {
      "X-RapidAPI-Key": "d57b81b2bbmshbff82da3e7642abp134824jsn3b650ff8eedd",
      "X-RapidAPI-Host": "id-game-checker.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    console.log("Response data:", response.data);

    gameName.innerHTML = response.data.data.game;
    playerName.value = response.data.data.username;
    playerId.value = response.data.data.userId;
    verifyErr.style.display = "none";
    Info.style.display = "initial";
    isVarify.style.display = "initial";
    smileoneButton.style.display = "block";
    smilewhatsappBtn.style.display = "block";
    console.log("Successfully run !!");
  } catch (error) {
    verifyErr.style.display = "initial";
    verifyErr.innerHTML = "Enter valid playerID or try after some time";
    Info.style.display = "none";
    console.error("Error in fetching player username", error);
  }
});
