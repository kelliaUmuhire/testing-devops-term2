const express = require("express");
const router = express.Router();
const Token = require("../model/Token");
const { newToken, tokenInfo } = require("../utils/token.utils");

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
