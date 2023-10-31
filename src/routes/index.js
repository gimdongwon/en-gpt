const express = require("express");
const router = express.Router();
const { callChatGpt } = require("../services");

router.post("/", async (req, res) => {
  const prompt = req.body.text;
  const result = await callChatGpt(prompt);

  if (result) {
    res.status(200).json({
      result,
    });
  } else {
    res.status(500).json({ error: "api error" });
  }
});

module.exports = router;
