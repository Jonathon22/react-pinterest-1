// import axios from 'axios';

// const baseUrl = 'https://fir-cows-958ae.firebaseio.com/pinterest-webpack';

// const patchFBBoardkeys = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/boards.json`).then((response) => {
//     // console.warn(Object.keys(response.data));
//     const keys = Object.keys(response.data);
//     keys.forEach((key) => {
//       axios.patch(`${baseUrl}/boards/${key}.json`, { firebaseKey: key });
//     });
//   }).catch((error) => reject(error));
// });

// const patchFBPinkeys = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/pins.json`).then((response) => {
//     // console.warn(Object.keys(response.data));
//     const keys = Object.keys(response.data);
//     keys.forEach((key) => {
//       axios.patch(`${baseUrl}/pins/${key}.json`, { firebaseKey: key });
//     });
//   }).catch((error) => reject(error));
// });

// export {
//   patchFBBoardkeys,
//   patchFBPinkeys,
// };
