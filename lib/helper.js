// fetch data from DB
const BASE_URL = 'http://localhost:3000/';

export const getResults = async (sNum) => {
  const response = await fetch(`${BASE_URL}api/result?sNum=${sNum}`);
  const data = await response.json();

  return data;
};

export const updateResults = async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}api/result/${req.body.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// deleting items from DB
export const deleteResults = async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}api/result/${req.body.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getPredictions = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

