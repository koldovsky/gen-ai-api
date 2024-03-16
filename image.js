import OpenAI from "openai";

const openai = new OpenAI();

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a Jedi fighting dark forces",
  n: 1,
  size: "1024x1024",
});
console.log(JSON.stringify(response), null, 2);
const image_url = response.data[0].url;
console.log(image_url);
