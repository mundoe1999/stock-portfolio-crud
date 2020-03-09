import axios from 'axios';
import Cookies from 'js-cookie';

export const getTransactions = () => {
  return axios
  .get('http://localhost:3001/stock', {
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