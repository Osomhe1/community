import axios from 'axios';



// *** API SETUP ***/
const token= JSON.parse(localStorage.getItem('communeety-auth-session'))?.state?.userData?.token;
const API = axios.create({ baseURL: `http://lamp3.ncaa.gov.ng/` });
API.interceptors.request.use((req) => {
  req.headers['token'] = token;
  req.headers['Content-type'] = 'application/json';
  req.headers["Accept"] = 'application/json';
  return req;
});
export default API;




 
export const API_FILE = axios.create({ baseURL: `http://lamp3.ncaa.gov.ng/` });
API.interceptors.request.use((req) => {
  req.headers['token'] = token;
  req.headers['Content-type'] = 'multipart/form-data';
  req.headers["Accept"] = 'multipart/form-data';
  return req;
});






