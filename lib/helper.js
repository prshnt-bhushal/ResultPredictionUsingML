// fetch data from DB
const BASE_URL = 'http://localhost:3000/';

export const getResults = async (sNum) => {
  const response = await fetch(`${BASE_URL}api/result?sNum=${sNum}`);
  const data = await response.json();

  return data;
};

// fetch single data from DB
// export const getTableItem = async (formid) => {
//   try {
//     const response = await fetch(`${BASE_URL}api/result`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();

//     // Find the item with the matching _id within the 'items' array
//     const item = data.items.find((item) => item._id === formid);

//     if (item) {
//       return item;
//     } else {
//       throw new Error('Item not found');
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error('Internal Server Error');
//   }
// };

// posting new items to DB
// export const postResults = async (formData) => {
//   try {
//     const { name, date, ...otherData } = formData;

//     // Convert the date to the desired format (YYYY-MM-DD)
//     const formattedDate = date
//       ? new Date(date).toISOString().split('T')[0]
//       : '';

//     const requestData = {
//       name,
//       date: formattedDate,
//       ...otherData,
//     };

//     const response = await fetch(`${BASE_URL}api/result`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     });

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// updating items in DB
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
