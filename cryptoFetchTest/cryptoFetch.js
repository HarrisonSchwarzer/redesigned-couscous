const fetch = require('isomorphic-fetch');

const getPrice = () => fetch("https://9lajwxzi8h.execute-api.us-east-1.amazonaws.com/default/cryptocompareTest", {
  method: "GET",
  headers: {
    "content-Type": "application/json"
  }
}).then(response => response.json())
  .then(myJson => console.log(JSON.stringify(myJson)));

getPrice();