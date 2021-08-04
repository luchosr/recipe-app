import axios from "axios";

const YOUR_APP_KEY = "5921ba20055f2db26a9830b8f3d3c385";
const YOUR_APP_ID = "9d4e696c";

export const getRecepies = async (query) => {
  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  await axios.get(url);
};
