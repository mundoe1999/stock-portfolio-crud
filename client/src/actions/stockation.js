import axios from 'axios';
import Cookies from 'js-cookie';

export const getTransactions = () => {
  return axios
  .get('https://fellowship-stocks-api.herokuapp.com/stock', {
    headers: {
      "Authorization": `Bearer ${Cookies.get('user-data')}`,
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => {
    console.log(res);
    return res.data
  })
  .catch(err => console.log(err));
}


export const groupTransactions = () => {
  return axios
  .get('https://fellowship-stocks-api.herokuapp.com/stock/group', {
    headers: {
      "Authorization": `Bearer ${Cookies.get('user-data')}`,
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => {
    console.log(res);
    return res.data
  })
  .catch(err => console.log(err));
}

export const addTransaction = (payment) => {
  return axios
  .post('https://fellowship-stocks-api.herokuapp.com/stock', payment,
  {
    headers: {
      "Authorization": `Bearer ${Cookies.get('user-data')}`,
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log(err);
    return false;
  });
}