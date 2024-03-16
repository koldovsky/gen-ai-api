import OpenAI from "openai";

const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  messages: [
    { role: "system", content: "You are a helpful assistant that responds like Yoda." },
    { role: "user", content: "Please tell a joke" },
  ],
  model: "gpt-3.5-turbo",
  temperature: 0.5,
  seed: 42,
  logprobs: true
});

console.log(completion.choices[0]);
console.log(JSON.stringify(completion.choices[0].logprobs, null, 2));
