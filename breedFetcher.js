let request = require("request");

const fetchBreedDescription = function(breed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(error, "Your requested breed is not found!");
    } else {
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };


