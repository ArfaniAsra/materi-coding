import https from "https";

const url = "https://tutorial-nodejs-dasar.free.beeceptor.com";
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  function (response) {
    response.addListener("data", function (data) {
      console.info(`Receive : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Eko",
  lastName: "Khannedy",
});

request.write(body);
request.end();
