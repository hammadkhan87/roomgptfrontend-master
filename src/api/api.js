import axios from "axios";
import { refreshToken } from "../constants/cosntants";
import { BASE_URL } from "../constants/cosntants";



export const API_URL =BASE_URL+"/"


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
  
// export const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'X-CSRFToken': getCookie('csrftoken'),
//     "Content-type": "application/json",
//     mode: 'same-origin',
//     Authorization: `Bearer ${await refreshToken()}`
//   }
// });



export default class ApiService{
 
  static async saveStripeInfo(data={}){
    const api = axios.create({
      baseURL: API_URL,
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        "Content-type": "application/json",
        mode: 'same-origin',
        Authorization: `Bearer ${await refreshToken()}`
      }
    });
    return api.post(`${API_URL}/save-stripe-info/`, data)
  }
}