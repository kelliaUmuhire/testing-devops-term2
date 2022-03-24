const express = require("express");
const router = express.Router();
const Token = require("../model/Token");

export function newToken(money) {
  //less than 100rwf
  if (money < 100) return;
  let days = money / 100;
  //exceeds 5years
  if (days > 365 * 5) return;

  let token = days.toString();
  let dd = 0;
  if (token.length === 1) {
    dd = Math.floor(100000 + Math.random() * 900000);
  }
  if (token.length === 2) {
    dd = Math.floor(10000 + Math.random() * 90000);
  }
  if (token.length === 3) {
    dd = Math.floor(1000 + Math.random() * 9000);
  }
  if (token.length === 4) {
    dd = Math.floor(100 + Math.random() * 900);
  }
  dd = dd.toString();
  token = token + dd + token.length.toString();

  return token;
}

export function tokenInfo(token) {
  token = token.toString();
  let i = token[7];
  let days = token.substr(0, i);
  return days;
}

//new token
router.post("/", async (req, res) => {
  const { meter, money } = req.body;
  const token = newToken(money);
  Token.create({
    token_id: parseInt(token),
    meter_num: meter,
    created_at: new Date().toISOString(),
    status: "up",
  })
    .then((doc) => res.status(200).send({ token, msg: "success" }))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Token.findOne({ token_id: req.params.id })
    .then((token) => {
      if (!token) return res.status(404).send({ msg: "Token not found" });
      res.status(200).send({
        token: req.params.id,
        days: tokenInfo(req.params.id),
        created_at: token.created_at,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
