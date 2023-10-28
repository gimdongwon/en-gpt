const express = require("express");
const router = express.Router();
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const { openaiApiKey } = process.env;

async function callChatGpt(prompt) {
  const configuration = new Configuration({
    apiKey: openaiApiKey,
  });
  try {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: "hello world" }],
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

router.get("/", async (req, res) => {
  //   const prompt = req.body.prompt;
  const prompt = "안녕 gpt야";
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
