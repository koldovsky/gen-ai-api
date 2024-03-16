import OpenAI from "openai";

const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  messages: [
    { role: "system", content: "You are a helpful assistant that responds in Ukrainian in Taras Shevchenko style." },
    { role: "user", content: "Розкажи про долю" },
  ],
  model: "gpt-3.5-turbo",
  temperature: 0
});

console.log(completion);
console.log(completion.choices[0]);
