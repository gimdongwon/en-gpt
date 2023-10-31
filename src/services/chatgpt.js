const express = require("express");

require("dotenv").config();

const { OpenAI } = require("openai");
const { openaiApiKey } = process.env;

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function callChatGpt(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = { callChatGpt };
