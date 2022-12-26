import axios from "axios";


export const sendMessageWithTg = (data) => {
  const TOKEN = "5910421066:AAHeCC7Xl-YUfnhUB8WvvA84DovAP9ChfIk";
  const CHAT_ID = "-1001880707481";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  console.log(data)

  const formData = JSON.parse(data);
  const userName = formData.userName;
  const userPhone = formData.userPhone;
  console.log(userName);

  let message = `Заявка с сайта!\n`;
  message += `Имя: ${userName}\n`;
  message += `Телефон: ${userPhone}`;
  console.log(message);

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mod: "html",
    text: message,
  });
};
