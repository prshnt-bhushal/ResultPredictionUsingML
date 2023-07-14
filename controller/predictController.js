export async function predict(req, res) {
  const axios = require('axios');

  const data = {
    grades: [3.5, 2.8, 3.2, 2.9],
  };

  axios
    .post('http://127.0.0.1:5000/api/predict', data)
    .then((response) => {
      console.log(response.data);
      // Handle the predicted grades returned in the response
    })  
    .catch((error) => {
      console.error(error);
      // Handle any errors that occurred during the request
    });
}
