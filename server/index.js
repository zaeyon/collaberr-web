const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/channel", function (appReq, appRes) {
  console.log("/channel req", appReq.body);
  axios
    .get(appReq.body.channel_url)
    .then((res) => {
      console.log("GET channel url success", res.data);
      const regex = /(?<=urlCanonical(":"))[^"]+/g;
      const result = res.data.match(regex);
      console.log("result", result[0]);
      appRes.send(result[0]);
      appRes.end();
    })
    .catch((err) => {
      console.log("GET channel url failed", err);
    });
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
