import { Configuration, OpenAIApi } from "openai";

const handler = async (req, res) => {
  try {
    const prompt = `I want to generate a new fire safety scenario for a quiz. Each scenario should be realistic but should require the Fire Safety manager or SCDF (Singapore Civil Defence Force) personnel to prepare and think. Scenarios can be in various locations like Factories, Schools, Warehouses, etc. Please be specific when giving these scenarios, including the location of the fire and the positions of everyone involved. There should be no repeated scenarios. Provide the procedure that should be followed in these events. Describe the procedure, and I'll rate your response and provide feedback when you're done.`;

    const configuration = new Configuration({
      apiKey: "pk-kdLYVPhtNDChewejbACOXEokJLAxdJCDYLwojZclKvMZfxmE", 
      basePath: "https://api.pawan.krd/v1",
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["Human: ", "AI: "],
    });

    const responseData = response.data.choices[0].text;
    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default handler;
