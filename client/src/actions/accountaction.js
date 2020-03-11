import axios from 'axios';
import Cookies from 'js-cookie';

export const accountSignup = (user, cb) => {
  // Encrypt packet
  /*STUB*/

  //Send to back-end
  return axios
  .post('http://localhost:3001/account/register', user, {
    headers: {"Access-Control-Allow-Origin": "*"}
    })
  .then(res => {
    console.log(res);
    return true;
  })
  .catch(err => {
    console.log(err);
    return false;
  })
}


export const accountLogin = (user, cb) => {
  // Encrypt packet
  /*STUB*/

  //Send to back-end
return axios
.post('http://localhost:3001/account/login', user, {
  headers: {"Access-Control-Allow-Origin": "*"}
})
.then(res => {
  console.log(res);
  Cookies.set("user-data", res.data.token);
  return true;
})
.catch(err => {
  console.log(err);
  return false;
})

}