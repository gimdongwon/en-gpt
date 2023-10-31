const express = require("express");

require("dotenv").config();

const { OpenAI } = require("openai");
const { openaiApiKey } = process.env;

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function callChatGpt(content) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content,
        },
      ],
      max_tokens: 50, // 적절한 길이로 조정
      temperature: 0, // 0으로 설정하여 플레이그라운드 모드 활성화
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = { callChatGpt };
