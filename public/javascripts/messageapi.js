var axios = require("axios");
require("dotenv").config();

function sendMessage(data) {
  var config = {
    method: "post",
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

function getTextMessageInput(
  recipient,
  playerid,
  serverid,
  itemid,
  itemname,
  price,
  orderid,
  dateformat,
  time,
  quantity
) {
  var finalPrice = price * quantity;

  return JSON.stringify({
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: recipient,
    type: "text",
    text: {
      body: `New Order Received @GosuFamilyStore\n---------------------------------------------\nOrder Id     :   ${orderid}\nDate     :   ${dateformat}\nTime     :   ${time}\n---------------------------------------------\nItem Name     :   ${itemname}\nItem Id     :   ${itemid}\nAmount     :   ₹${finalPrice+0.03}\nQuantity     :   ${quantity}\n---------------------------------------------\nPlayerID     :   ${playerid}\nServerID     :   ${serverid}`,
    },
  });
}

module.exports = {
  sendMessage: sendMessage,
  getTextMessageInput: getTextMessageInput,
};
