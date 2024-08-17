// import axios from 'axios';
// import { getToken, USER_TOKEN } from 'appConfig/asyncStorage';
// import { BASE_URL } from 'appConfig';

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });

// export const fetchRequest = request => success => failed => dispatch => {
//   axiosInstance({
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     ...request,
//   })
//     .then(async response => {
//       dispatch(success({ response: response.data }));
//     })
//     .catch(error => {
//       console.log(JSON.stringify(error));
//       if (error.response) dispatch(failed({ error: error?.response?.data }));
//       else {
//         dispatch(failed({ error: error?.message }));
//       }
//     });
// };

// export const fetchRequestWithToken =
//   request => success => failed => async dispatch => {
//     const token = await getToken(USER_TOKEN);
//     axiosInstance({
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//         Authorization: `Bearer ${JSON.parse(token)}`,
//       },
//       ...request,
//     })
//       .then(async response => {
//         dispatch(success({ response: response.data }));
//       })
//       .catch(error => {
//         console.log(JSON.stringify(error));
//         if (error.response)
//           return dispatch(failed({ error: error?.response?.data }));
//         else {
//           dispatch(failed({ error: error?.message }));
//         }
//       });
//   };
