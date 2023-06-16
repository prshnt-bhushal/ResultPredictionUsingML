const getError = (error) =>
  error.response && error.response.data.message
    ? error.response.data.message
    : error.message;

export { getError };