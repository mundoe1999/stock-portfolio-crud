import axios from 'axios';
import Cookies from 'js-cookie';

export const accountSignup = (user, cb) => {
  // Encrypt packet
  /*STUB*/

  //Send to back-end
  return axios
  .post('https://fellowship-stocks-api.herokuapp.com/account/register', user, {
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
  .post('https://fellowship-stocks-api.herokuapp.com/account/login', user, {
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

export const getAccountBalance = () => {
  return axios
  .get('https://fellowship-stocks-api.herokuapp.com/account/balance' , {
    headers: {
      "Authorization": `Bearer ${Cookies.get('user-data')}`,
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => res.data.balance)
  .catch(err => {
    console.log(err);
    return 0;
  })
}