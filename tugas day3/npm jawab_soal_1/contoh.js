// Import Axios
const axios = require('axios');

// URL endpoint API yang akan diakses
const apiUrl = 'https://api.example.com/data';

// Melakukan permintaan GET menggunakan Axios
axios.get(apiUrl)
  .then(response => {
    // Handle respon dari API
    console.log('Data dari API:', response.data);
  })
  .catch(error => {
    // Handle error jika terjadi
    console.error('Error:', error);
  });
