const axios = require('axios');

// Base URL of the API
const BASE_URL = 'https://api-dev.techetronventures.com';
describe('API Automation Suite', () => {
  let sessionToken; // To store session token
  let accessToken;  // To store access token

  // Test Case 1: Get session
  test('Should fetch session successfully', async () => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, {

         "identifier": '1333333322',
         "countryCode": "880",
         "identifier_type": "phone",
         "password": "0000"

    });

    // Assertions
    expect(response.status).toBe(200);
    sessionToken = response.data.data.session;
    console.log(sessionToken);
  });

  // Test Case 2: Get access token
  test('Should fetch access token successfully', async () => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/login/otp`, {
          "code": "0000",
          "session": sessionToken,
          "deviceInfo": {
              "country": "BD",
              "deviceModel": "Mac M1 chip",
              "deviceName": "TVL Macbook QA",
              "deviceId": "1f930014983c5e17d68df9c7f501cc49",
              "platform": "ios"
          }
    });

    // Assertions
    expect(response.status).toBe(200);
    accessToken = response.data.data.access;
    console.log(accessToken);

  });


});
