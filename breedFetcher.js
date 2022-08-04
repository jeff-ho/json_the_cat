let request = require("request");
const arg = process.argv;

const breedFetcher = () => {
  const breed = arg[2];
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log("error:", error);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Your requested breed is not found!");
      return;
    } else {
      console.log(data[0].description);
    }
  });
};

breedFetcher();
