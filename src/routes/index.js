const express = require("express");
const router = express.Router();
const { callChatGpt } = require("../services");

router.get("/", async (req, res) => {
  // return res.status(200).json({
  //   message: "success",
  // });
  const prompt = "안녕 gpt야, 널 api 테스트 중이야";
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
