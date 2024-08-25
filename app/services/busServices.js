import axios from 'axios';

const fetchBuses = async (from, to) => {
  try {
    const response = await axios.get(`buses/`, {
      params: { from, to },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

axios.get('https://your-backend-url.com/tickets/')
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });

// Example: Verify a QR code
axios.post('https:///tickets/verify/', {
  data: 'your-qr-code-data',
  isApp: true,
})
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });

// Example: Fetch analytics data
axios.get('https://your-backend-url.com/analytics/')
  .then(response => {
    console.log(response.data); // Handle the response data
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });

// Call the function with desired locations
fetchBuses("LocationA", "LocationB");
